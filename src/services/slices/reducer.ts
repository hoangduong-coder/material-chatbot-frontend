import { Answer, Question } from "../../types";

import { AppDispatch } from "../store/store";
import MainQuestion from "../func/mainQuestion";
import { QueryModels } from "./../../types/helperTypes/clu";
import cluService from "../azure-api/clu";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Message {
  title: "QUESTION" | "ANSWER";
  content: Question | Answer;
}

interface QnAState {
  message: Message;
  allChat: Array<Message>;
  intent?: QueryModels;
}

const initialState: QnAState = {
  message: { title: "QUESTION", content: { question: "", qnaId: 0 } },
  allChat: [
    {
      title: "ANSWER",
      content: { id: 0, answer: "Hello, how can I help you?" },
    },
  ],
};

export const qnaSlice = createSlice({
  name: "questionAndAnswer",
  initialState,
  reducers: {
    createQuestion: (state, action) => {
      state.allChat.push(action.payload);
    },
    getIntent: (state, action) => {
      state.intent = action.payload;
    },
    getAnswer: (state, action) => {
      const message = action.payload;
      state.message = message;
      state.allChat.push(message);
    },
  },
});

export const { createQuestion, getAnswer, getIntent } = qnaSlice.actions;

export const postNewQuestion = (question: string) => {
  return async (dispatch: AppDispatch) => {
    const newQuestionObject: Question = {
      question: question,
      qnaId: uuidv4(),
    };
    const intents = await cluService.postUtterance(newQuestionObject);
    dispatch(getIntent({ title: "GET_INTENTION", content: intents }));
    dispatch(createQuestion({ title: "QUESTION", content: newQuestionObject }));
    dispatch(
      getAnswer({
        title: "ANSWER",
        content: { answer: MainQuestion(intents), id: uuidv4() },
      })
    );
  };
};

// export const returnAnswer = (question: Question) => {
//   return async (dispatch: AppDispatch) => {
//     //const answer: any = ques;
//     console.log(ques)
//     const answer = await questionService.postQuestion(question);
//

//   };
// };

export default qnaSlice.reducer;
