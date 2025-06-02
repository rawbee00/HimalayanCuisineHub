import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Restaurant gallery images - ready for your authentic photos
  const galleryImages: {id: number; src: string; alt: string; title: string}[] = [
    // Add your restaurant photos here
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <section className="story-section py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="yadri-font text-4xl font-bold text-primary-custom text-center mb-8">
            Our Story
          </h2>
          
          {/* Gallery Button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={() => setIsGalleryOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-primary-custom hover:from-primary-custom hover:to-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </Button>
          </div>
          
          {/* Story Content - Always Visible */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Our story is a journey—one that begins high in the Himalayas, near the foot of Sagarmatha (Mount Everest), and winds its way to the tranquil shores of Costa del Silencio.
            </p>
            
            <p>
              Raised among the rich traditions of Nepali cuisine, we learned that food is more than ingredients—it's a connection to land, family, and heritage. From open-fire sekuwa to the comforting warmth of goat curry, every meal was a celebration of life's simplest joys.
            </p>
            
            <p>
              With time, our path led us across continents. Carrying our flavors, our stories, and our dreams, we arrived in Tenerife with one goal: to share the essence of Nepal with a new home.
            </p>
            
            <p>
              Himalayan Curry & Tandoori House is the result of that journey—a humble space where bold Himalayan spices meet the breeze of the Atlantic. Every dish is prepared with care, tradition, and the hope that you'll taste not just the food, but the journey behind it.
            </p>
            
            <p className="text-xl font-medium text-primary-custom italic text-center mt-8 pt-6 border-t border-gray-200">
              This is more than a restaurant. It's a story served on a plate.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl mx-auto">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <Button
                onClick={() => {
                  setIsGalleryOpen(false);
                  setSelectedImage(null);
                }}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg"
              >
                <X size={24} />
              </Button>
            </div>

            {/* Gallery Content */}
            {galleryImages.length === 0 ? (
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Gallery Coming Soon</h3>
                <p className="text-lg">We're preparing beautiful photos of our authentic cuisine and restaurant ambiance.</p>
              </div>
            ) : selectedImage === null ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[80vh] overflow-y-auto">
                {galleryImages.map((image, index) => (
                  <Card 
                    key={image.id} 
                    className="cursor-pointer transform transition-all duration-300 hover:scale-105 bg-white/10 border-white/20"
                    onClick={() => setSelectedImage(index)}
                  >
                    <CardContent className="p-2">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <p className="text-white text-sm mt-2 text-center font-medium">
                        {image.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Full Size Image View */
              <div className="flex items-center justify-center">
                <Button
                  onClick={prevImage}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg mr-4"
                >
                  <ChevronLeft size={24} />
                </Button>
                
                <div className="flex-1 max-w-4xl text-center">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full max-h-[70vh] object-contain rounded-lg"
                  />
                  <p className="text-white text-lg mt-4 font-medium">
                    {galleryImages[selectedImage].title}
                  </p>
                  <Button
                    onClick={() => setSelectedImage(null)}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg mt-4"
                  >
                    Back to Gallery
                  </Button>
                </div>
                
                <Button
                  onClick={nextImage}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg ml-4"
                >
                  <ChevronRight size={24} />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}