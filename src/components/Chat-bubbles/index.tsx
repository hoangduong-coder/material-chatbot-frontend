import "./styles.scss";

import React from "react";

const ChatBubble = ({ message }: { message: string }) => {
  return <div className="bubbles">{message}</div>;
};

export default ChatBubble;
