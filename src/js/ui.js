import { getBotResponse } from "../bot/bot.js";
import { addMessage } from "../utils/helpers.js";
import { saveMessage } from "./storage.js";

export function handleSend() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  saveMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    const reply = getBotResponse(text);
    addMessage(reply, "bot");
    saveMessage(reply, "bot");
  }, 400);
}
