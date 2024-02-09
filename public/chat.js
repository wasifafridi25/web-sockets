//make connection
const socket = io.connect("http://localhost:3000/");

// Query DOM
const message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output");

//Emit events
btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

//Listenfor events and ouput to the DOM
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ": " + '</strong>' + data.message + '</p>'
})
