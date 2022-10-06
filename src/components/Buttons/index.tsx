import "./styles.scss";

import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";

interface ButtonProps {
  chatOn: boolean;
  onClick: any;
}

const Button = ({ chatOn, onClick }: ButtonProps) => {
  return (
    <div className="main-button">
      <button onClick={onClick} className="icon">
        {!chatOn ? (
          <ChatRoundedIcon style={{ color: "#ffffff" }} />
        ) : (
          <CloseRoundedIcon style={{ color: "#ffffff" }} />
        )}
      </button>
    </div>
  );
};

export default Button;
