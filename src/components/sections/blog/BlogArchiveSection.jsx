import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../../services/blogService";
import { formatDateDanish, resolveApiImageUrl } from "../../../utils/helpers";

export default function BlogArchiveSection() {
  const [blogs, setBlogs] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadBlogs();
  }, []);

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => {
      const first = new Date(a.created).getTime();
      const second = new Date(b.created).getTime();

      return sortOrder === "newest" ? second - first : first - second;
    });
  }, [blogs, sortOrder]);

  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
            Blog
          </p>

          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="border border-white/20 bg-black px-3 py-2 text-[14px] text-white outline-none"
          >
            <option value="newest">Nyeste</option>
            <option value="oldest">Ældste</option>
          </select>
        </div>

        {sortedBlogs.map((blog) => (
          <article
            key={blog._id}
            className="mb-6 border border-white/15 bg-black p-4"
          >
            <img
              src={resolveApiImageUrl(blog.image)}
              alt={blog.title}
              className="mb-5 h-[180px] w-full object-cover"
            />

            <h3 className="mb-2 text-[22px] uppercase leading-7 text-[#F07232]">
              {blog.title}
            </h3>

            <p className="mb-5 text-[12px] text-white/70">
              Oprettet d. {formatDateDanish(blog.created)}
            </p>

            <p className="mb-6 text-[16px] leading-8 text-white/85">
              {blog.teaser}
            </p>

            <Link
              to={`/blog/${blog._id}`}
              className="inline-flex min-h-[48px] items-center justify-center border border-[#F07232] px-8 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#F07232] transition hover:bg-[#F07232] hover:text-black"
            >
              Læs mere
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
