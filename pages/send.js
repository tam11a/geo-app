/*import { useRouter } from "next/router";
import React, { useEffect } from "react";

import io from "Socket.IO-client";
let socket;

const send = () => {
  const router = useRouter();
  console.log(!!Object.keys(router.query).length);
  console.log(router.query);

  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-input", (msg) => {
      console.log(msg);
    });

    socket.emit("input-change", router.query);
  };

  return <div>send</div>;
};

export default send;
*/
