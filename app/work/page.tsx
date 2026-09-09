import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#08090C] pt-16">
      <Navbar />
      <Results />
      <ContactCTA />
      <Footer />
    </main>
  );
}
