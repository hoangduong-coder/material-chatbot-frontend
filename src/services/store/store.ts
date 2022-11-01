import chatLogReducer from "../slices/reducer";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../slices/reducer";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    chatLog: chatLogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
