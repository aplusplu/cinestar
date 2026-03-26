import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import logo from "../../assets/images/cinestar/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto flex h-[87px] max-w-[390px] items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Cinestar logo" className="h-7 w-auto" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Åbn menu"
            className="flex flex-col gap-1.5"
          >
            <span className="block h-[2px] w-7 bg-[#F07232]" />
            <span className="block h-[2px] w-7 bg-[#F07232]" />
            <span className="block h-[2px] w-7 bg-[#F07232]" />
          </button>
        </div>
      </nav>

      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
}
