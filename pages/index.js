// Import
import Navbar from "../components/Navbar";
import OurAim from "../components/OurAim";
import About from "../components/About";
import HomeSection from "../components/Home";
import Slider from "../components/Slider";

// Export Home
export default function Home() {
  return (
    <div id="container">
      <Navbar />
      <HomeSection />
      <OurAim />
      <h2 className="target-audience">Target Audience</h2>
      <Slider />
      <About />
    </div>
  );
}
