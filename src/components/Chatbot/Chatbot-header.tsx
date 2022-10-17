import { Avatar } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
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
        <HorizontalRuleIcon />
        <CloseRoundedIcon />
      </div>
    </div>
  );
};

export default ChatbotHeader;
