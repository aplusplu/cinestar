import { useState } from "react";
import daughterMom from "../../../assets/images/cinestar/daughter_mom.jpg";
import schoolLife from "../../../assets/images/cinestar/school_life.jpg";
import intoYourHeart from "../../../assets/images/cinestar/into_your_heart.jpg";

const portfolioItems = [
  {
    id: 1,
    image: daughterMom,
    alt: "Daughter vs Mom",
  },
  {
    id: 2,
    image: schoolLife,
    alt: "School Life",
  },
  {
    id: 3,
    image: intoYourHeart,
    alt: "Into Your Heart",
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1,
    );
  }

  function nextSlide() {
    setCurrentIndex((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1,
    );
  }

  return (
    <section className="bg-[#212121] px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Portfolio
        </p>

        <h2
          className="mb-6 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Udvalgte
          <br />
          projekter
        </h2>

        <div className="relative mb-5 overflow-hidden">
          <img
            src={portfolioItems[currentIndex].image}
            alt={portfolioItems[currentIndex].alt}
            className="h-[250px] w-full object-cover"
          />

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Forrige projekt"
            className="absolute left-4 top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center text-[56px] leading-none text-[#F07232]"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Næste projekt"
            className="absolute right-4 top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center text-[56px] leading-none text-[#F07232]"
          >
            ›
          </button>
        </div>

        <div className="mb-8 flex items-center justify-center gap-3">
          {portfolioItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Gå til slide ${index + 1}`}
              className={`h-[14px] w-[14px] rounded-full ${
                currentIndex === index ? "bg-[#F07232]" : "bg-white/35"
              }`}
            />
          ))}
        </div>

        <div className="space-y-6 text-[16px] leading-8 text-white/85">
          <p>
            Her præsenterer vi et udvalg af de produktioner, vi er stolte af at
            have skabt.
          </p>

          <p>
            Hvert projekt fortæller sin unikke historie og illustrerer vores
            ambition om at levere høj kvalitet, originalitet og visuel
            gennemslagskraft.
          </p>

          <p>Gå på opdagelse, og lad dig inspirere af vores arbejde.</p>
        </div>
      </div>
    </section>
  );
}
