import { Answer, Question } from "../../types";

import { AppDispatch } from "../store/store";
import cluService from "../api/clu";
import { createSlice } from "@reduxjs/toolkit";
import qnaService from "../api/azure-qna";
import searchService from "../api/qna-search";

export interface Message {
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

export const getAnswerFromBot = (question: Question) => {
  return async (dispatch: AppDispatch) => {
    const { answers } = await qnaService.postStaticQuestion(question);
    if (
      answers &&
      answers.length !== 0 &&
      answers[0]["answer"] !== "No answer found"
    ) {
      setTimeout(() => {
        dispatch(createNewMessage({ title: "ANSWER", content: answers[0] }));
      }, 2000);
    } else {
      const intents = await cluService.postUtterance(question.question);
      const query = await searchService.post(intents);
      //@ts-ignore
      const answer = await searchService.get(query.qnaId);
      if (answer && answer.answer.length !== 0) {
        setTimeout(() => {
          dispatch(createNewMessage({ title: "ANSWER", content: answer }));
        }, 1000);
      } else {
        dispatch(
          createNewMessage({
            title: "ANSWER",
            content: {
              question: [query],
              answer: "No answer found.",
            },
          })
        );
      }
    }
  };
};

export const postNewQuestion = (question: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      createNewMessage({
        title: "QUESTION",
        content: {
          question: question,
        },
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
