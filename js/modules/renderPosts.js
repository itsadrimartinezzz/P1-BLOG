export function renderPosts(posts, container) {
  if (!container) return;

  if (!posts || posts.length === 0) {
    container.innerHTML = `
      <article class="empty-state">
        <h3>No posts found</h3>
        <p>Try another filter or create a new post.</p>
      </article>
    `;
    return;
  }

  container.innerHTML = posts
    .map((post) => {
      const title = post.title || "Untitled post";
      const body = post.body || post.content || "No content available.";
      const summary = body.length > 140 ? `${body.slice(0, 140)}...` : body;
      const author =
        post.author || (post.userId ? `User ${post.userId}` : "Unknown author");
      const tags = Array.isArray(post.tags) ? post.tags : [];

      return `
        <article class="post-card">
          <div class="post-card__content">
            <h2 class="post-card__title">${title}</h2>
            <p class="post-card__excerpt">${summary}</p>

            <div class="post-card__meta">
              <span class="post-card__author">${author}</span>
            </div>

            <div class="post-card__tags">
              ${tags.map((tag) => `<span class="post-tag">${tag}</span>`).join("")}
            </div>

            <a class="post-card__button" href="pages/detail.html?id=${post.id}">
              Read more
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}