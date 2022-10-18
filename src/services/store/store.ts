import answerReducer from "../slices/reducer";
import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../slices/reducer";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    answer: answerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
