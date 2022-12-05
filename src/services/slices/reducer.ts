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
  botIsOpen: false,
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
    toggleBot: (state, action) => {
      state.botIsOpen = action.payload;
    },
  },
});

export const { createQuestion, getAnswer, toggleBot } = qnaSlice.actions;

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

export const toggleButton = (chatOn: boolean, timing: number) => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(toggleBot(chatOn));
    }, timing);
  };
};

export default qnaSlice.reducer;
