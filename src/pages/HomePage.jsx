import MainLayout from "../components/layout/MainLayout";
import HeroOverlaySection from "../components/sections/home/HeroOverlaySection";
import AwardsSection from "../components/sections/home/AwardsSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroOverlaySection />
      <AwardsSection />
    </MainLayout>
  );
}
