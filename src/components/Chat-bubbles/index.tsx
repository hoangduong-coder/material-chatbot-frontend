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
      <p
        className={className === "chat-reply" ? "bubble-right" : "bubble-left"}
      >
        {message}
      </p>
    </div>
  );
};

export default ChatBubble;
