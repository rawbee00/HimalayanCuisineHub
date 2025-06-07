import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ChefRecommendations from "@/components/chef-recommendations";
import MenuSystem from "@/components/MenuSystem";
import Gallery from "@/components/gallery";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-primary-custom">
      <Header />
      <HeroSection />
      <AboutSection />
      <div id="chef-recommendations" className="scroll-mt-20">
        <ChefRecommendations />
      </div>
      <div id="menu" className="scroll-mt-20">
        <MenuSystem />
      </div>
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}
