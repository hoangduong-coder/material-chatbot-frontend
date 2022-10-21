import { Answer, Question } from "../../types";

import { AppDispatch } from "./../store/store";
import { RootState } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";
import questionService from "../azure-api/questions";

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
    createQuestion: (state, action) => {
      const message = action.payload;
      state.question = message;
    },
    getAnswer: (state, action) => {
      const message = action.payload;
      state.answer = message;
    },
  },
});

export const { createQuestion, getAnswer } = qnaSlice.actions;

export const selectQuestion = (state: RootState) => state.question;
export const selectAnswer = (state: RootState) => state.answer;

export const postNewQuestion = (question: Question) => {
  return async (dispatch: AppDispatch) => {
    const answer = await questionService.postQuestion(question);
    dispatch(getAnswer(answer));
  };
};

export default qnaSlice.reducer;
