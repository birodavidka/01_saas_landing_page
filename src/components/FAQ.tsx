import { useState } from "react";
import { faq } from "../constants";
import FaqItem from "./FaqItem";

const FAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(
    faq[0]?.id ?? null,
  );

  return (
    <div className="mt-10 border-b border-[#d9d5e3]">
      {faq.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          active={activeId === item.id}
          onToggle={() =>
            setActiveId(activeId === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );
};

export default FAQ;
