export function savePost(newPost) {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  const safePosts = Array.isArray(savedPosts) ? savedPosts : [];

  safePosts.unshift(newPost);
  localStorage.setItem("blogPosts", JSON.stringify(safePosts));

  return newPost;
}