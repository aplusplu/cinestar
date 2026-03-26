import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signIn, saveAuthSession } from "../services/authService";

function decodeJwt(token) {
  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch (error) {
    return null;
  }
}

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Udfyld email og password.");
      return;
    }

    try {
      setLoading(true);

      const result = await signIn(form);

      if (result?.status !== "ok" || !result?.data?.token) {
        toast.error(result?.message || "Login mislykkedes.");
        return;
      }

      const decoded = decodeJwt(result.data.token);

      if (!decoded?.role) {
        toast.error("Kunne ikke læse brugerrolle fra token.");
        return;
      }

      saveAuthSession(result.data.token, decoded.role, decoded.email);

      toast.success("Login lykkedes.");

      if (decoded.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      toast.error("Login mislykkedes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
      <div className="w-full max-w-[420px] border border-white/10 bg-[#111] p-6 md:p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#F07232]">
          Login
        </p>

        <h1
          className="mb-6 text-[42px] leading-none"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Log ind
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.12em] text-white/70">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="h-[50px] w-full border border-white/15 bg-black px-4 text-white outline-none focus:border-[#F07232]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm uppercase tracking-[0.12em] text-white/70">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="h-[50px] w-full border border-white/15 bg-black px-4 text-white outline-none focus:border-[#F07232]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-[50px] w-full items-center justify-center bg-[#F07232] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logger ind..." : "Log ind"}
          </button>
        </form>

        <div className="mt-6 border-t border-white/10 pt-4 text-sm text-white/65">
          <p>Admin: admin@mediacollege.dk / admin</p>
          <p>Guest: guest@mediacollege.dk / guest</p>
        </div>
      </div>
    </div>
  );
}
