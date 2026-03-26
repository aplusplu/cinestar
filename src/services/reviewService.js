const API_URL = "http://localhost:3042"; // sau ce port ai tu

export const getAllReviews = async () => {
  try {
    const res = await fetch(`${API_URL}/reviews`);
    if (!res.ok) throw new Error("Failed to fetch reviews");
    return await res.json();
  } catch (err) {
    console.error("getAllReviews error:", err);
    return [];
  }
};
