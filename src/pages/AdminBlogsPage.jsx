import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../components/layout/AdminLayout";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../services/blogService";
import { formatDateDanish, resolveApiImageUrl } from "../utils/helpers";

const initialFormState = {
  id: "",
  title: "",
  teaser: "",
  description: "",
  file: null,
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState("");
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      setLoading(true);
      const data = await getAllBlogs();
      const sorted = [...data].sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
      );
      setBlogs(sorted);
    } catch (error) {
      toast.error("Kunne ikke hente blogindlæg.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(event) {
    const { name, value, files } = event.target;

    if (name === "file") {
      setForm((prev) => ({
        ...prev,
        file: files?.[0] || null,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetForm() {
    setEditingBlogId("");
    setForm(initialFormState);
  }

  function startEdit(blog) {
    setEditingBlogId(blog._id);
    setForm({
      id: blog._id,
      title: blog.title || "",
      teaser: blog.teaser || "",
      description: blog.description || "",
      file: null,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.title || !form.teaser || !form.description) {
      toast.error("Udfyld titel, teaser og beskrivelse.");
      return;
    }

    try {
      setSubmitting(true);

      let result;

      if (editingBlogId) {
        result = await updateBlog(form);
      } else {
        result = await createBlog(form);
      }

      if (result?.status !== "ok") {
        toast.error(result?.message || "Request failed.");
        return;
      }

      toast.success(
        editingBlogId ? "Blogindlæg opdateret." : "Blogindlæg oprettet.",
      );

      resetForm();
      await loadBlogs();
    } catch (error) {
      toast.error("Noget gik galt ved lagring af blogindlæg.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Er du sikker på, at du vil slette dette blogindlæg?",
    );

    if (!confirmed) return;

    try {
      const result = await deleteBlog(id);

      if (result?.status !== "ok") {
        toast.error(result?.message || "Kunne ikke slette blogindlæg.");
        return;
      }

      toast.success("Blogindlæg slettet.");

      if (editingBlogId === id) {
        resetForm();
      }

      await loadBlogs();
    } catch (error) {
      toast.error("Kunne ikke slette blogindlæg.");
    }
  }

  const formTitle = useMemo(() => {
    return editingBlogId ? "Rediger blogindlæg" : "Opret blogindlæg";
  }, [editingBlogId]);

  return (
    <AdminLayout title="Blogs">
      <div className="grid gap-8 xl:grid-cols-[420px_1fr]">
        <section className="border border-white/10 bg-[#111] p-5">
          <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#F07232]">
            Formular
          </p>

          <h3
            className="mb-6 text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {formTitle}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.14em] text-white/70">
                Titel
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="h-[48px] w-full border border-white/15 bg-black px-4 text-white outline-none focus:border-[#F07232]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.14em] text-white/70">
                Teaser
              </label>
              <textarea
                name="teaser"
                value={form.teaser}
                onChange={handleChange}
                rows="4"
                className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-[#F07232]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.14em] text-white/70">
                Beskrivelse
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="7"
                className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-[#F07232]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.14em] text-white/70">
                Billede
              </label>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-white file:mr-4 file:border-0 file:bg-[#F07232] file:px-4 file:py-2 file:text-black"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-[48px] items-center justify-center bg-[#F07232] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:opacity-90 disabled:opacity-50"
              >
                {submitting
                  ? "Gemmer..."
                  : editingBlogId
                    ? "Opdater blog"
                    : "Opret blog"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex min-h-[48px] items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#F07232] hover:text-[#F07232]"
              >
                Nulstil
              </button>
            </div>
          </form>
        </section>

        <section className="border border-white/10 bg-[#111] p-5">
          <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#F07232]">
            Oversigt
          </p>

          <h3
            className="mb-6 text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Alle blogindlæg
          </h3>

          {loading ? (
            <p className="text-white/70">Indlæser blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-white/70">Ingen blogindlæg fundet.</p>
          ) : (
            <div className="space-y-5">
              {blogs.map((blog) => (
                <article
                  key={blog._id}
                  className="border border-white/10 bg-black p-4"
                >
                  <div className="grid gap-4 md:grid-cols-[180px_1fr]">
                    <img
                      src={resolveApiImageUrl(blog.image)}
                      alt={blog.title}
                      className="h-[130px] w-full object-cover"
                    />

                    <div>
                      <h4
                        className="mb-2 text-[24px] leading-7 text-[#F07232]"
                        style={{ fontFamily: '"Cormorant Garamond", serif' }}
                      >
                        {blog.title}
                      </h4>

                      <p className="mb-3 text-xs uppercase tracking-[0.1em] text-white/55">
                        Oprettet d. {formatDateDanish(blog.created)}
                      </p>

                      <p className="mb-4 line-clamp-3 text-sm leading-7 text-white/80">
                        {blog.teaser}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => startEdit(blog)}
                          className="inline-flex min-h-[42px] items-center justify-center border border-[#F07232] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#F07232] transition hover:bg-[#F07232] hover:text-black"
                        >
                          Rediger
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(blog._id)}
                          className="inline-flex min-h-[42px] items-center justify-center border border-red-500 px-5 text-xs font-semibold uppercase tracking-[0.12em] text-red-400 transition hover:bg-red-500 hover:text-white"
                        >
                          Slet
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </AdminLayout>
  );
}
