import React, { useEffect } from "react";
import {
  getAnswerFromBot,
  postNewQuestion,
} from "../../services/slices/reducer";
import { useAppDispatch, useAppSelector } from "../../services/slices/hooks";

import SendRoundedIcon from "@mui/icons-material/SendRounded";

const ChatBotInput = () => {
  const dispatch = useAppDispatch();
  const initialMessage = useAppSelector((state) => state.chatbot.message);

  const sendChat = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      query: { value: string };
    };
    dispatch(postNewQuestion(target.query.value));
    target.query.value = "";
  };

  useEffect(() => {
    initialMessage.title === "QUESTION" &&
      dispatch(
        getAnswerFromBot(
          //@ts-ignore
          initialMessage["content"]
        )
      );
  }, [dispatch, initialMessage]);

  return (
    <div className="chatbot-bottom">
      <form onSubmit={sendChat} className="form">
        <input
          className="chatbot-input"
          name="query"
          placeholder="Type a message"
        />
        <button type="submit" className="button">
          <SendRoundedIcon fontSize="large" sx={{ color: "#004A6B" }} />
        </button>
      </form>
    </div>
  );
};

export default ChatBotInput;
