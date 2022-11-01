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
      <div
        className={className === "chat-reply" ? "bubble-right" : "bubble-left"}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
