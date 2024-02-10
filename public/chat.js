//make connection
const socket = io.connect("http://localhost:3000/");

// Query DOM
const message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output"),
  feedback = document.getElementById("feedback");

//Emit events
btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", handle.value);
});

//Listen for events and ouput to the DOM
socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ": " + "</strong>" + data.message + "</p>";
});

socket.on("typing", (data) => {
  feedback.innerHTML = "<p>" + data + " is typing..." + "</p>";
});
