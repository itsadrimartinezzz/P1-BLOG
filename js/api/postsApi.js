import { API_BASE_URL } from "./config.js";

export async function getAllPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?limit=150`);

    if (!response.ok) {
      throw new Error("Error fetching posts");
    }

    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}