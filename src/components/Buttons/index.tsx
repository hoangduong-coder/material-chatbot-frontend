import "./styles.scss";

import React, { useState } from "react";

import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Button = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toggleButton = (): void => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="main-button">
      <button onClick={toggleButton} className="icon">
        {!isClicked ? (
          <ChatRoundedIcon style={{ color: "#ffffff" }} />
        ) : (
          <CloseRoundedIcon style={{ color: "#ffffff" }} />
        )}
      </button>
    </div>
  );
};

export default Button;
