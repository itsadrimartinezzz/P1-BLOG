import { API_BASE_URL } from "./config.js";

const BASE_URL = `${API_BASE_URL}/posts`;

export async function createPost(postData) {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) throw new Error("Error al crear el post");

  return await response.json();
}