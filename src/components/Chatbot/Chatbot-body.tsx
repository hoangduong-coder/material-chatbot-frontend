import { Avatar } from "@mui/material";
import ChatBubble from "../Chat-bubbles";
import React from "react";
import logo from "../../assets/small-logo.gif";
import { useAppSelector } from "../../services/slices/hooks";

const ChatbotBody = () => {
  const chatLog = useAppSelector((state) => state.chatLog.allChat);
  return (
    <div className="chatbot-body">
      <div className="chat-area">
        {chatLog.map((obj) =>
          obj.title === "QUESTION" ? (
            <ChatBubble
              //@ts-ignore
              key={obj.content.question}
              className="chat-question"
              //@ts-ignore
              message={obj.content.question}
            />
          ) : (
            <ChatBubble
              //@ts-ignore
              key={obj.content.answer}
              className="chat-reply"
              //@ts-ignore
              message={obj.content.answer}
            />
          )
        )}
      </div>

      <div className="title">
        <Avatar
          src={logo}
          alt="Wartsila's logo"
          sx={{ width: 80, height: 80 }}
        />
        <h2>Wärtsilä cooperations</h2>
      </div>
    </div>
  );
};

export default ChatbotBody;
