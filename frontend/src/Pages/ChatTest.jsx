// import { useEffect } from "react";

import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

const SocketProvider = (props) => {
  const socket = useMemo(() => io("localhost:4000"), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

export const ChatTest = () => {
    const socket = useSocket();

    console.log(socket);
    const emitter = () => {
        console.log("here");
        socket.emit('connection');
    }

    return(
        <p onClick={emitter}>Hello World</p>
    );
};