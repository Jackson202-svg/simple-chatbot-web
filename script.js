const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {
  if (message.includes("hello")) return "Hello! 👋";
  if (message.includes("help")) return "How can I help you?";
  if (message.includes("time")) return new Date().toLocaleTimeString();
  return "Sorry, I don't understand that yet 🤖";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = botReply(text.toLowerCase());
    addMessage(reply, "bot");
  }, 500);
}
