export default function Button({ text }) {
  return (
    <button className="bg-orange-500 px-6 py-3 text-black font-semibold hover:bg-orange-400 transition">
      {text}
    </button>
  );
}
