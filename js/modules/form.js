import { createPost } from "../api/createApi.js";

export function setupForm() {
  const form = document.getElementById("create-form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const userId = document.getElementById("userId").value;

    const newPost = {
      title,
      body,
      userId: Number(userId),
    };

    try {
      await createPost(newPost);
      form.reset();
      alert("Post creado");
    } catch (error) {
      console.error(error);
      alert("Error al crear post");
    }
  });
}