import express from "express";
// import { server } from "../index.js";
import { Server } from "socket.io";
import { createServer } from "http";
// const socketio = require("socket.io");
// // io.on("connection", (socket) => {
// //   console.log("a user connected");
// // });

const app = express();
const socketServer = createServer(app);

export const createChat = async (req, res) => {
  try {
    res.status(201).send("chatroom");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
