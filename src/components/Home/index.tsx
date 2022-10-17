import "./styles.css";

import React, { useState } from "react";

import Button from "../Buttons";
import Chatbot from "../Chatbot";

const Home = () => {
  const [chatOn, setChatOn] = useState<boolean>(false);

  const toggleButton = (): void => {
    setChatOn(!chatOn);
  };

  return (
    <div className="home-page">
      <h1>Look at the bottom-right corner</h1>
      <div className="chatbot-area">
        {chatOn && <Chatbot />}

        <div className="button-area">
          <Button onClick={() => toggleButton()} chatOn={chatOn} />
        </div>
      </div>
    </div>
  );
};
export default Home;
