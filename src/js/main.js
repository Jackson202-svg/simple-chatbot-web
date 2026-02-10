import { getBotResponse } from "../bot/bot.js";
import { addMessage } from "../utils/helpers.js";

window.sendMessage = function () {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    const reply = getBotResponse(text);
    addMessage(reply, "bot");
  }, 400);
};
