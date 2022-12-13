import { Avatar } from "@mui/material";
import ChatBubble from "../Chat-bubbles";
import Loading from "../Chat-bubbles/Loading";
import { Message } from "../../services/slices/reducer";
import React from "react";
import logo from "../../assets/small-logo.jpeg";
import { useAppSelector } from "../../services/slices/hooks";
import { usePromiseTracker } from "react-promise-tracker";

interface BubblesProps {
  key: string;
  className: string;
  message: string;
}

const chatBubblesProps = (obj: Message): BubblesProps => {
  switch (obj.title) {
    case "QUESTION":
      return {
        key: `${Math.random() * 10000}`,
        className: "chat-question",
        message: obj.content["question"],
      };
    default:
      return {
        key: obj.content["id"],
        className: "chat-reply",
        message: obj.content["answer"],
      };
  }
};

const ChatbotBody = () => {
  const chatLog = useAppSelector((state) => state.chatbot.allChat);
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="chatbot-body">
      <div className="chat-area">
        {chatLog.map((obj) => (
          <ChatBubble
            key={chatBubblesProps(obj).key}
            className={chatBubblesProps(obj).className}
            message={chatBubblesProps(obj).message}
          />
        ))}
        {promiseInProgress && <Loading />}
      </div>

      <div className="title">
        <Avatar
          src={logo}
          alt="Wartsila's logo"
          sx={{ width: 80, height: 80, border: "3px solid #cccccc" }}
        />
        <h2>Wärtsilä Cost Virtual Assistant Bot</h2>
      </div>
    </div>
  );
};

export default ChatbotBody;
