import { savePost } from "../api/createApi.js";
import { validatePost } from "./validators.js";

const form = document.getElementById("create-post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const authorInput = document.getElementById("author");
const tagsInput = document.getElementById("tags");
const messageBox = document.getElementById("form-message");

function showMessage(message, type) {
  if (!messageBox) return;
  messageBox.textContent = message;
  messageBox.className = `form-message ${type}`;
}

function clearMessage() {
  if (!messageBox) return;
  messageBox.textContent = "";
  messageBox.className = "form-message";
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessage();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const author = authorInput.value.trim();
    const tagsText = tagsInput.value.trim();

    const error = validatePost(title, body, author);

if (error) {
  showMessage(error, "error");
  return;
}
    const tags = tagsText
      ? tagsText.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
      : [];

    const newPost = {
      id: Date.now().toString(),
      title,
      body,
      author,
      tags
    };

    savePost(newPost);
    showMessage("Post created successfully.", "success");
    form.reset();

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 700);
  });
}