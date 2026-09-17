import hero from "../assets/images/hero.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[720px] pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:min-h-0 max-md:pt-36 max-md:pb-16"
    >
      <div className="container">
        <div className="relative z-2 max-w-[512px] max-lg:max-w-[388px]">
          <div className="caption small-2">Video Editing</div>
          <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-md:mb-4">
            Amazingly simple
          </h1>
          <p className="body-1 mb-14 max-w-[440px] max-md:mb-10">
            We designed XORA AI Video Editor to be an easy to use, quick to
            learn, and surprisingly powerful.
          </p>
          <div className="flex gap-6">
            <Button>Get started</Button>
            <button className="group border relative min-h-14 overflow-hidden rounded-full bg-s1 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-black shadow-[0_14px_35px_rgba(170,59,255,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-s2 active:translate-y-0">
              Create a free account
            </button>
          </div>
        </div>

        <div className="hero-img_res pointer-events-none absolute top-5 left-[calc(65%-340px)]">
          <img
            src={hero}
            className="h-auto w-full max-w-none"
            alt="Nexli video editor interface"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
