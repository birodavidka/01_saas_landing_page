import wendys from "../assets/images/wendys.svg";
import spotify from "../assets/images/spotify.png";
import zoom from "../assets/images/zoom.svg";
import slack from "../assets/images/slack.svg";
import coinbase from "../assets/images/coinbase.svg";

const sponsors = [
  { name: "Wendy's", image: wendys },
  { name: "spotify", image: spotify },
  { name: "zoom", image: zoom },
  { name: "slack", image: slack },
  { name: "coinbase", image: coinbase },
];

const Carousel = () => {
  return (
    <section className="w-full flex items-center justify-center">
      {sponsors.map((sponsor) => (
        <div key={sponsor.name} className="mx-4">
          <img src={sponsor.image} alt={sponsor.name} className="h-40" />
        </div>
      ))}
    </section>
  );
};

export default Carousel;
