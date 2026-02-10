let lastUserMessage = "";

export function remember(text) {
  lastUserMessage = text;
}

export function recall() {
  return lastUserMessage;
}
