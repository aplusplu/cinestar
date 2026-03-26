import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cinestar/logo.png";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    role: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("cinestar_is_logged_in") === "true";
    const role = localStorage.getItem("cinestar_user_role") || "";

    setAuthState({
      isLoggedIn,
      role,
    });
  }, [location.pathname]);

  function handleLogout() {
    localStorage.removeItem("cinestar_token");
    localStorage.removeItem("cinestar_is_logged_in");
    localStorage.removeItem("cinestar_user_role");
    localStorage.removeItem("cinestar_user_email");

    setAuthState({
      isLoggedIn: false,
      role: "",
    });

    setOpen(false);
    navigate("/");
  }

  const authLink = !authState.isLoggedIn
    ? { label: "Login", to: "/admin/login" }
    : authState.role === "admin"
      ? { label: "Admin", to: "/admin" }
      : { label: "Profil", to: "/profile" };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto flex h-[87px] max-w-[390px] items-center justify-between px-5">
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Cinestar logo"
              className="h-[32px] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3">
            {authState.isLoggedIn && (
              <>
                <Link
                  to={authLink.to}
                  className="inline-flex min-h-[40px] items-center justify-center border border-[#F07232] px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F07232]"
                >
                  {authLink.label}
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex min-h-[40px] items-center justify-center border border-white/20 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                >
                  Logout
                </button>
              </>
            )}

            {!authState.isLoggedIn && (
              <Link to="/admin/login" className="hidden">
                Login
              </Link>
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Åbn menu"
              className="ml-1 flex flex-col gap-[5px]"
            >
              <span className="block h-[2px] w-[26px] bg-[#F07232]" />
              <span className="block h-[2px] w-[26px] bg-[#F07232]" />
              <span className="block h-[2px] w-[26px] bg-[#F07232]" />
            </button>
          </div>
        </div>
      </nav>

      <BurgerMenu
        open={open}
        setOpen={setOpen}
        authState={authState}
        onLogout={handleLogout}
      />
    </>
  );
}
