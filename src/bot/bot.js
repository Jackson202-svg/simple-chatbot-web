import { responses } from "./responses.js";
import { intents } from "./intents.js";
import { remember } from "./memory.js";

export function getBotResponse(text) {
  const msg = text.toLowerCase();
  remember(msg);

  for (const intent in intents) {
    if (intents[intent].some(word => msg.includes(word))) {
      return responses[intent]();
    }
  }

  return "🤖 I'm still learning. Try 'help'.";
}
