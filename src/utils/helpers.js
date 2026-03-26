export function resolveApiImageUrl(imagePath) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  return `http://localhost:3042${imagePath}`;
}

export function formatDateDanish(dateString) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
