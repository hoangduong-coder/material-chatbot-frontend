import { Answer, Question } from "../../types";

import { AppDispatch } from "../store/store";
import cluService from "../api/clu";
import { createSlice } from "@reduxjs/toolkit";
import searchService from "../api/qna-search";

interface Message {
  title: "QUESTION" | "ANSWER";
  content: Question | Answer;
}

interface QnAState {
  message: Message;
  allChat: Array<Message>;
}

const initialState: QnAState = {
  message: {
    title: "QUESTION",
    content: {
      qnaId: "0",
      question: "",
    },
  },
  allChat: [
    {
      title: "ANSWER",
      content: {
        id: "0",
        questions: [],
        answer: "Hello, how can I help you?",
      },
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
    getAnswer: (state, action) => {
      const message = action.payload;
      state.message = message;
      state.allChat.push(message);
    },
  },
});

export const { createQuestion, getAnswer } = qnaSlice.actions;

export const postNewQuestion = (question: string) => {
  return async (dispatch: AppDispatch) => {
    const newQuestionObject: Question = {
      qnaId: "0",
      question: question,
    };
    const intents = await cluService.postUtterance(newQuestionObject);
    const answer = await searchService.postQuestion(intents);

    dispatch(
      createQuestion({ title: "QUESTION", content: answer.questions[0] })
    );

    dispatch(
      getAnswer({
        title: "ANSWER",
        content: answer,
      })
    );
  };
};

export default qnaSlice.reducer;
