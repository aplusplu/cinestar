import heroImage from "../../../assets/images/cinestar/studio.jpg";

export default function HeroOverlaySection() {
  return (
    <section
      className="relative min-h-[982px] overflow-hidden border-b border-white/10"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/58" />

      <div className="relative mx-auto flex min-h-[982px] max-w-[390px] flex-col items-center px-5 pt-[58px] text-center text-white">
        <div className="w-full max-w-[300px]">
          <p className="mb-4 text-[14px] font-semibold uppercase tracking-[0.22em] text-white/80">
            CINESTAR STUDIO
          </p>

          <h1
            className="mb-5 text-[58px] leading-[0.9]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Film &amp; Tv
            <br />
            <span className="text-[#F07232]">Production</span>
          </h1>

          <p className="text-[16px] leading-[1.34] text-white/90">
            Vi skaber levende fortællinger, der
            <br />
            fanger dit publikum. Fra idé til
            <br />
            færdigt produkt leverer vi
            <br />
            professionelle film- og tv-
            <br />
            løsninger, der gør din historie
            <br />
            uforglemmelig.
          </p>
        </div>
      </div>
    </section>
  );
}
