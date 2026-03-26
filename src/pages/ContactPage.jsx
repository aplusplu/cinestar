import MainLayout from "../components/layout/MainLayout";
import PageHeader from "../components/layout/PageHeader";
import ContactPreviewSection from "../components/sections/home/ContactPreviewSection";

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHeader title="KONTAKT" breadcrumb="Forside / Kontakt" />
      <ContactPreviewSection />
    </MainLayout>
  );
}
