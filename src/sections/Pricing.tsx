import { useState } from "react";
import bgOutlines from "../assets/images/bg-outlines.svg";
import Button from "../components/Button";

const plans = [
  {
    name: "Starter",
    description: "Everything you need to organize your first projects.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Up to 3 active projects",
      "Unlimited collaborators",
      "Board and list views",
      "7-day activity history",
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    description: "More control and visibility for growing teams.",
    monthlyPrice: 18,
    annualPrice: 14,
    features: [
      "Unlimited projects",
      "Timeline and dashboard views",
      "Automations and integrations",
      "Unlimited activity history",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Business",
    description: "Advanced security and support for larger teams.",
    monthlyPrice: 32,
    annualPrice: 25,
    features: [
      "Everything in Pro",
      "Advanced permissions",
      "Single sign-on (SSO)",
      "Priority support",
    ],
    cta: "Contact sales",
  },
];

const CheckIcon = () => (
  <span
    aria-hidden="true"
    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f1e6fb] text-p3"
  >
    <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
      <path
        d="m3.5 8 2.8 2.8 6.2-6.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const isAnnual = billing === "annual";

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={bgOutlines}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 w-[960px] max-w-none -translate-x-1/2 opacity-35"
      />

      <div className="container relative z-1">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="caption small-2">Simple pricing</p>
          <h2 className="font-inter text-4xl font-black leading-[1.08] tracking-[-0.04em] text-p4 sm:text-5xl">
            A plan that grows with your team
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-8 text-p5">
            Start free, then upgrade when your workflow needs more power. No
            hidden fees, cancel anytime.
          </p>

          <div
            className="mx-auto mt-10 inline-flex rounded-full border border-[#e4dce9] bg-white p-1.5 shadow-[0_12px_36px_rgba(65,42,82,0.08)]"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-s4 ${
                billing === "monthly"
                  ? "bg-s4 text-white"
                  : "text-p5 hover:text-p4"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              aria-pressed={billing === "annual"}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-s4 ${
                billing === "annual"
                  ? "bg-s4 text-white"
                  : "text-p5 hover:text-p4"
              }`}
            >
              Annual · save 20%
            </button>
          </div>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-full flex-col rounded-[28px] border bg-white p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${
                  plan.popular
                    ? "border-s4 shadow-[0_24px_70px_rgba(141,46,213,0.16)]"
                    : "border-[#e9e3ed] shadow-[0_18px_50px_rgba(41,24,55,0.07)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-7 -translate-y-1/2 rounded-full bg-p3 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                    Most popular
                  </span>
                )}

                <div>
                  <h3 className="font-inter text-2xl font-bold tracking-[-0.03em] text-p4">
                    {plan.name}
                  </h3>
                  <p className="mt-3 min-h-14 leading-7 text-p5">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end gap-2 border-b border-[#eee8f1] pb-8">
                  <span className="font-inter text-5xl font-black tracking-[-0.05em] text-p4">
                    ${price}
                  </span>
                  <span className="pb-1.5 text-sm text-p5">
                    {price === 0 ? "forever" : "/ user / mo"}
                  </span>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 leading-6 text-p4">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-10 w-full ${
                    plan.popular
                      ? ""
                      : "border border-s4 bg-white text-p3 shadow-none hover:bg-[#faf5fe] hover:brightness-100 [&>span]:text-p3"
                  }`}
                >
                  {plan.cta}
                </Button>

                {isAnnual && price > 0 && (
                  <p className="mt-4 text-center text-sm text-p5">
                    Billed ${price * 12} annually
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
