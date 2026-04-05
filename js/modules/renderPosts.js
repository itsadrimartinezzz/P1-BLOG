//renderizar lista de posts en el contenedor HTML
export function renderPosts(posts){
    const container = document.getElementById("posts-container");
    if (!container) return;
    container.innerHTML = "";


    posts.forEach(post=> {
        const card= document.createElement("div");
        
        card.classList.add("post-card"); 

        //se crea una tarjeta con titilo, resumen y btn 
         card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body.substring(0, 100)}...</p>
      <button data-id="${post.id}">Ver más</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
    const id = post.id;
     window.location.href = `pages/detail.html?id=${id}`;
    });
    container.appendChild(card);
        
    });
}

