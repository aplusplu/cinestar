import award1 from "../../../assets/images/awards/award1.png";
import award2 from "../../../assets/images/awards/award2.png";
import award3 from "../../../assets/images/awards/award3.png";

export default function AwardsSection() {
  const awards = [award1, award2, award3];

  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto flex min-h-[336px] max-w-[390px] flex-col items-center justify-center gap-10 px-5 py-10">
        {awards.map((award, index) => (
          <img
            key={index}
            src={award}
            alt={`Award ${index + 1}`}
            className="max-h-[88px] w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
