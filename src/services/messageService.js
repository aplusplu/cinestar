import api from "./api";

export async function createMessage(payload) {
  const response = await api.post("/message", payload);
  return response.data;
}
