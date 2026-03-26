import { Link, useLocation } from "react-router-dom";

export default function BurgerMenu({ open, setOpen, authState, onLogout }) {
  const location = useLocation();

  if (!open) return null;

  const publicLinks = [
    { label: "Forside", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "FAQ", to: "/faq" },
    { label: "Kontakt", to: "/contact" },
  ];

  const accountLinks = !authState?.isLoggedIn
    ? [{ label: "Login", to: "/admin/login" }]
    : authState.role === "admin"
      ? [
          { label: "Admin", to: "/admin" },
          { label: "Profil", to: "/profile" },
        ]
      : [{ label: "Profil", to: "/profile" }];

  const links = [...publicLinks, ...accountLinks];

  return (
    <div className="fixed inset-0 z-[60] bg-black">
      <div className="mx-auto flex min-h-screen max-w-[390px] flex-col px-5 py-8 text-white">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Luk menu"
          className="self-end text-[44px] leading-none text-[#F07232]"
        >
          ×
        </button>

        <div className="mt-2 w-[190px] border border-[#00A3FF] p-4">
          <div className="space-y-4">
            {links.map((link) => {
              const active = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block text-[24px] uppercase ${
                    active ? "text-[#F07232]" : "text-white"
                  }`}
                  style={{ fontFamily: '"Quicksand", sans-serif' }}
                >
                  {link.label}
                </Link>
              );
            })}

            {authState?.isLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onLogout();
                }}
                className="block text-[24px] uppercase text-white"
                style={{ fontFamily: '"Quicksand", sans-serif' }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
