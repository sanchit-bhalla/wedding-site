import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-ivory text-maroon min-h-screen">
      <HeroSection />
      <Timeline />
      <Footer />
    </main>
  );
}
