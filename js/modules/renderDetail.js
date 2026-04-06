export function renderDetail(post) {
  const container = document.getElementById("post-detail");

  if (!container) return;

  container.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <p><strong>Usuario:</strong> ${post.userId}</p>
  `;
}