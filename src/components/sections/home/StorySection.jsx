import filming from "../../../assets/images/cinestar/filming.jpg";

export default function StorySection() {
  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Historien
        </p>

        <h2
          className="mb-6 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Historien bag Cinestar
        </h2>

        <p className="mb-8 text-[16px] leading-7 text-white/85">
          Cinestar blev grundlagt med en passion for at fortælle historier, der
          fanger og bevæger sit publikum. Virksomheden begyndte som en lille
          uafhængig film- og tv-produktionsenhed med et klart fokus på originalt
          og visuelt engagerende indhold.
        </p>

        <p
          className="mb-2 text-[18px] uppercase text-[#F07232]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Dyas Kardinal
        </p>

        <p
          className="mb-6 text-[28px] uppercase leading-8"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          CEO af Cinestar
        </p>

        <img
          src={filming}
          alt="CEO af Cinestar"
          className="h-[220px] w-full object-cover"
        />
      </div>
    </section>
  );
}
