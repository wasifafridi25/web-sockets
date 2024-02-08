const express = require("express");
const socket = require("socket.io");
const app = express();

const server = app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

//static files
app.use(express.static("public"));

const io = socket(server);

//connection is like an onclick event listener, socket is that one instance here, there could be 10 cients
//listeing to the server, and each will have an instance
io.on("connection", (socket) => {
  console.log("socket connection made");
});
