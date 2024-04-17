import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

export const socketSetup = () => {
  const app = express();
  const socketServer = createServer(app);

  const io = new Server(socketServer);

  io.on("connection", (socket) => {
    console.log("a user connected");
  });

  app.listen(4000, () => console.log(`Socket server Port : ${4000}`));
};
