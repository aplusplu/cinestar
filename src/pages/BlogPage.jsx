import MainLayout from "../components/layout/MainLayout";
import PageHeader from "../components/layout/PageHeader";
import BlogArchiveSection from "../components/sections/blog/BlogArchiveSection";

export default function BlogPage() {
  return (
    <MainLayout>
      <PageHeader title="BLOG ARKIV" breadcrumb="Forside / Blog arkiv" />
      <BlogArchiveSection />
    </MainLayout>
  );
}
