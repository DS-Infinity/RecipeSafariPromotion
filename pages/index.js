// Import
import Navbar from "../components/Navbar";
import OurAim from "../components/OurAim";
import About from "../components/About";
import HomeSection from "../components/Home";

// Export Home
export default function Home() {
  return (
    <div id="container">
      <Navbar />
      <HomeSection/>
      <OurAim />
      <About />
    </div>
  );
}
