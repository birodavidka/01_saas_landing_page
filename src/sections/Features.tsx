import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import analytics from "../assets/icons/analytics1.svg";
import rocket from "../assets/icons/rocket.svg";
import bag from "../assets/icons/bag.svg";
import grid from "../assets/icons/grid.svg";

const featuresGrid = [
  {
    id: 0,
    icon: analytics,
    title: "Real time data",
    desc: "Get the data you need to make smarter decisions",
  },
  {
    id: 1,
    icon: rocket,
    title: "Fast and Easy to use",
    desc: "Easily to convert API with just a few clicks",
  },
  {
    id: 2,
    icon: bag,
    title: "Safety and Security",
    desc: "All costumer data is encrypted",
  },
  {
    id: 3,
    icon: grid,
    title: "Powerfull App",
    desc: "Provide simple and minimalist dashboard",
  },
];

const Features = () => {
  return (
    <section id="features" className="flex flex-col gap-20 px-10 py-20">
      <div className="flex items-center">
        <img src={feature1} alt="Feature 1" className="flex-1" width={320} />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-black">
            Collaborate from anywhere
          </h1>
          <div className="flex flex-col gap-6">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, minima.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium atque possimus omnis cumque sint tempora quisquam amet
              totam voluptatibus perferendis?
            </p>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
      {/* SECOND BLOCK */}
      <div className="mx-auto grid w-full max-w-[1252px] items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="w-full max-w-[470px]">
          <h2 className="font-inter text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-[#17142b] sm:text-5xl">
            Build your own workspace
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#888196]">
            It only takes a few minutes to get started, but the time it saves
            your team adds up every week.
          </p>
          <FAQ />
        </div>
        <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[520px]">
          <div className="absolute inset-[12%] rounded-full bg-[#bfc9ff]/35 blur-[70px]" />
          <img
            src={feature2}
            alt="Nexli workspace showing task progress, boards, and team chat"
            className="relative z-10 w-full max-w-[680px]"
          />
        </div>
      </div>
      {/* THIRD BLOCK */}
      <div className="flex items-center">
        <img src={feature3} alt="Feature 1" className="flex-1" width={320} />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-black">
            The reasons to prefer choosing our platform
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {featuresGrid.map((feature) => (
              <article key={feature.id} className="flex flex-col items-start">
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="mb-5 size-10 object-contain"
                />
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#17142b]">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-[260px] text-base leading-7 text-[#9a95a5]">
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
