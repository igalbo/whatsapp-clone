import React from "react";
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

function Chat() {
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
        <ChatMessage />
        <ChatMessage receiver />
        <ChatMessage />
        <ChatMessage receiver />
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            // value={input}
            // onChange={(e) => SettingsInputAntenna(e.tartget.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
