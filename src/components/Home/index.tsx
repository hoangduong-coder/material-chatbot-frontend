import "./styles.scss";

import Button from "../Buttons";
import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      Look at the bottom-right corner{" "}
      <div className="chatbot-area">
        <Button />
      </div>
    </div>
  );
};
export default Home;
