import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MenuSystem from "@/components/menu-system";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-primary-custom">
      <Header />
      <HeroSection />
      <MenuSystem />
      <Footer />
    </div>
  );
}
