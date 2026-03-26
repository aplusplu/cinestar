import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../../services/blogService";
import { formatDateDanish, resolveApiImageUrl } from "../../../utils/helpers";

export default function LatestBlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBlogs() {
      try {
        setLoading(true);
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Kunne ikke hente blogindlæg.");
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  const latestBlog = useMemo(() => {
    if (!blogs.length) return null;

    return [...blogs].sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    )[0];
  }, [blogs]);

  if (loading) {
    return (
      <section className="bg-[#212121] px-5 py-24 text-white">
        <div className="mx-auto max-w-[390px]">
          <p>Indlæser blog...</p>
        </div>
      </section>
    );
  }

  if (error || !latestBlog) {
    return (
      <section className="bg-[#212121] px-5 py-24 text-white">
        <div className="mx-auto max-w-[390px]">
          <p>{error || "Ingen blogindlæg fundet."}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#212121] px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Blog
        </p>

        <h2
          className="mb-6 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Vores seneste blog
        </h2>

        <p className="mb-8 text-[16px] leading-7 text-white/85">
          Hold dig opdateret med de seneste nyheder, indblik og historier fra
          Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores
          spændende projekter og produktioner.
        </p>

        <article className="border border-white/15 bg-black p-4">
          <img
            src={resolveApiImageUrl(latestBlog.image)}
            alt={latestBlog.title}
            className="mb-5 h-[180px] w-full object-cover"
          />

          <h3 className="mb-2 text-[22px] uppercase leading-7 text-[#F07232]">
            {latestBlog.title}
          </h3>

          <p className="mb-5 text-[12px] text-white/70">
            Oprettet d. {formatDateDanish(latestBlog.created)}
          </p>

          <p className="mb-6 text-[16px] leading-8 text-white/85">
            {latestBlog.teaser}
          </p>

          <Link
            to={`/blog/${latestBlog._id}`}
            className="inline-flex min-h-[48px] items-center justify-center border border-[#F07232] px-8 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#F07232] transition hover:bg-[#F07232] hover:text-black"
          >
            Læs mere
          </Link>
        </article>
      </div>
    </section>
  );
}
