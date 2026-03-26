import { useState } from "react";
import { portfolioData } from "../../../data/portfolioData";

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === portfolioData.length - 1 ? 0 : prev + 1,
    );
  };

  const currentItem = portfolioData[currentIndex];

  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Portfolio
            </p>

            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Selected work
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center border border-gray-700 text-white transition hover:border-orange-500 hover:text-orange-500"
              aria-label="Previous"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center border border-gray-700 text-white transition hover:border-orange-500 hover:text-orange-500"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden border border-gray-800 bg-neutral-950">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="h-[380px] w-full object-cover md:h-[520px]"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <h3
              className="text-2xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              {currentItem.title}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-orange-500">
              {currentItem.category}
            </p>
          </div>

          <div className="flex gap-2">
            {portfolioData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
