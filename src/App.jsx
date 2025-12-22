import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/Productviewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ShowCase from "./components/showcase";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
    </main>
  );
};
export default App;
