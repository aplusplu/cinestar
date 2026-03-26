import { useEffect, useMemo, useState } from "react";
import { getAllReviews } from "../../../services/reviewService";

function Stars({ rating }) {
  return (
    <div className="mb-4 flex gap-1 text-[#F5C451]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
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
      }
    }

    loadReviews();
  }, []);

  const review = useMemo(() => {
    if (!reviews.length) return null;
    return reviews[currentIndex];
  }, [reviews, currentIndex]);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  if (!review) {
    return (
      <section className="bg-black px-5 py-24 text-white">
        <div className="mx-auto max-w-[390px]">
          <p>Ingen udtalelser fundet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Udtalelser
        </p>

        <h2
          className="mb-6 text-center text-[36px] leading-[1.05]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Hvad siger vores samarbejdspartnere om os?
        </h2>

        <p className="mx-auto mb-10 max-w-[310px] text-center text-[16px] leading-7 text-white/85">
          ”Cinestar er en fantastisk samarbejdspartner, der formår at kombinere
          kreativitet med professionalisme. Deres evne til at skabe unikke og
          engagerende produktioner er imponerende, og resultatet taler altid for
          sig selv.”
        </p>

        <div className="relative overflow-hidden bg-[#1B1B1B] p-6">
          <Stars rating={review.rating} />

          <p className="mb-6 text-[14px] leading-7 text-white/75">
            “{review.text}”
          </p>

          <p className="text-[14px] font-semibold uppercase text-[#F07232]">
            {review.name}
          </p>

          <p className="text-[12px] text-white/65">{review.position}</p>

          {reviews.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-4 text-white"
                aria-label="Forrige udtalelse"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-4 text-white"
                aria-label="Næste udtalelse"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
