const BASE_URL = "https://dummyjson.com/posts";

export async function getPosts(limit = 10, skip = 0, filters = {}) {
  const { search, userId, tag } = filters;
  let url;

  if (tag) {
    url = `${BASE_URL}/tag/${encodeURIComponent(tag)}`;
  } else if (userId) {
    url = `${BASE_URL}/user/${userId}`;
  } else if (search) {
    url = `${BASE_URL}/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`;
  } else {
    url = `${BASE_URL}?limit=${limit}&skip=${skip}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al obtener posts");

  const data = await response.json();
  console.log("URL usada:", url);
  console.log("Respuesta:", data);
  return data;
}

export async function getPostById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Error al obtener el post");
  return await response.json();
}