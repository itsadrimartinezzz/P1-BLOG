//inicializar la pag. principal cargando y mostrando posts 
import { getPosts } from "./api/postsApi.js";
import { renderPosts } from "./modules/renderPosts.js";
import { getPostById } from "./api/postsApi.js";
import { renderDetail } from "./modules/renderDetail.js";
import { getPagination, nextPage, prevPage, getCurrentPage } from "./modules/pagination.js";



async function loadPosts() {
  try {
    const { limit, skip } = getPagination();

    const filters = {
      search: document.getElementById("search-input")?.value.trim() || "",
      userId: document.getElementById("user-filter")?.value.trim() || "",
      tag:    document.getElementById("tag-filter")?.value.trim() || "",
    };

    const data = await getPosts(limit, skip, filters);
    renderPosts(data.posts); 

    const pageNumber = document.getElementById("page-number");
    if (pageNumber) pageNumber.textContent = getCurrentPage();

  } catch (error) {
    console.error(error);
  }
}

async function initHome() {
  loadPosts();

  document.getElementById("next-btn").addEventListener("click", () => {
    nextPage();
    loadPosts();
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
    prevPage();
    loadPosts();
  });

  // Filtros de texto
  document.getElementById("search-input").addEventListener("input", loadPosts);
  document.getElementById("user-filter").addEventListener("input", loadPosts);
  document.getElementById("tag-filter").addEventListener("input", loadPosts);

  // botón limpiar 
  document.getElementById("clear-filters")?.addEventListener("click", () => {
    document.getElementById("search-input").value = "";
    document.getElementById("user-filter").value = "";
    document.getElementById("tag-filter").value = "";
    document.querySelectorAll(".tag-pill").forEach(p => p.classList.remove("active"));
    document.querySelector('.tag-pill[data-tag=""]')?.classList.add("active");
    loadPosts();
  });

  //pills de tags populares 
  document.querySelectorAll(".tag-pill").forEach(pill => {
    pill.addEventListener("click", function () {
      document.querySelectorAll(".tag-pill").forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      document.getElementById("tag-filter").value = this.dataset.tag;
      loadPosts();
    });
  });
}

if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  initHome();
}

console.log("App cargando...");

async function initDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  try {
    const post = await getPostById(id);
    renderDetail(post);
  } catch (error) {
    console.error(error);
  }
}

if (window.location.pathname.includes("detail.html")) {
  initDetail();
}

import { setupForm } from "./modules/form.js";

if (window.location.pathname.includes("create.html")) {
  setupForm();
}