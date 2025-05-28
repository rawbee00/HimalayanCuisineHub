import { Button } from "@/components/ui/button";

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
            className="bg-white text-primary-custom px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            View Our Story
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-primary-custom transition-all duration-300 transform hover:scale-105 text-[#040844]"
          >
            Make Reservation
          </Button>
        </div>
      </div>
    </section>
  );
}
