import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/Productviewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ShowCase from "./components/showcase";
import Performance from "./components/Performance";
import Features from "./components/features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};
export default App;
