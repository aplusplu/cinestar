import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../../services/blogService";
import { formatDateDanish, resolveApiImageUrl } from "../../../utils/helpers";

export default function BlogPostSection() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function loadBlog() {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadBlog();
  }, [id]);

  if (!blog) {
    return (
      <section className="bg-black px-5 py-24 text-white">
        <div className="mx-auto max-w-[390px]">
          <p>Indlæser blogindlæg...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <article className="border border-white/15 bg-black p-4">
          <img
            src={resolveApiImageUrl(blog.image)}
            alt={blog.title}
            className="mb-5 h-[180px] w-full object-cover"
          />

          <h1 className="mb-2 text-[22px] uppercase leading-7 text-[#F07232]">
            {blog.title}
          </h1>

          <p className="mb-5 text-[12px] text-white/70">
            Oprettet d. {formatDateDanish(blog.created)}
          </p>

          <div className="space-y-5 text-[16px] leading-8 text-white/85">
            <p>{blog.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
