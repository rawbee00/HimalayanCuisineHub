import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Restaurant gallery images - you can add your actual photos here
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Himalayan Restaurant Interior",
      title: "Our Cozy Dining Area"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional Nepali Momos",
      title: "Authentic Nepali Mo:Mo"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Indian Curry Dishes",
      title: "Rich Indian Curries"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tandoor Oven",
      title: "Traditional Tandoor Cooking"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Naan Bread",
      title: "Fresh Tandoor Naan"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1563379091339-03246963d25f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Spice Collection",
      title: "Himalayan Spices"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Biryani Dish",
      title: "Aromatic Biryani"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1559847844-d721426d6edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant Ambiance",
      title: "Warm & Welcoming Atmosphere"
    }
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
    <section className="gallery-section bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="yadri-font text-4xl md:text-5xl font-bold text-primary-custom mb-4">
            Gallery
          </h3>
          <p className="text-lg text-primary-custom max-w-2xl mx-auto mb-8">
            Take a visual journey through our restaurant and discover the authentic flavors of the Himalayas
          </p>
          
          {/* Gallery Button */}
          <Button
            onClick={() => setIsGalleryOpen(true)}
            className="bg-gradient-to-r from-primary-custom to-blue-600 hover:from-blue-600 hover:to-primary-custom text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            View Our Gallery
          </Button>
        </div>

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

              {/* Gallery Grid */}
              {selectedImage === null ? (
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
      </div>
    </section>
  );
}