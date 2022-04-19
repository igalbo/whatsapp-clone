import React from "react";
import "./ChatMessage.css";

function ChatMessage({ message }) {
  return (
    <div className={`chat__message ${message.received && "chat__receiver"}`}>
      <span className="chat__name">{message.name}</span>
      {message.message}
      <span className="chat__timestamp">{message.timestamp}</span>
    </div>
  );
}

export default ChatMessage;
