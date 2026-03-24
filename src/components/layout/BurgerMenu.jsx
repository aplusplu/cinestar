import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/navigation";

export default function BurgerMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col p-8">
      {/* CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="self-end text-orange-500 text-2xl"
      >
        ✕
      </button>

      {/* LINKS */}
      <div className="mt-16 space-y-6 text-lg">
        {navigationLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setOpen(false)}
            className="block"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
