import heroImage from "../../../assets/images/cinestar/cinestar.png";

export default function HeroOverlaySection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex min-h-[982px] max-w-[390px] flex-col justify-start px-5 pb-0 pt-14 text-center text-white">
        <div className="mx-auto mt-[8px] max-w-[290px]">
          <p className="mb-4 text-[14px] uppercase tracking-[0.2em] text-white/85">
            Cinestar Studio
          </p>

          <h1
            className="mb-5 text-[64px] leading-[0.9]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Film &amp; Tv
            <br />
            <span className="text-[#F07232]">Production</span>
          </h1>

          <p className="text-[16px] leading-7 text-white/90">
            Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til
            færdigt produkt leverer vi professionelle film- og tv-løsninger, der
            gør din historie uforglemmelig.
          </p>
        </div>
      </div>
    </section>
  );
}
