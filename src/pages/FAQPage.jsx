import MainLayout from "../components/layout/MainLayout";
import PageHeader from "../components/layout/PageHeader";
import FAQSection from "../components/sections/faq/FAQSection";

export default function FAQPage() {
  return (
    <MainLayout>
      <PageHeader title="FAQ" breadcrumb="Forside / FAQ" />
      <FAQSection />
    </MainLayout>
  );
}
