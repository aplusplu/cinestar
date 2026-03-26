import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3042",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("cinestar_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
