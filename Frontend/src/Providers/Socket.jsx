import React, { useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext(null);

export const useSocket = () => {
  return useContext(SocketContext); // ✅ added return
};

export const SocketProvider = ({ children }) => {
  const socket = useMemo(
    () => io("http://localhost:5000"), // ✅ fixed URL
    []
  );

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
