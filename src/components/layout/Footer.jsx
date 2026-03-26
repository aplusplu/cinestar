import logo from "../../assets/images/cinestar/logo.png";
import liquifer from "../../assets/images/cinestar/liquifer.png";
import SoMeSection from "./SoMeSection";

export default function Footer() {
  return (
    <>
      <SoMeSection />

      <footer
        className="border-t border-white/10 bg-black bg-cover bg-center bg-no-repeat px-3 py-7 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url(${liquifer})`,
        }}
      >
        <div className="mx-auto max-w-[390px] text-center">
          <img
            src={logo}
            alt="Cinestar logo"
            className="mx-auto mb-5 h-10 w-auto"
          />

          <p className="text-[18px] leading-7 text-white/85">
            Copyright 202 © Cinestar | Powered
            <br />
            by RomeTheme Studio
          </p>
        </div>
      </footer>
    </>
  );
}
