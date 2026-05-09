import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PatientMonitor from "@/components/PatientMonitor";
import Team from "@/components/Team";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <Hero />
      <Features />
      <PatientMonitor />
      <Team />
      <Booking />
      <Footer />
    </main>
  );
}