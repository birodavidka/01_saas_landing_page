import "./App.css";
import Carousel from "./sections/Carousel";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Map from "./sections/Map";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Carousel />
      <Features />
      <Map />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
