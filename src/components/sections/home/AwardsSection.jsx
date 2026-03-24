export default function AwardsSection() {
  return (
    <section className="py-12 border-t border-gray-800">
      <div className="flex justify-center gap-12 flex-wrap">
        <img
          src="/src/assets/images/awards/award1.png"
          className="h-12 opacity-70 hover:opacity-100 transition"
        />
        <img
          src="/src/assets/images/awards/award2.png"
          className="h-12 opacity-70 hover:opacity-100 transition"
        />
        <img
          src="/src/assets/images/awards/award3.png"
          className="h-12 opacity-70 hover:opacity-100 transition"
        />
      </div>
    </section>
  );
}
