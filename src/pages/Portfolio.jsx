import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechStack from "@/components/portfolio/TechStack";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import CursorGlow from "@/components/portfolio/CursorGlow";

export default function Portfolio() {
  return (
    <div data-testid="portfolio-page" className="bg-[#0c0c0c] text-[#f5f5f5] min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
