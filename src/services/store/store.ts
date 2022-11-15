import chatLogReducer from "../slices/qna-slice";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../slices/qna-slice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    chatLog: chatLogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
