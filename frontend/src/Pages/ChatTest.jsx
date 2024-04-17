import React from "react";
import io from "socket.io-client";


export const ChatTest = () => {
    const socket = io('http://localhost:4000');

    const emitter = () => {
        console.log("here");
        socket.emit('connection');
    }
    return(
        <p onClick={emitter}>Hello World</p>
    );
};