import map from "../assets/images/map.png";

const StatData = [
  {
    id: 0,
    value: "350+",
    description: "Over 500k businesses powered with us",
  },
  {
    id: 1,
    value: "750k",
    description: "Users use our platform around the world",
  },
  {
    id: 2,
    value: "4.8",
    description: "Rating on Google Play and the App Store",
  },
  {
    id: 3,
    value: "24+",
    description: "More than 30 countries trust our platform",
  },
];

const Map = () => {
  return (
    <section id="about" className="overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="container">
        <h2 className="mx-auto max-w-[620px] text-center font-inter text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-p4 sm:text-5xl">
          Trusted by companies around the world
        </h2>

        <div className="mx-auto mt-14 flex max-w-[1180px] items-center justify-center sm:mt-20 lg:mt-24">
          <img
            src={map}
            alt="World map highlighting where Nexli teams are located"
            className="h-auto w-full"
            width={2172}
            height={724}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {StatData.map((data) => (
            <article
              key={data.id}
              className={`border-[#ddd8e1] px-2 py-8 sm:px-8 sm:py-6 lg:px-10 lg:py-2 ${
                data.id < 3 ? "border-b" : ""
              } ${
                data.id < 2
                  ? "sm:border-b"
                  : "sm:border-b-0 sm:border-t"
              } ${
                data.id % 2 === 1 ? "sm:border-l" : "sm:border-l-0"
              } ${
                data.id === 0
                  ? "lg:border-t-0 lg:border-l-0"
                  : "lg:border-t-0 lg:border-l"
              } lg:border-b-0`}
            >
              <p className="font-inter text-4xl font-bold tracking-[-0.04em] text-p4 sm:text-5xl">
                {data.value}
              </p>
              <p className="mt-5 max-w-[220px] text-base leading-7 text-[#96909f]">
                {data.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
