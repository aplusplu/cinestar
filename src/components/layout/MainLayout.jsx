import Navbar from "./Navbar";
import Footer from "./Footer";
import SoMeSection from "./SoMeSection";

export default function MainLayout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main>{children}</main>

      <SoMeSection />
      <Footer />
    </div>
  );
}
