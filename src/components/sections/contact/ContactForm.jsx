import { useState } from "react";
import { toast } from "react-toastify";
import { createMessage } from "../../../services/messageService";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.subject || !formData.description) {
      toast.error("Udfyld venligst alle felter.");
      return;
    }

    try {
      setLoading(true);

      const response = await createMessage(formData);

      toast.success(response?.message || "Besked sendt.");

      setFormData({
        name: "",
        subject: "",
        description: "",
      });
    } catch (error) {
      toast.error("Noget gik galt. Prøv igen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Navn"
        value={formData.name}
        onChange={handleChange}
        className="h-[54px] w-full border-b border-white/25 bg-transparent px-1 text-white outline-none placeholder:text-white/45"
      />

      <input
        type="text"
        name="subject"
        placeholder="Emne"
        value={formData.subject}
        onChange={handleChange}
        className="h-[54px] w-full border-b border-white/25 bg-transparent px-1 text-white outline-none placeholder:text-white/45"
      />

      <textarea
        name="description"
        placeholder="Besked"
        value={formData.description}
        onChange={handleChange}
        rows="5"
        className="w-full border-b border-white/25 bg-transparent px-1 py-3 text-white outline-none placeholder:text-white/45"
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-[48px] items-center justify-center border border-[#F07232] px-8 text-[14px] font-semibold text-[#F07232] transition hover:bg-[#F07232] hover:text-black disabled:opacity-50"
      >
        {loading ? "Sender..." : "Send besked"}
      </button>
    </form>
  );
}
