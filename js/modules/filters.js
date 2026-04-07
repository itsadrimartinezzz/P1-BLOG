export function filterPosts(posts, filters) {
  const searchText = filters.search.trim().toLowerCase();
  const tagText = filters.tag.trim().toLowerCase();
  const userId = filters.userId.trim();

  return posts.filter((post) => {
    const matchesSearch =
      !searchText ||
      post.title.toLowerCase().includes(searchText) ||
      post.body.toLowerCase().includes(searchText);

    const matchesUser =
      !userId ||
      String(post.userId).includes(userId) ||
      String(post.author).toLowerCase().includes(userId.toLowerCase());

    const matchesTag =
      !tagText ||
      (Array.isArray(post.tags) &&
        post.tags.some((tag) => tag.toLowerCase().includes(tagText)));

    return matchesSearch && matchesUser && matchesTag;
  });
}