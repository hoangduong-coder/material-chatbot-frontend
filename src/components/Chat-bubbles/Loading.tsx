import "./styles.scss";

import { BeatLoader } from "react-spinners";
import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <p>Bot is typing</p>
      <BeatLoader color="#cccccc" size={7} />
    </div>
  );
};

export default Loading;
