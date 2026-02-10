export function saveMessage(text, sender) {
  const history = JSON.parse(localStorage.getItem("chat")) || [];
  history.push({ text, sender });
  localStorage.setItem("chat", JSON.stringify(history));
}
