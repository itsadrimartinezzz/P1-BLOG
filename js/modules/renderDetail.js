function getSavedPosts() {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  return Array.isArray(savedPosts) ? savedPosts : [];
}

async function getApiPostById(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);

    if (!response.ok) {
      throw new Error("Post not found");
    }

    const post = await response.json();
    return {
      id: String(post.id),
      title: post.title || "Untitled post",
      body: post.body || "No content available.",
      author: post.userId ? `User ${post.userId}` : "Unknown author",
      tags: Array.isArray(post.tags) ? post.tags : []
    };
  } catch (error) {
    console.error("Error loading API post:", error);
    return null;
  }
}

function getLocalPostById(id) {
  const posts = getSavedPosts();
  return posts.find((post) => String(post.id) === String(id)) || null;
}

function renderDetail(post, container) {
  if (!container) return;

  if (!post) {
    container.innerHTML = `
      <article class="empty-state">
        <h3>Post not found</h3>
        <p>The post you are looking for does not exist.</p>
        <a class="post-card__button" href="../index.html">Back home</a>
      </article>
    `;
    return;
  }

  const title = post.title || "Untitled post";
  const body = post.body || post.content || "No content available.";
  const author = post.author || (post.userId ? `User ${post.userId}` : "Unknown author");
  const tags = Array.isArray(post.tags) ? post.tags : [];

  container.innerHTML = `
    <article class="detail-card">
      <div class="detail-card__content">
        <h1 class="detail-card__title">${title}</h1>
        <p class="detail-card__author">${author}</p>

        <div class="detail-card__tags">
          ${tags.map((tag) => `<span class="post-tag">${tag}</span>`).join("")}
        </div>

        <p class="detail-card__body">${body}</p>

        <a class="post-card__button" href="../index.html">Back home</a>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("post-detail");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    renderDetail(null, container);
    return;
  }

  const localPost = getLocalPostById(id);

  if (localPost) {
    renderDetail(localPost, container);
    return;
  }

  const apiPost = await getApiPostById(id);
  renderDetail(apiPost, container);
});