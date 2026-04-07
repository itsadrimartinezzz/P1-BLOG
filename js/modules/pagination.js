export function paginatePosts(posts, currentPage, postsPerPage) {
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.slice(start, end);
}

export function getTotalPages(posts, postsPerPage) {
  return Math.max(1, Math.ceil(posts.length / postsPerPage));
}