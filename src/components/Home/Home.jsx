import React from "react";
import Cta from "./Cta/Cta";
import Counts from "./Counts/Counts";
import Blogs from "./Blogs/Blogs";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";
import AutoPlaySlider from "./AutoPlaySlider";
import Services from "./Services/Services";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";
import Client from "./Client/Client";
import Psychologist from "./Psychologist/Psychologist";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Psychologist /> */}
      <Client />
      <Features />
      <Services />
      <Cta />
      <Counts />
      <Testimonials />
      <Blogs />
      <Achievements />
      <Contact />
      {/* <AutoPlaySlider /> */}
    </>
  );
};

export default Home;
