import { useEffect, useState } from "react";
import { getAllFaqs } from "../../../services/faqService";

export default function FAQSection() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const data = await getAllFaqs();
        setFaqs(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadFaqs();
  }, []);

  return (
    <section className="bg-black px-5 py-24 text-white">
      <div className="mx-auto max-w-[390px]">
        <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#F07232]">
          Ofte stillede spørgsmål
        </p>

        <h2
          className="mb-6 text-[40px] leading-[0.95]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          De mest almindelige spørgsmål, vi får
        </h2>

        <p className="mb-10 text-[16px] leading-7 text-white/85">
          Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores
          processer, tjenester og produktioner. Har du brug for yderligere
          information? Tøv ikke med at kontakte os!
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={faq._id || index}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex w-full items-center justify-between px-4 py-4 text-left text-[16px] font-semibold uppercase ${
                    isOpen ? "bg-[#F07232] text-white" : "bg-white text-black"
                  }`}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{isOpen ? "⌃" : "⌄"}</span>
                </button>

                {isOpen && (
                  <div className="bg-[#1A1A1A] px-4 py-5 text-[15px] leading-7 text-white/85">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
