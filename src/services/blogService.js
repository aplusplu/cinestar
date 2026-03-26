import api from "./api";

export async function getAllBlogs() {
  const response = await api.get("/blogs");
  return response.data?.data || [];
}

export async function getBlogById(id) {
  const response = await api.get(`/blog/${id}`);
  return response.data?.data || null;
}
