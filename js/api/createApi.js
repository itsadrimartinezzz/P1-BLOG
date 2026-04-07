import { API_BASE_URL, POSTS_ENDPOINT } from "../config.js";

export async function createPost(postData) {
  const response = await fetch(`${API_BASE_URL}${POSTS_ENDPOINT}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return response.json();
}