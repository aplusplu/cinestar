import studioImg from "../../assets/images/cinestar/studio.jpg";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <header
      className="relative min-h-[289px] overflow-hidden"
      style={{
        backgroundImage: `url(${studioImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-[289px] max-w-[390px] flex-col justify-center px-5 py-10 text-white">
        <h1
          className="mb-3 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {title}
        </h1>

        <p className="text-[16px] text-white">
          {breadcrumb.split("/").map((part, index, array) => (
            <span key={`${part}-${index}`}>
              {index === array.length - 1 ? (
                <span className="font-semibold text-[#F07232]">
                  {part.trim()}
                </span>
              ) : (
                <span>{part.trim()}</span>
              )}
              {index < array.length - 1 && <span> / </span>}
            </span>
          ))}
        </p>
      </div>
    </header>
  );
}
