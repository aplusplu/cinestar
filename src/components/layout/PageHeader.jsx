export default function PageHeader({ title, breadcrumb }) {
  return (
    <div
      className="h-[250px] flex flex-col justify-center px-6"
      style={{
        backgroundImage: `url('/src/assets/images/studio.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/60 p-4">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-sm text-orange-500 mt-2">{breadcrumb}</p>
      </div>
    </div>
  );
}
