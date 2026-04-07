//filtros 

export function applyFilters(posts) {
  const searchInput = document.getElementById("search-input");
  const userInput = document.getElementById("user-filter");
  const tagInput = document.getElementById("tag-filter");

  const search = searchInput ? searchInput.value.toLowerCase() : "";
  const user = userInput ? userInput.value : "";
  const tag = tagInput ? tagInput.value.toLowerCase() : "";

  return posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search) ||
      post.body.toLowerCase().includes(search);

    const matchesUser =
      user === "" || post.userId == user;

    const matchesTag =
      tag === "" || post.tags.some(t => t.toLowerCase().includes(tag));

    return matchesSearch && matchesUser && matchesTag;
  });
}