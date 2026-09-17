import logo from "../assets/images/nexli.png";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#hero" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Team workspace", href: "#features" },
      { label: "Collaboration", href: "#features" },
      { label: "Global teams", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Customers", href: "#testimonials" },
      { label: "Contact", href: "mailto:hello@nexli.com" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Customer stories", href: "#testimonials" },
      { label: "Pricing guide", href: "#pricing" },
      { label: "Start for free", href: "#hero" },
    ],
  },
];

const socialLinks = [
  { label: "X", shortLabel: "X", href: "https://x.com/" },
  { label: "LinkedIn", shortLabel: "in", href: "https://www.linkedin.com/" },
  { label: "GitHub", shortLabel: "GH", href: "https://github.com/" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#e8e1ec] bg-[#fbf9fc] pt-20 pb-8 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-44 w-[580px] -translate-x-1/2 -translate-y-2/3 rounded-full bg-s4/10 blur-[90px]"
      />

      <div className="container relative">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#hero"
              className="inline-block transition-transform duration-300 hover:scale-[1.03] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-s4"
              aria-label="Nexli home"
            >
              <img src={logo} alt="Nexli" width={132} height={44} />
            </a>
            <p className="mt-6 max-w-[280px] leading-7 text-p5">
              One clear workspace for teams to create, organize, and move work
              forward.
            </p>

            <div className="mt-7 flex gap-3" aria-label="Social media">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Nexli on ${social.label}`}
                  className="flex size-11 items-center justify-center rounded-full border border-[#ddd5e2] bg-white text-[12px] font-bold tracking-[-0.02em] text-p4 transition-all duration-300 hover:-translate-y-0.5 hover:border-s4 hover:bg-s4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-s4"
                >
                  {social.shortLabel}
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} links`}>
              <h2 className="font-inter text-base font-bold tracking-[-0.03em] text-p4">
                {group.title}
              </h2>
              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block leading-6 text-p5 transition-colors duration-300 hover:text-p3 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-s4"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[#e4dde8] pt-7 text-sm text-[#928a9b] sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexli. All rights reserved.</p>
          <p>Designed for focused teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
