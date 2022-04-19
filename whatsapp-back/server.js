import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://igal:GDlcVSE1D7rzLBVt@cluster0.44sxq.mongodb.net/whatsappdb?retryWrites=true&w=majority";

const pusher = new Pusher({
  appId: "1388676",
  key: "45b7556bf01da8b2ff61",
  secret: "c7b7fb288aa386c7fa2f",
  cluster: "ap2",
  useTLS: true,
});

app.use(express.json());
app.use(cors());

mongoose.connect(connection_url);

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB is connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error");
    }
  });
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
