import { API_BASE_URL } from "./constants";

export function resolveApiImageUrl(imagePath) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE_URL}${imagePath}`;
}

export function formatDateDanish(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
