import { handleSend } from "./ui.js";

document.getElementById("sendBtn").addEventListener("click", handleSend);
document.getElementById("input").addEventListener("keydown", e => {
  if (e.key === "Enter") handleSend();
});
