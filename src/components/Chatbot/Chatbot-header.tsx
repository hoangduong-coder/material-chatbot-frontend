import { Avatar } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import logo from "../../assets/small-logo.gif";

const ChatbotHeader = () => {
  return (
    <div className="chatbot-header">
      <div className="header-left">
        <div className="logo">
          <Avatar src={logo} alt="logo" sx={{ width: 40, height: 40 }} />
        </div>
        <p>Wärtsilä cooperations </p>
      </div>
      <div className="header-right">
        <button type="submit" className="button">
          <CloseRoundedIcon fontSize="medium" sx={{ color: "#004A6B" }} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;
