/* eslint-disable react-hooks/exhaustive-deps */

import "./styles.css";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/slices/hooks";

import Button from "../Buttons";
import Chatbot from "../Chatbot";
import { toggleButton } from "../../services/slices/reducer";

const Home = () => {
  const chatOn = useAppSelector((state) => state.chatbot.botIsOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleButton(!chatOn, 1500));
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <h1>Look at the bottom-right corner</h1>
        <span>
          Instructions can be seen{" "}
          <a
            href="https://github.com/hoangduong-coder/material-chatbot-frontend/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </span>
      </div>

      <div className="chatbot-area">
        {chatOn && <Chatbot />}

        <div className="button-area">
          <Button
            onClick={() => dispatch(toggleButton(!chatOn, 0))}
            chatOn={chatOn}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
