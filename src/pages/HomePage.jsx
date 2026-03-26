import MainLayout from "../components/layout/MainLayout";
import HeroOverlaySection from "../components/sections/home/HeroOverlaySection";
import AwardsSection from "../components/sections/home/AwardsSection";
import StudioSection from "../components/sections/home/StudioSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import StorySection from "../components/sections/home/StorySection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";
import ContactPreviewSection from "../components/sections/home/ContactPreviewSection";
import LatestBlogSection from "../components/sections/home/LatestBlogSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroOverlaySection />
      <AwardsSection />
      <StudioSection />
      <ServicesSection />
      <StorySection />
      <TestimonialsSection />
      <ContactPreviewSection />
      <LatestBlogSection />
    </MainLayout>
  );
}
