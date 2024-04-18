import express from "express";
import { server } from "../index.js";
import { Server } from "socket.io";

export const socketSetup = () => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("click", () => {
      console.log("clik");
    });
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
};
