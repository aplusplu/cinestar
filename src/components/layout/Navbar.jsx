import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/images/logo.png" alt="logo" className="h-6" />
          <span className="text-xl font-bold tracking-wider">CINESTAR</span>
        </Link>

        {/* BURGER */}
        <button onClick={() => setOpen(true)}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-orange-500"></span>
            <span className="block w-6 h-[2px] bg-orange-500"></span>
            <span className="block w-6 h-[2px] bg-orange-500"></span>
          </div>
        </button>
      </nav>

      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
}
