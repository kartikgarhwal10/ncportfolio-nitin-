import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceStrip from "@/components/ExperienceStrip";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import PerformanceMindset from "@/components/PerformanceMindset";
import Results from "@/components/Results";
import VideoCarousel from "@/components/VideoCarousel";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import PersonalBrand from "@/components/PersonalBrand";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#08090C]">
      <Navbar />
      <Hero />
      <ExperienceStrip />
      <About />
      <Expertise />
      <PerformanceMindset />
      <Results />
      <VideoCarousel />
      <Process />
      <Tools />
      <PersonalBrand />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
