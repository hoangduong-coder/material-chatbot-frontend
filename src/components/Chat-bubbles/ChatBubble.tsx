import "./styles.scss";

import React from "react";

const ChatBubble = ({
  className,
  message,
}: {
  className: string;
  message: string;
}) => {
  return (
    <div className={className}>
      <div className="chat-bubble-content">{message}</div>
    </div>
  );
};

export default ChatBubble;
