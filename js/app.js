//inicializar la pag. principal cargando y mostrando posts 

import { getPosts } from "./api/postsApi.js";
import { renderPosts } from "./modules/renderPosts.js";
import { getPostById } from "./api/postsApi.js";
import { renderDetail } from "./modules/renderDetail.js";
import { getPagination, nextPage, prevPage, getCurrentPage } from "./modules/pagination.js";

async function loadPosts() {
    try{
        const {limit, skip} = getPagination();
        const data = await getPosts(limit, skip);

        renderPosts(data.posts);


        //numero de pags (actualizar)

        const pageNumber = document.getElementById("page-number");
        if (pageNumber){
            pageNumber.textContent = getCurrentPage();

        }

    } catch (error){
        console.error(error);
    }
    
    
}
async function initHome() {
    loadPosts();

    document.getElementById("next-btn").addEventListener("click", () =>{
        nextPage();
        loadPosts();
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        prevPage();
        loadPosts();
    });
    
}

//detectar pag.
if (window.location.pathname.includes("index.html")|| window.location.pathname === "/"){
    initHome();
}
console.log("App cargando...");


async function initDetail() {
    const params =new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return;

    try {
        const post = await getPostById(id);
        renderDetail(post);

    }catch (error){
        console.error(error);
    
    }
    
    //detectar si se esta en detail.htm
    if(window.location.pathname.includes("detail.htm")){
        initDetail();
    }
    
}