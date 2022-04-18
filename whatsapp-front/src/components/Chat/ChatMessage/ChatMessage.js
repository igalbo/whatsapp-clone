import React from "react";
import "./ChatMessage.css";

function ChatMessage({ receiver }) {
  return (
    <div className={`chat__message ${receiver && "chat__receiver"}`}>
      <span className="chat__name">Igal</span>
      This is a message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </div>
  );
}

export default ChatMessage;
