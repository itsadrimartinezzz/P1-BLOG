export function showMessage(container, message, type = "success") {
  if (!container) return;

  container.textContent = message;
  container.className = `form-message ${type}`;
}

export function clearMessage(container) {
  if (!container) return;

  container.textContent = "";
  container.className = "form-message";
}