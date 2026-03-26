import MainLayout from "../components/layout/MainLayout";
import PageHeader from "../components/layout/PageHeader";
import BlogPostSection from "../components/sections/blog/BlogPostSection";

export default function BlogDetailPage() {
  return (
    <MainLayout>
      <PageHeader title="BLOG ARKIV" breadcrumb="Forside / Blog arkiv / Blog" />
      <BlogPostSection />
    </MainLayout>
  );
}
