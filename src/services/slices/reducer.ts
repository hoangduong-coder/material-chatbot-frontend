import { Answer, Question } from "../../types";

import { AppDispatch } from "./../store/store";
import { createSlice } from "@reduxjs/toolkit";
import questionService from "../azure-api/questions";

interface Message {
  title: "QUESTION" | "ANSWER";
  content: Question | Answer;
}

interface QnAState {
  message: Message;
  allChat: Array<Message>;
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
    getAnswer: (state, action) => {
      const message = action.payload;
      state.message = message;
      state.allChat.push(message);
    },
  },
});

export const { createQuestion, getAnswer } = qnaSlice.actions;

export const postNewQuestion = (question: Question) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createQuestion({ title: "QUESTION", content: question }));
    const answer = await questionService.postQuestion(question);
    dispatch(getAnswer({ title: "ANSWER", content: answer.answers[0] }));
  };
};

export default qnaSlice.reducer;
