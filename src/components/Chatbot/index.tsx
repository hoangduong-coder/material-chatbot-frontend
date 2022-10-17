import "./styles.scss";

import ChatBotInput from "./Chatbot-input";
import ChatbotBody from "./Chatbot-body";
import ChatbotHeader from "./Chatbot-header";
import React from "react";

const Chatbot = () => {
  return (
    <div className="chatbot-box">
      <ChatbotHeader />
      <ChatbotBody />
      <ChatBotInput />
    </div>
  );
};

export default Chatbot;
