import React, { useState } from "react";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import qnaService from "../../services/questions";

const ChatBotInput = () => {
  const [chat, setChat] = useState<string>("Hello");
  const sendChat = async () => {
    const data = await qnaService.postQuestion({
      question: "Standard MAT0001",
    });
    console.log(data.answers);
    setChat(data.answers[0].answer);
  };

  return (
    <div>
      {chat}
      <input />
      <button type="submit" onClick={() => sendChat()}>
        <SendRoundedIcon />
      </button>
    </div>
  );
};

export default ChatBotInput;
