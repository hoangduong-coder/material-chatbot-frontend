import { Answer, Question } from "../../types";

import { RootState } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

interface QnAState {
  question: Question;
  answer: Answer;
}

const initialState: QnAState = {
  question: { question: "" },
  answer: { answer: "" },
};

export const qnaSlice = createSlice({
  name: "questionAndAnswer",
  initialState,
  reducers: {
    postQuestion: (state, action) => {
      const message = action.payload;
      state.question = message;
    },
    getAnswer: (state, action) => {
      const message = action.payload;
      state.answer = message;
    },
  },
});

export const { postQuestion, getAnswer } = qnaSlice.actions;

export default qnaSlice.reducer;
