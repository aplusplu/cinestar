import { useEffect, useMemo, useState } from "react";
import { getAllReviews } from "../../../services/reviewService";

function Stars({ rating }) {
  return (
    <div className="mb-4 flex gap-1 text-[#F5C451]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-[16px]">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (error) {
        console.error(error);
        setReviews([]);
      }
    }

    loadReviews();
  }, []);

  const activeReview = useMemo(() => {
    if (!reviews.length) return null;
    return reviews[currentIndex];
  }, [reviews, currentIndex]);

  function prevReview() {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }

  function nextReview() {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-center text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Udtalelser
        </p>

        <h2
          className="mb-8 text-center text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Hvad siger vores
          <br />
          samarbejdspartnere
          <br />
          om os?
        </h2>

        <p className="mx-auto mb-10 max-w-[320px] text-center text-[16px] leading-7 text-white/85">
          ”Cinestar er en fantastisk samarbejdspartner, der formår at kombinere
          kreativitet med professionalisme. Deres evne til at skabe unikke og
          engagerende produktioner er imponerende, og resultatet taler altid for
          sig selv.”
        </p>

        {!activeReview ? (
          <div className="border border-white/10 bg-[#1B1B1B] p-6">
            <p className="text-[16px] text-white/85">Indlæser udtalelser...</p>
          </div>
        ) : (
          <div className="relative overflow-hidden bg-[#1B1B1B] px-8 py-6">
            <Stars rating={activeReview.rating || 0} />

            <p className="mb-6 text-[14px] leading-7 text-white/75">
              “{activeReview.text}”
            </p>

            <p className="text-[14px] font-semibold uppercase text-[#F07232]">
              {activeReview.name}
            </p>

            <p className="text-[12px] text-white/65">{activeReview.position}</p>

            {reviews.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevReview}
                  aria-label="Forrige udtalelse"
                  className="absolute left-0 top-1/2 flex h-[64px] w-[28px] -translate-y-1/2 items-center justify-center bg-black/60 text-[26px] text-white"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Næste udtalelse"
                  className="absolute right-0 top-1/2 flex h-[64px] w-[28px] -translate-y-1/2 items-center justify-center bg-black/60 text-[26px] text-white"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
