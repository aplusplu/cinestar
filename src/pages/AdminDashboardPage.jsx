import AdminLayout from "../components/layout/AdminLayout";

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="border border-white/10 bg-[#111] p-6">
          <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#F07232]">
            Status
          </p>
          <h3
            className="mb-3 text-[28px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Admin område klar
          </h3>
          <p className="text-white/75">
            Herfra kan du administrere blogindlæg og demonstrere GET, POST, PUT
            og DELETE mod API’et.
          </p>
        </div>

        <div className="border border-white/10 bg-[#111] p-6">
          <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#F07232]">
            Fokus
          </p>
          <h3
            className="mb-3 text-[28px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Blogs CRUD
          </h3>
          <p className="text-white/75">
            Næste skridt er at oprette, redigere og slette blogindlæg direkte
            fra administrationspanelet.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}
