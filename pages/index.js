// Import
import Navbar from "../components/Navbar";
import OurAim from "../components/OurAim";
import About from "../components/About";
import Slider from "../components/slider";

// Export Home
export default function Home() {
  return (
    <div id="container">
      <Navbar />
      <OurAim />
      <h2 className="target-audience">Target Audience</h2>
      <Slider />
      <About />
    </div>
  );
}
