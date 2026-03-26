import { FaPlay } from "react-icons/fa";
import studio3 from "../../../assets/images/cinestar/studio3.jpg";

export default function StudioSection() {
  const handlePlay = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Cinestar Studio
        </p>

        <h2
          className="mb-6 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Har du en idé til dit næste projekt?
        </h2>

        <p className="mb-8 text-[16px] leading-7 text-white/85">
          Lad os omsætte dine visioner til levende billeder, der fanger dit
          publikum. Hos os får du en professionel, kreativ proces fra
          idéudvikling til færdig produktion.
        </p>

        <div className="relative mb-6 overflow-hidden">
          <img
            src={studio3}
            alt="Cinestar produktion"
            className="h-[210px] w-full object-cover"
          />

          <button
            type="button"
            onClick={handlePlay}
            aria-label="Afspil video"
            className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F07232] text-black"
          >
            <FaPlay className="ml-1 text-[20px]" />
          </button>
        </div>

        <h3
          className="mb-5 text-[26px] uppercase leading-8"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Tøv ikke med at vælge Cinestar til dit næste film-projekt
        </h3>

        <p className="mb-10 text-[16px] leading-7 text-white/85">
          Hos Cinestar kombinerer vi vores passion for historiefortælling med et
          skarpt øje for detaljen. Med moderne udstyr og et erfarent team sikrer
          vi, at din produktion løfter sig fra skitse til strålende slutresultat
          – hver gang.
        </p>

        <div className="space-y-8 text-center">
          <div>
            <p className="text-[48px] font-bold leading-none text-[#F07232]">
              250+
            </p>
            <p
              className="mt-2 text-[22px] uppercase"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Film produktion
            </p>
          </div>

          <div>
            <p className="text-[48px] font-bold leading-none text-[#F07232]">
              78+
            </p>
            <p
              className="mt-2 text-[22px] uppercase"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Musik video
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
