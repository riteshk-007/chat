const socket = io();

let name;
let textarea = document.querySelector("#text");
let messageArea = document.querySelector(".chat-area");
do {
  name = prompt("Enter your name: ");
} while (!name);

textarea.addEventListener("keyup", (e) => {
  if (textarea.value === "") return;
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});

function sendMessage(message) {
  let msg = {
    user: name,
    message: message.trim(),
  };
  // Append
  appendMessage(msg, "outgoing");
  textarea.value = "";
  scrollToBottom();

  // Send to server
  socket.emit("message", msg);
}
function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");
  let markup = `<div class="user-name">${msg.user}</div>
  <div class="user-message">
    ${msg.message}
  </div>`;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

// Recieve messages

socket.on("message", (msg) => {
  appendMessage(msg, "incoming");
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}
