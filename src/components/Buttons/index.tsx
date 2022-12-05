import "./styles.css";

import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";

interface ButtonProps {
  chatOn: boolean;
  onClick: any;
}

const Button = ({ chatOn, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="main-button">
      <div className="icon">
        {!chatOn ? (
          <ChatRoundedIcon style={{ color: "#ffffff" }} />
        ) : (
          <CloseRoundedIcon style={{ color: "#ffffff" }} />
        )}
      </div>
    </button>
  );
};

export default Button;
