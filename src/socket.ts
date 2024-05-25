import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? "" : "https://18.141.86.142:3001/";

export const socket = io(URL);
