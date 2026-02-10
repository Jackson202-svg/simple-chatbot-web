export function addMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");

  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}
