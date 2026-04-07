export function deletePostById(id) {
  const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  const safePosts = Array.isArray(savedPosts) ? savedPosts : [];

  const updatedPosts = safePosts.filter(
    (post) => String(post.id) !== String(id)
  );

  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  return true;
}