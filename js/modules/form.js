import { savePost } from "../api/createApi.js";

const form = document.getElementById("create-post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const authorInput = document.getElementById("author");
const tagsInput = document.getElementById("tags");
const messageBox = document.getElementById("form-message");

function showMessage(message, type = "success") {
  if (!messageBox) return;

  messageBox.textContent = message;
  messageBox.className = `form-message ${type}`;
}

function clearMessage() {
  if (!messageBox) return;

  messageBox.textContent = "";
  messageBox.className = "form-message";
}

function validateForm(title, body, author) {
  if (!title || !body || !author) {
    return "Please complete all required fields.";
  }

  if (title.trim().length < 4) {
    return "The title must have at least 4 characters.";
  }

  if (body.trim().length < 10) {
    return "The content must have at least 10 characters.";
  }

  if (author.trim().length < 2) {
    return "The author must have at least 2 characters.";
  }

  return "";
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearMessage();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const author = authorInput.value.trim();
    const tagsText = tagsInput ? tagsInput.value.trim() : "";

    const validationError = validateForm(title, body, author);

    if (validationError) {
      showMessage(validationError, "error");
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
    }, 900);
  });
}