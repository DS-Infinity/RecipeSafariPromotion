// Import
import Navbar from "../components/Navbar";
import OurAim from "../components/OurAim";
import About from "../components/About";
import HomeSection from "../components/Home";
import Slider from "../components/slider";
import Head from "next/head";

// Export Home
export default function Home() {
  return (
    <div id="container">
      <Head>
        <link rel="shortcut icon" href="/logo_dark.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <HomeSection />
      <OurAim />
      <h2 className="target-audience">Target Audience</h2>
      <Slider className="slider-main" />
      <About />
    </div>
  );
}
