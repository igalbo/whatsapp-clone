import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";
import ChatMessage from "./ChatMessage/ChatMessage";
import axios from "../../utils/axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("./messages/new", {
      message: input,
      name: "Demo name",
      timestamp: "Right now",
      received: false,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message, id) => (
          <ChatMessage key={id} message={message} />
        ))}
        {/* <ChatMessage /> */}
        {/* <ChatMessage  />
        <ChatMessage />
        <ChatMessage receiver /> */}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
