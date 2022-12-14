import { useAppDispatch, useAppSelector } from "../../services/slices/hooks";

import { Avatar } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import logo from "../../assets/small-logo.jpeg";
import { toggleButton } from "../../services/slices/reducer";

const ChatbotHeader = () => {
  const chatOn = useAppSelector((state) => state.chatbot.botIsOpen);
  const dispatch = useAppDispatch();
  return (
    <div className="chatbot-header">
      <div className="header-left">
        <div className="logo">
          <Avatar src={logo} alt="logo" sx={{ width: 40, height: 40 }} />
        </div>
        <p>Design to Cost Virtual Assistant ChatBot</p>
      </div>
      <div className="header-right">
        <button
          type="submit"
          className="button"
          onClick={() => dispatch(toggleButton(!chatOn, 0))}
        >
          <CloseRoundedIcon fontSize="medium" sx={{ color: "#004A6B" }} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;
