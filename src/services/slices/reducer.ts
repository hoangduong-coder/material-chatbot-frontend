import { Answer, Question } from "../../types";

import { AppDispatch } from "../store/store";
import cluService from "../api/clu";
import { createSlice } from "@reduxjs/toolkit";
import searchService from "../api/qna-search";

interface Message {
  title: "QUESTION" | "ANSWER";
  content: Question | Answer;
}

interface ChatbotState {
  message: Message;
  allChat: Array<Message>;
  botIsOpen: boolean;
}

const initialState: ChatbotState = {
  message: {
    title: "ANSWER",
    content: {
      id: "0",
      questions: [],
      answer: "Hello, how can I help you?",
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
  botIsOpen: false,
};

export const qnaSlice = createSlice({
  name: "questionAndAnswer",
  initialState,
  reducers: {
    createNewMessage: (state, action) => {
      const message = action.payload;
      state.message = message;
      state.allChat.push(message);
    },
    toggleBot: (state, action) => {
      state.botIsOpen = action.payload;
    },
  },
});

export const { createNewMessage, toggleBot } = qnaSlice.actions;

export const postNewQuestion = (question: string) => {
  return async (dispatch: AppDispatch) => {
    const intents = await cluService.postUtterance(question);
    const query = await searchService.post(intents);
    dispatch(createNewMessage({ title: "QUESTION", content: query }));
  };
};

export const getAnswerFromBot = (question: Question) => {
  return async (dispatch: AppDispatch) => {
    const answer = await searchService.get(question.qnaId);
    setTimeout(() => {
      dispatch(createNewMessage({ title: "ANSWER", content: answer }));
    }, 2000);
  };
};

export const toggleButton = (chatOn: boolean, timing: number) => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(toggleBot(chatOn));
    }, timing);
  };
};

export default qnaSlice.reducer;
