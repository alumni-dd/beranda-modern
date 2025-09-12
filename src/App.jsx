import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import ClusterCards from "./components/ClusterCards.jsx";
import Testimonials from "./components/Testimonials.jsx";
import News from "./components/News.jsx";
import NewsletterSlider from "./components/NewsletterSlider.jsx";
import Footer from "./components/Footer.jsx";
import { newsletters } from "./data/newsletters.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClusterCards />
        <Testimonials />
        <News />
        <NewsletterSlider items={newsletters} />
      </main>
      <Footer />
    </div>
  );
}
