import { Link, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  const email = localStorage.getItem("cinestar_user_email");
  const role = localStorage.getItem("cinestar_user_role");
  const isLoggedIn = localStorage.getItem("cinestar_is_logged_in") === "true";

  function handleLogout() {
    localStorage.removeItem("cinestar_is_logged_in");
    localStorage.removeItem("cinestar_user_role");
    localStorage.removeItem("cinestar_user_email");
    navigate("/");
  }

  if (!isLoggedIn) {
    navigate("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-black px-5 py-16 text-white">
      <div className="mx-auto max-w-[700px] border border-white/10 bg-[#111] p-6 md:p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#F07232]">
          Brugerprofil
        </p>

        <h1
          className="mb-6 text-[42px] leading-none"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Min profil
        </h1>

        <div className="space-y-4 text-white/80">
          <p>
            <span className="text-white">Email:</span> {email || "-"}
          </p>
          <p>
            <span className="text-white">Rolle:</span> {role || "-"}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex min-h-[48px] items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#F07232] hover:text-[#F07232]"
          >
            Til forsiden
          </Link>

          {role === "admin" && (
            <Link
              to="/admin"
              className="inline-flex min-h-[48px] items-center justify-center bg-[#F07232] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:opacity-90"
            >
              Gå til admin
            </Link>
          )}

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex min-h-[48px] items-center justify-center border border-red-500 px-6 text-sm font-semibold uppercase tracking-[0.12em] text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-white/75">
          <p className="mb-3">
            Du er logget ind som <span className="text-[#F07232]">{role}</span>.
          </p>

          <p>
            Din login-session bliver gemt i localStorage, så du forbliver logget
            ind, når du går tilbage til websitet.
          </p>
        </div>
      </div>
    </div>
  );
}
