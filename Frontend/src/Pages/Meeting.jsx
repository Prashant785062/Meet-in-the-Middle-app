import React, { useEffect } from "react";
import { useSocket } from "../Providers/Socket";

export default function Meeting() {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("🔌 Connected:", socket.id);
    });

    socket.on("reply", (msg) => {
      console.log("📩 Server says:", msg);
    });

    return () => {
      socket.off("connect");
      socket.off("reply");
    };
  }, [socket]);

  const sendMessage = () => {
    socket.emit("message", "Hello from Meeting page!");
  };

  return (
    <div>
      <h1>Meeting Page</h1>
      <button onClick={sendMessage}>Send Test Message</button>
    </div>
  );
}
