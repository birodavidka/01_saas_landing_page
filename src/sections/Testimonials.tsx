import { useState } from "react";

const testimonials = [
  {
    quote:
      "Nexli turned a scattered process into one clear workspace. Our team spends less time searching for updates and more time moving projects forward.",
    name: "Maya Chen",
    role: "Head of Product, Lumon",
    initials: "MC",
    color: "from-[#b96bff] to-[#7134c7]",
  },
  {
    quote:
      "The setup was refreshingly simple. Within a week, everyone knew what to do, where to find it, and how their work connected to the bigger picture.",
    name: "Ethan Miller",
    role: "Operations Lead, Northstar",
    initials: "EM",
    color: "from-[#7569f4] to-[#5145b8]",
  },
  {
    quote:
      "We finally have the visibility we were missing. Nexli keeps the whole company aligned without adding another layer of meetings.",
    name: "Sofia Reyes",
    role: "Co-founder, Framework",
    initials: "SR",
    color: "from-[#e065b9] to-[#9b3b8b]",
  },
];

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={`size-5 ${direction === "right" ? "rotate-180" : ""}`}
  >
    <path
      d="m12.5 4.5-5.5 5.5 5.5 5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden  py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-s4/10 blur-[100px]" />

      <div className="container relative z-1">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <p className="caption small-2">Customer stories</p>
            <h2 className="max-w-[480px] font-inter text-4xl font-black leading-[1.08] tracking-[-0.04em] text-p4 sm:text-5xl">
              What our clients are saying
            </h2>
          </div>

          <p className="max-w-[590px] border-l border-[#ddd8e1] pl-7 text-lg leading-8 text-p5 sm:pl-10">
            See how modern teams use Nexli to simplify everyday work, stay
            aligned, and turn their best ideas into real progress.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between sm:mt-16">
          <p className="text-sm font-semibold text-p5">
            <span className="text-p4">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-[#c7c1cb]">/</span>
            {String(testimonials.length).padStart(2, "0")}
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous testimonial"
              className="flex size-12 items-center justify-center rounded-full bg-p4 text-white shadow-[0_12px_30px_rgba(8,6,13,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-p3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-s4"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-[#ded8e3] bg-white text-p4 transition-all duration-300 hover:-translate-y-0.5 hover:border-s4 hover:text-p3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-s4"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={testimonial.name}
                className={`flex min-h-[350px] flex-col rounded-[28px] border bg-white p-7 transition-all duration-500 sm:p-8 ${
                  isActive
                    ? "border-transparent shadow-[0_28px_80px_rgba(70,42,91,0.13)] md:-translate-y-4 md:scale-[1.025]"
                    : "border-[#e9e3ed] opacity-70 shadow-[0_12px_36px_rgba(41,24,55,0.04)]"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <svg
                  viewBox="0 0 48 36"
                  aria-hidden="true"
                  className="h-9 w-12 text-s4"
                >
                  <path
                    d="M0 24.6C0 15 4.2 6.9 12.6 0l6.3 5.2c-5 4.2-7.9 8.6-8.6 13.2h8.1V36H0V24.6Zm28.2 0C28.2 15 32.4 6.9 40.8 0l6.3 5.2c-5 4.2-7.9 8.6-8.6 13.2h8.1V36H28.2V24.6Z"
                    fill="currentColor"
                  />
                </svg>

                <blockquote className="mt-7 flex-1 text-lg leading-8 tracking-[-0.025em] text-p4">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-9 flex items-center gap-4 border-t border-[#eee9f1] pt-6">
                  <div
                    aria-hidden="true"
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-sm font-bold text-white shadow-[0_8px_20px_rgba(92,45,130,0.2)]`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-inter font-bold tracking-[-0.03em] text-p4">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-[#948d9c]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-s4" : "w-2 bg-[#d8d0dd]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
