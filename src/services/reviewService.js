import api from "./api";

export async function getAllReviews() {
  const response = await api.get("/reviews");

  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (Array.isArray(response.data?.data)) {
    return response.data.data;
  }

  return [];
}
