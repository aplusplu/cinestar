import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import ContactForm from "../contact/ContactForm";
import studie2 from "../../../assets/images/cinestar/studie2.jpg";

export default function ContactPreviewSection() {
  return (
    <section
      className="relative overflow-hidden bg-black px-5 py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url(${studie2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Kontakt
        </p>

        <h2
          className="mb-6 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Book en samtale med os
        </h2>

        <p className="mb-10 text-[16px] leading-7 text-white/85">
          Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan
          hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig
          hurtigst muligt. Vi ser frem til at samarbejde med dig!
        </p>

        <div className="mb-10 space-y-5 text-[16px]">
          <div className="flex items-center gap-4">
            <HiOutlinePhone className="text-2xl text-[#F07232]" />
            <span>+45 12 34 56 78</span>
          </div>

          <div className="flex items-center gap-4">
            <HiOutlineMapPin className="text-2xl text-[#F07232]" />
            <span>Fotovej 66, 8456 Cineby</span>
          </div>

          <div className="flex items-center gap-4">
            <HiOutlineEnvelope className="text-2xl text-[#F07232]" />
            <span>cinestar@production.dk</span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
