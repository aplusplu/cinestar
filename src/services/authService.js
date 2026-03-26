import api from "./api";

export async function signIn(credentials) {
  const response = await api.post("/auth/signin", credentials);
  return response.data;
}

export function saveAuthSession(token, role, email) {
  localStorage.setItem("cinestar_token", token);
  localStorage.setItem("cinestar_is_logged_in", "true");
  localStorage.setItem("cinestar_user_role", role);
  localStorage.setItem("cinestar_user_email", email);
}

export function clearAuthSession() {
  localStorage.removeItem("cinestar_token");
  localStorage.removeItem("cinestar_is_logged_in");
  localStorage.removeItem("cinestar_user_role");
  localStorage.removeItem("cinestar_user_email");
}

export function getStoredToken() {
  return localStorage.getItem("cinestar_token") || "";
}

export function getStoredRole() {
  return localStorage.getItem("cinestar_user_role") || "";
}
