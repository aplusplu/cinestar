import api from "./api";

export async function createSubscription(payload) {
  const response = await api.post("/subscription", payload);
  return response.data;
}
