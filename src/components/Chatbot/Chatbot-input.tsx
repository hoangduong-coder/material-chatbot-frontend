import { postNewQuestion } from "../../services/slices/reducer";

import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useAppDispatch } from "../../services/slices/hooks";

const ChatBotInput = () => {
  const dispatch = useAppDispatch();
  const sendChat = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      query: { value: string };
    };
    dispatch(postNewQuestion({ question: target.query.value }));
    target.query.value = "";
  };

  return (
    <div className="chatbot-bottom">
      <form onSubmit={sendChat}>
        <input className="chatbot-input" name="query" />
        <button type="submit" className="button">
          <SendRoundedIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatBotInput;
