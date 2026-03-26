export default function SoMeSection() {
  return (
    <section className="bg-black px-5 py-24 text-center text-white">
      <div className="mx-auto max-w-[390px]">
        <h2
          className="mb-8 text-[38px] leading-[1.02]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Har du en idé i
          <br />
          tankerne?
          <br />
          Lad os starte dit
          <br />
          projekt sammen
        </h2>

        <p className="mb-1 text-[20px] text-[#F07232]">Cinestar Studio</p>
        <p className="mb-1 text-[20px] text-[#F07232]">+45 12 34 56 78</p>
        <p className="mb-10 text-[20px] text-[#F07232]">
          cinestar@production.dk
        </p>

        <div
          className="grid grid-cols-2 gap-x-6 gap-y-5 text-[20px] uppercase"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          <a href="#" className="hover:text-[#F07232]">
            Facebook
          </a>
          <a href="#" className="hover:text-[#F07232]">
            Twitter
          </a>
          <a href="#" className="hover:text-[#F07232]">
            Linkedin
          </a>
          <a href="#" className="hover:text-[#F07232]">
            Instagram
          </a>
          <a href="#" className="col-span-2 hover:text-[#F07232]">
            Youtube
          </a>
        </div>
      </div>
    </section>
  );
}
