import Button from "../../common/Button";

export default function HeroOverlaySection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/src/assets/images/cinestar.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          FILM & MOVIE PRODUCTION
        </h1>

        <p className="text-gray-300 mb-6">
          Vi skaber visuelle fortællinger, der inspirerer og engagerer.
        </p>

        <Button text="SE MERE" />
      </div>
    </section>
  );
}
