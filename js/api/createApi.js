export function savePost(newPost) {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  const posts = Array.isArray(savedPosts) ? savedPosts : [];

  posts.unshift(newPost);
  localStorage.setItem("blogPosts", JSON.stringify(posts));

  return newPost;
}

