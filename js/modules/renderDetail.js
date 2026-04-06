
export function renderDetail(post) {
  const container = document.getElementById("post-detail");
  if (!container) return;
  
  const imageUrl = `https://picsum.photos/200/300?random=${post.id}`;


  container.innerHTML = `
  <img src="${imageUrl} alt="post image">
  <h2>${post.title}</h>
  <p>${post.body}</p>
  `;
}