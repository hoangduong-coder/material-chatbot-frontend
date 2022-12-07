import { Avatar } from "@mui/material";
import ChatBubble from "../Chat-bubbles";
import React from "react";
import logo from "../../assets/small-logo.jpeg";
import { useAppSelector } from "../../services/slices/hooks";

const ChatbotBody = () => {
  const chatLog = useAppSelector((state) => state.chatbot.allChat);
  return (
    <div className="chatbot-body">
      <div className="chat-area">
        {chatLog.map((obj) =>
          obj.title === "QUESTION" ? (
            <ChatBubble
              key={obj.content["qnaId"]}
              className="chat-question"
              message={obj.content["question"]}
            />
          ) : (
            <ChatBubble
              key={obj.content["id"]}
              className="chat-reply"
              message={obj.content["answer"]}
            />
          )
        )}
      </div>

      <div className="title">
        <Avatar
          src={logo}
          alt="Wartsila's logo"
          sx={{ width: 80, height: 80, border: "3px solid #cccccc" }}
        />
        <h2>Wärtsilä cooperations</h2>
      </div>
    </div>
  );
};

export default ChatbotBody;
