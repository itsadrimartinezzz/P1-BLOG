export function initDeleteButton(post, savedPosts) {
  document.querySelector(".delete-btn")?.addEventListener("click", async () => {
    const id = post.id;
    const isLocal = savedPosts.some(p => String(p.id) === String(id));

    // post local
    if (isLocal) {
      const updated = savedPosts.filter(p => String(p.id) !== String(id));
      localStorage.setItem("blogPosts", JSON.stringify(updated));
      alert("Post deleted successfully.");
      window.location.href = "../index.html";
      return;
    }

    // post api simulado
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) throw new Error("Error deleting post");

      alert("Post deleted successfully.");
      window.location.href = "../index.html";

    } catch (error) {
      alert("Could not delete post. Try again.");
      console.error(error);
    }
  });
}