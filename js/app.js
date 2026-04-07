import { getAllPosts } from "./api/postsApi.js";
import { filterPosts } from "./modules/filters.js";
import { paginatePosts, getTotalPages } from "./modules/pagination.js";
import { renderPosts } from "./modules/renderPosts.js";
import { POSTS_LIMIT } from "./api/config.js";

const postsContainer = document.getElementById("posts-container");
const searchInput = document.getElementById("search-input");
const userFilter = document.getElementById("user-filter");
const tagFilter = document.getElementById("tag-filter");
const clearFiltersBtn = document.getElementById("clear-filters");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumber = document.getElementById("page-number");
const popularTags = document.querySelectorAll(".tag-pill");

let allPosts = [];
let filteredPosts = [];
let currentPage = 1;

const currentFilters = {
  search: "",
  userId: "",
  tag: ""
};

function getLocalPosts() {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  return Array.isArray(savedPosts) ? savedPosts : [];
}

function normalizeApiPost(post) {
  return {
    id: String(post.id),
    title: post.title || "Untitled post",
    body: post.body || "No content available.",
    author: post.userId ? `User ${post.userId}` : "Unknown author",
    userId: post.userId || "",
    tags: Array.isArray(post.tags) ? post.tags : []
  };
}

function normalizeLocalPost(post) {
  return {
    id: String(post.id),
    title: post.title || "Untitled post",
    body: post.body || post.content || "No content available.",
    author: post.author || "Unknown author",
    userId: post.userId || "",
    tags: Array.isArray(post.tags) ? post.tags : []
  };
}

function mergePosts(apiPosts, localPosts) {
  const normalizedApi = apiPosts.map(normalizeApiPost);
  const normalizedLocal = localPosts.map(normalizeLocalPost);

  return [...normalizedLocal, ...normalizedApi];
}

function updatePaginationControls() {
  const totalPages = getTotalPages(filteredPosts, POSTS_LIMIT);

  if (pageNumber) pageNumber.textContent = currentPage;
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages || filteredPosts.length === 0;
}

function updateView() {
  filteredPosts = filterPosts(allPosts, currentFilters);

  const totalPages = getTotalPages(filteredPosts, POSTS_LIMIT);

  if (currentPage > totalPages) {
    currentPage = 1;
  }

  const visiblePosts = paginatePosts(filteredPosts, currentPage, POSTS_LIMIT);
  renderPosts(visiblePosts, postsContainer);
  updatePaginationControls();
}

function setActiveTag(selectedTag) {
  popularTags.forEach((tag) => {
    tag.classList.toggle("active", tag.dataset.tag === selectedTag);
  });
}

async function initApp() {
  const apiPosts = await getAllPosts();
  const localPosts = getLocalPosts();

  allPosts = mergePosts(apiPosts, localPosts);
  filteredPosts = [...allPosts];
  updateView();
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    currentFilters.search = event.target.value;
    currentPage = 1;
    updateView();
  });
}

if (userFilter) {
  userFilter.addEventListener("input", (event) => {
    currentFilters.userId = event.target.value;
    currentPage = 1;
    updateView();
  });
}

if (tagFilter) {
  tagFilter.addEventListener("input", (event) => {
    currentFilters.tag = event.target.value;
    currentPage = 1;
    setActiveTag("");
    updateView();
  });
}

popularTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    const selectedTag = tag.dataset.tag || "";
    currentFilters.tag = selectedTag;
    if (tagFilter) tagFilter.value = selectedTag;
    currentPage = 1;
    setActiveTag(selectedTag);
    updateView();
  });
});

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener("click", () => {
    currentFilters.search = "";
    currentFilters.userId = "";
    currentFilters.tag = "";

    if (searchInput) searchInput.value = "";
    if (userFilter) userFilter.value = "";
    if (tagFilter) tagFilter.value = "";

    currentPage = 1;
    setActiveTag("");
    updateView();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateView();
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    const totalPages = getTotalPages(filteredPosts, POSTS_LIMIT);

    if (currentPage < totalPages) {
      currentPage++;
      updateView();
    }
  });
}

document.addEventListener("DOMContentLoaded", initApp);