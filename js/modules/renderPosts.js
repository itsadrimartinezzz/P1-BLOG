//renderizar lista de posts en el contenedor HTML
export function renderPosts(posts){
    const container = document.getElementById("posts-container");
    if (!container) return;
    container.innerHTML = "";


    posts.forEach(post=> {
        const card= document.createElement("div");
        
        card.classList.add("post-card"); 

        const imageUrl=`https://picsum.photos/200/300?random=${post.id}`;
        
    
        // tarjeta  con titulo resumen imagen y btn 
       card.innerHTML = `
  <img src="${imageUrl}" alt="post image">
  <h3>${post.title}</h3>
  <p class="post-user">Usuario ${post.userId}</p>
  <p>${post.body.substring(0, 80)}...</p>
  <button data-id="${post.id}">Ver más</button>
`;

// evento click
card.querySelector("button").addEventListener("click", () => {
  window.location.href = `pages/detail.html?id=${post.id}`;
});

container.appendChild(card);

 });
}

