const postDetailContainer = document.getElementById("post-detail");

function getSavedPosts() {
  const saved = JSON.parse(localStorage.getItem("blogPosts")) || [];
  return Array.isArray(saved) ? saved : [];
}

function renderNotFound() {
  if (!postDetailContainer) return;

  postDetailContainer.innerHTML = `
    <article class="detail-card">
      <div class="detail-card__content">
        <h2 class="detail-card__title">Post not found</h2>
        <p class="detail-card__body">The post could not be loaded.</p>
        <a class="post-card__button" href="../index.html">Back home</a>
      </div>
    </article>
  `;
}

function renderPost(post, isLocal = false) {
  if (!postDetailContainer) return;

  const title = post.title || "Untitled post";
  const body = post.body || post.content || "No content available.";
  const author = post.author || (post.userId ? `User ${post.userId}` : "Unknown author");
  const tags = Array.isArray(post.tags) ? post.tags : [];

  postDetailContainer.innerHTML = `
    <article class="detail-card">
      <div class="detail-card__content">
        <h1 class="detail-card__title">${title}</h1>
        <p class="detail-card__author">${author}</p>

        <div class="detail-card__tags">
          ${tags.map(tag => `<span class="post-tag">${tag}</span>`).join("")}
        </div>

        <p class="detail-card__body">${body}</p>

        <div class="detail-card__actions">
          ${isLocal ? `<button id="delete-post-btn" class="post-card__button delete-btn" type="button">Delete post</button>` : ""}
          <a class="post-card__button" href="../index.html">Back home</a>
        </div>
      </div>
    </article>
  `;

  if (isLocal) {
    const deleteBtn = document.getElementById("delete-post-btn");

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        const savedPosts = getSavedPosts();
        const updatedPosts = savedPosts.filter(
          (item) => String(item.id) !== String(post.id)
        );

        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
        window.location.href = "../index.html";
      });
    }
  }
}

async function loadDetail() {
  if (!postDetailContainer) {
    console.error("No existe #post-detail en detail.html");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    renderNotFound();
    return;
  }

  const localPosts = getSavedPosts();
  const localPost = localPosts.find((post) => String(post.id) === String(id));

  if (localPost) {
    renderPost(localPost, true);
    return;
  }

  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);

    if (!response.ok) {
      renderNotFound();
      return;
    }

    const apiPost = await response.json();
    renderPost(apiPost, false);
  } catch (error) {
    console.error("Error loading post detail:", error);
    renderNotFound();
  }
}

document.addEventListener("DOMContentLoaded", loadDetail);