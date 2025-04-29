import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Blogs from "./components/Blog";
import Stack from "./components/Stack";
import Forum from "./components/Forum";

const App = () => {

  return (
    <div className="h-full w-full bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1.5vw_2vh]"></div>
      
      {/* Radial Gradient */}
      <div className="absolute left-1/2 top-[-10%] h-[80vh] w-[80vw] max-w-[1000px] max-h-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_closest-side_at_50%_30%,#fbfbfb36,#000)]"></div>

      <Navbar />

      {/* Main content */}
      <div className="relative z-10 overflow-hidden">

      <section id="hero"> <HeroSection /> </section>

      <Stack />
      
      <section id="features"> <FeatureSection /> </section>

      <section id="workflow"> <Workflow /> </section>

      <section id="forum"> <Forum /> </section>

      <section id="articles"> <Blogs /> </section>
      
      <Footer />

      </div>
    </div>
  );
};

export default App;