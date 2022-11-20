import { Answer, Question } from "../../types";

import { AppDispatch } from "../store/store";
import { QueryModels } from "./../../types/helperTypes/clu";
import cluService from "../azure-api/clu";
import { createSlice } from "@reduxjs/toolkit";

import MainQuestion from "../func/mainQuestion";

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
  message: { title: "QUESTION", content: { question: "" } },
  allChat: [
    {
      title: "ANSWER",
      content: { answer: "Hello, how can I help you?" },
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

export const postNewQuestion = (question: Question) => {
  return async (dispatch: AppDispatch) => {
    const intents = await cluService.postUtterance(question);
    dispatch(getIntent({ title: "GET_INTENTION", content: intents }));
    dispatch(createQuestion({ title: "QUESTION", content: question }));
    dispatch(getAnswer({ title: "ANSWER", content: {answer: MainQuestion(intents) }}));
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
