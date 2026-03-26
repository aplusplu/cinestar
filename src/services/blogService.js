import api from "./api";

export async function getAllBlogs() {
  const response = await api.get("/blogs");
  return response.data?.data || [];
}

export async function getBlogById(id) {
  const response = await api.get(`/blog/${id}`);
  return response.data?.data || null;
}

export async function createBlog(formValues) {
  const formData = new FormData();
  formData.append("title", formValues.title);
  formData.append("teaser", formValues.teaser);
  formData.append("description", formValues.description);

  if (formValues.file) {
    formData.append("file", formValues.file);
  }

  const response = await api.post("/blog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function updateBlog(formValues) {
  const formData = new FormData();
  formData.append("id", formValues.id);
  formData.append("title", formValues.title);
  formData.append("teaser", formValues.teaser);
  formData.append("description", formValues.description);

  if (formValues.file) {
    formData.append("file", formValues.file);
  }

  const response = await api.put("/blog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function deleteBlog(id) {
  const response = await api.delete(`/blog/${id}`);
  return response.data;
}
