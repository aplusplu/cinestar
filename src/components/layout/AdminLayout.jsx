import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminLayout({ children, title = "Admin" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Dashboard", to: "/admin" },
    { label: "Blogs", to: "/admin/blogs" },
    { label: "Profil", to: "/profile" },
    { label: "Back to site", to: "/" },
  ];

  function handleLogout() {
    localStorage.removeItem("cinestar_is_logged_in");
    localStorage.removeItem("cinestar_user_role");
    localStorage.removeItem("cinestar_user_email");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto grid min-h-screen max-w-[1200px] md:grid-cols-[240px_1fr]">
        <aside className="border-b border-white/10 bg-[#111] p-6 md:border-b-0 md:border-r">
          <h1
            className="mb-8 text-[32px] leading-none"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Cinestar
            <br />
            Admin
          </h1>

          <nav className="space-y-3">
            {links.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded px-4 py-3 text-sm uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-[#F07232] text-black"
                      : "border border-white/10 text-white hover:border-[#F07232] hover:text-[#F07232]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={handleLogout}
              className="block w-full rounded border border-red-500 px-4 py-3 text-left text-sm uppercase tracking-[0.14em] text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              Logout
            </button>
          </nav>
        </aside>

        <section className="p-6 md:p-10">
          <header className="mb-8 border-b border-white/10 pb-5">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#F07232]">
              Backoffice
            </p>
            <h2
              className="text-[42px] leading-none"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              {title}
            </h2>
          </header>

          {children}
        </section>
      </div>
    </div>
  );
}
