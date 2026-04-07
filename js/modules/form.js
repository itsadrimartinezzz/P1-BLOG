import { savePost } from "../api/createApi.js";

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

    if (!title || !body || !author) {
      showMessage("All fields are required.", "error");
      return;
    }

    if (title.length < 4) {
      showMessage("Title must be at least 4 characters.", "error");
      return;
    }

    if (body.length < 10) {
      showMessage("Content must be at least 10 characters.", "error");
      return;
    }

    if (author.length < 2) {
      showMessage("Author must be at least 2 characters.", "error");
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