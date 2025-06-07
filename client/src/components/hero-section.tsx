import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const backgroundImage = "/attached_assets/5761A4A3-073E-4CB8-9054-2E7BB28A077D.PNG";

export default function HeroSection() {
  return (
    <section 
      className="bg-black text-white py-16 md:py-24 hero-pattern relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="yadri-font text-3xl md:text-5xl font-bold mb-6 slide-in">
          Authentic Flavors from the Himalayas
        </h3>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 slide-in">
          Experience the rich culinary traditions of Nepal and India, crafted with time-honored recipes and the finest spices from the mountain regions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in">
          <Button 
            onClick={() => {
              const storySection = document.querySelector('.story-section');
              if (storySection) {
                storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-white text-[#040844] px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 rounded-full"
          >
            View Our Story
          </Button>
          <Button 
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-white text-[#040844] hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-full"
          >
            Our Menu
          </Button>
          <Button 
            onClick={() => {
              const chefSection = document.getElementById('chef-recommendations');
              if (chefSection) {
                chefSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="border-2 border-white text-white hover:bg-white/10 transition-colors duration-300 transform hover:scale-105 rounded-full px-8 py-3 text-lg font-semibold"
          >
            Chef's Specials
          </Button>
          <Link href="/reservations">
            <Button 
              className="bg-primary-custom hover:bg-[#03062d] text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-full"
            >
              Make Reservation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
