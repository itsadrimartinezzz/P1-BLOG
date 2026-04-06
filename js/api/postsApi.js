// posts desde la API con paginacion 

const BASE_URL = "https://dummyjson.com/posts"

export async function getPosts(limit =10, skip=0) {
  const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
    if (!response.ok){      //cantidad de posts y desplazamiento por paginacion 

     throw new Error("Error al obtener posts ");
     }

     const data = await response.json();
    return data;
}

//obtener 1 post 
export async function getPostById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if(!response.ok){
    throw new Error("Error al obtener el post");

  }
  
  return await response.json();


  
}