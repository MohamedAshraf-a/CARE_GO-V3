import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Applications from "@/components/Applications";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-clip">
      <Navbar />

      <Hero />

      <div className="space-y-32 w-full overflow-x-clip">
        <Features />
        <Applications />
        <Impact />
        <Team />
      </div>

      <Footer />
    </main>
  );
}