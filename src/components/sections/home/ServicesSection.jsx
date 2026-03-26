import { FaFilm, FaHome, FaImage, FaMusic } from "react-icons/fa";
import liquifer from "../../../assets/images/cinestar/liquifer.png";

const services = [
  {
    id: 1,
    title: "Film produktion",
    text: "Vi skaber professionelle filmproduktioner, der formidler dit budskab klart, engagerende og visuelt overbevisende.",
    icon: FaFilm,
  },
  {
    id: 2,
    title: "En kreativ retning",
    text: "Vi sikrer en kreativ retning, der løfter dit projekt fra almindeligt til uforglemmeligt.",
    icon: FaHome,
  },
  {
    id: 3,
    title: "TV produktion",
    text: "Vi leverer komplette løsninger inden for formatudvikling, optagelse og redigering.",
    icon: FaImage,
  },
  {
    id: 4,
    title: "Musik video",
    text: "Lad din musik træde frem i et visuelt univers, der forstærker din lyd og dit budskab.",
    icon: FaMusic,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="bg-[#121212] bg-cover bg-center bg-no-repeat px-5 py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url(${liquifer})`,
      }}
    >
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Service
        </p>

        <h2
          className="mb-10 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Hvilken service tilbyder vi?
        </h2>

        <div className="space-y-10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.id} className="flex items-start gap-5">
                <div className="mt-1 text-[56px] text-[#F07232]">
                  <Icon />
                </div>

                <div>
                  <h3
                    className="mb-3 text-[24px] uppercase leading-7"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-[16px] leading-7 text-white/85">
                    {service.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
