// posts desde la API con paginacion 

const BASE_URL = "https://dummyjson.com/posts"

export async function getPosts(limit =10, skip=0) {
    //cantidad de posts y desplazamiento por paginacion 
  const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);

  if (response.ok){
    throw new Error("Error al obtener posts ");

  }

  const data = await response.json();
  return data;

    
}