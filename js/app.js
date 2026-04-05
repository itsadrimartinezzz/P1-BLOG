//inicializar la pag. principal cargando y mostrando posts 

import { getPosts } from "./api/postsApi.js";
import { renderPosts } from "./modules/renderPosts.js";

async function initHome() {
    try{
        const data = await getPosts();
        renderPosts(data.posts);
    } catch (error){
        console.error(error);
    };
    
}

//detectar pag.
if (window.location.pathname.includes("index.html")|| window.location.pathname === "/"){
    initHome();
}
console.log("App cargando...");