import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({
  children,
  className = "",
  type = "button",
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={`group relative min-h-14 overflow-hidden rounded-full bg-s4 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_35px_rgba(170,59,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-s4 active:translate-y-0 ${className}`}
      {...props}
    >
      <span className="relative z-1">{children}</span>
    </button>
  );
};

export default Button;
