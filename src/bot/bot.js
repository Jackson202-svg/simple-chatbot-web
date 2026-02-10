import { responses } from "./responses.js";

export function getBotResponse(text) {
  const message = text.toLowerCase();

  for (const key in responses) {
    if (message.includes(key)) {
      return responses[key];
    }
  }

  return "🤖 I'm still learning. Try typing 'help'.";
}
