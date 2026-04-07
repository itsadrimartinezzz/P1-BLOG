export function validatePost(title, body, author) {
  if (!title.trim() || !body.trim() || !author.trim()) {
    return "All fields are required.";
  }

  if (title.trim().length < 4) {
    return "Title must be at least 4 characters.";
  }

  if (body.trim().length < 10) {
    return "Content must be at least 10 characters.";
  }

  if (author.trim().length < 2) {
    return "Author must be at least 2 characters.";
  }

  return "";
}