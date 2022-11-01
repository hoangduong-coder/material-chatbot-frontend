import ChatBubble from "../Chat-bubbles";
import React from "react";
import { useAppSelector } from "../../services/slices/hooks";

const ChatbotBody = () => {
  const chatLog = useAppSelector((state) => state.chatLog.allChat);
  return (
    <div className="chatbot-body">
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
  );
};

export default ChatbotBody;
