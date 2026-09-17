import { clsx } from "clsx";
import { useEffect, useState } from "react";
import closeIcon from "../assets/icons/close.svg";
import menuIcon from "../assets/icons/menu.svg";
import logo from "../assets/images/nexli.png";
import Button from "../components/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled &&
          "bg-white/55 py-3 shadow-[0_8px_30px_rgba(36,22,51,0.08)] backdrop-blur-xl",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="z-2 flex-1 cursor-pointer lg:hidden" href="#hero">
          <img src={logo} alt="Nexli" width={120} height={40} />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 max-lg:transition-opacity max-lg:duration-300",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex items-center gap-10 max-lg:block max-lg:px-12">
                <li className="flex-1">
                  <a
                    href="#hero"
                    className="inline-block cursor-pointer transition-transform duration-500 hover:scale-[1.03] max-lg:hidden"
                  >
                    <img src={logo} width={120} height={40} alt="Nexli" />
                  </a>
                </li>
                <li>
                  <a
                    href="#hero"
                    className="nav-li"
                    onClick={() => setIsOpen(false)}
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="nav-li"
                    onClick={() => setIsOpen(false)}
                  >
                    Solution
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="nav-li"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="nav-li"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </a>
                </li>
                <Button>start for free</Button>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              {/*               <img
                src={bgOutlines}
                width={960}
                height={380}
                alt=""
                className="relative z-2"
              />
              <img
                src={bgOutlinesFill}
                width={960}
                height={380}
                alt=""
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              /> */}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 transition-colors hover:border-s4 lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt=""
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
