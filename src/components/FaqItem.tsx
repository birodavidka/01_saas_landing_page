import clsx from "clsx";

type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

type FaqItemProps = {
  item: FaqEntry;
  active: boolean;
  onToggle: () => void;
};

const FaqItem = ({ item, active, onToggle }: FaqItemProps) => {
  const answerId = `feature-faq-answer-${item.id}`;

  return (
    <div className="border-t border-[#d9d5e3]">
      <button
        type="button"
        className="group flex w-full items-start gap-3 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-p3"
        aria-expanded={active}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span
          aria-hidden="true"
          className={clsx(
            "mt-1 text-sm font-semibold transition-all duration-300",
            active ? "translate-x-0 text-[#7667ec]" : "-translate-x-1 text-[#b0a9c2]",
          )}
        >
          ›
        </span>

        <span className="min-w-0 flex-1">
          <span
            className={clsx(
              "block text-base font-semibold tracking-[-0.02em] transition-colors duration-300",
              active ? "text-[#17142b]" : "text-[#373247] group-hover:text-[#17142b]",
            )}
          >
            {item.question}
          </span>

          <span
            id={answerId}
            className={clsx(
              "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
              active
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <span className="overflow-hidden">
              <span className="block max-w-md pt-2 text-sm leading-6 text-[#888196]">
                {item.answer}
              </span>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
};
export default FaqItem;
