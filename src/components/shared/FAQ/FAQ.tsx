import { useState } from "react";
import { ICONS } from "../../../assets";
import Container from "../Container/Container";

const FAQ = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number>(0);

  const faqs = [
    {
      question: "How long does it take to grind fresh atta?",
      answer:
        "Grinding fresh atta usually takes 10 to 30 minutes, depending on the quantity of grains and the type of machine used. For a typical home batch of 4–5 kg wheat, it generally takes around 15 to 20 minutes. The time may vary slightly based on the grain type and the fineness of flour required, but overall, it is a quick process that ensures fresh, healthy, and high-quality atta.",
    },
    {
      question: "How long does it take to grind fresh atta?",
      answer:
        "Grinding fresh atta usually takes 10 to 30 minutes, depending on the quantity of grains and the type of machine used. For a typical home batch of 4–5 kg wheat, it generally takes around 15 to 20 minutes. The time may vary slightly based on the grain type and the fineness of flour required, but overall, it is a quick process that ensures fresh, healthy, and high-quality atta.",
    },
    {
      question: "How long does it take to grind fresh atta?",
      answer:
        "Grinding fresh atta usually takes 10 to 30 minutes, depending on the quantity of grains and the type of machine used. For a typical home batch of 4–5 kg wheat, it generally takes around 15 to 20 minutes. The time may vary slightly based on the grain type and the fineness of flour required, but overall, it is a quick process that ensures fresh, healthy, and high-quality atta.",
    },
  ];

  const handleClick = (index: number) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? -1 : index));

  return (
    <div className="py-15.5 flex flex-col items-center justify-center gap-12">
      <h2 className="heading">FAQ</h2>
      <Container>
        <div className="flex gap-3 flex-col items-center justify-center w-full">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="py-12 px-6 w-full border-b border-neutral-15"
            >
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                onClick={() => handleClick(index)}
              >
                <h3 className="text-neutral-25 font-bold text-2xl leading-8">
                  {faq.question}
                </h3>
                <img
                  src={ICONS.arrowDown}
                  alt="right-arrow"
                  className={`size-5 transition-transform duration-300 ease-in-out ${
                    isAccordionOpen === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                  isAccordionOpen === index
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p
                  className="text-neutral-30 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
