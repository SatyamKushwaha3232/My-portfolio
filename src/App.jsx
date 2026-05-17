import { useEffect, useState } from "react";

import Background from "./components/Background";

import CursorGlow from "./components/CursorGlow";
import MouseGlow from "./components/MouseGlow";
import BackToTop from "./components/BackToTop";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Base animated background */}
      <Background />

      

      {/* Cursor / mouse effects */}
      <CursorGlow />
      <MouseGlow />

      {/* Website Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </main>
  );
}