import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ChefRecommendations from "@/components/chef-recommendations";
import MenuSystem from "@/components/menu-system-fixed";
import Gallery from "@/components/gallery";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-primary-custom">
      <Header />
      <HeroSection />
      <AboutSection />
      <ChefRecommendations />
      <MenuSystem />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}
