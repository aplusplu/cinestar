import api from "./api";

export async function getAllFaqs() {
  const response = await api.get("/faqs");
  return response.data?.data || [];
}
