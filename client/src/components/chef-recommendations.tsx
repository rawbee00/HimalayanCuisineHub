import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChefHat, Award } from "lucide-react";

export default function ChefRecommendations() {
  const recommendations = [
    {
      id: 1,
      name: "Essence of Himalayan Set Menu",
      category: "Nepali Specialty",
      price: "39,99 €",
      description: "A traditional 4-course journey through authentic Nepali flavors. Experience Mo:Mo, Thukpa, Thakali curry, and Yomari dessert.",
      badge: "Most Popular",
      badgeColor: "bg-red-500",
      rating: 5,
      chefNote: "Our signature dining experience showcasing the authentic taste of the Himalayas"
    },
    {
      id: 2,
      name: "Butter Chicken",
      category: "House Special",
      price: "14,50 €",
      description: "Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek.",
      badge: "Chef's Choice",
      badgeColor: "bg-blue-500",
      rating: 5,
      chefNote: "Rich, creamy, and perfectly spiced - a crowd favorite"
    },
    {
      id: 3,
      name: "Tandoori Mix Grill",
      category: "Sizzler",
      price: "15,95 €",
      description: "Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns served on a sizzling hot plate.",
      badge: "Best Seller",
      badgeColor: "bg-green-500",
      rating: 5,
      chefNote: "Perfect for sharing and experiencing multiple tandoori flavors"
    },
    {
      id: 4,
      name: "Special Himalayan Biryani",
      category: "Biryani",
      price: "15,95 €",
      description: "Our signature biryani with unique spice blend. Fragrant basmati rice with authentic Himalayan spices.",
      badge: "Signature",
      badgeColor: "bg-purple-500",
      rating: 5,
      chefNote: "A unique blend of Nepali and Indian flavors in every grain"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <ChefHat className="text-primary-custom w-8 h-8" />
            <h3 className="yadri-font text-4xl md:text-5xl font-bold text-primary-custom">
              Chef's Recommendations
            </h3>
            <Award className="text-primary-custom w-8 h-8" />
          </div>
          <p className="text-lg text-primary-custom max-w-3xl mx-auto leading-relaxed">
            Discover our most beloved dishes, carefully curated by our head chef to showcase 
            the finest flavors from the Himalayas and India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {recommendations.map((dish) => (
            <Card key={dish.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-gray-100 hover:border-primary-custom/20">
              <CardContent className="p-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-custom/10 to-transparent rounded-bl-full"></div>
                
                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <Badge className={`${dish.badgeColor} text-white font-semibold px-3 py-1 text-sm`}>
                    {dish.badge}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(dish.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Dish details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="yadri-font text-xl font-bold text-primary-custom leading-tight">
                      {dish.name}
                    </h4>
                    <span className="text-2xl font-bold text-primary-custom whitespace-nowrap ml-3">
                      {dish.price}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                    {dish.category}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {dish.description}
                  </p>
                  
                  {/* Chef's note */}
                  <div className="bg-gradient-to-r from-primary-custom/5 to-transparent p-4 rounded-lg border-l-4 border-primary-custom/30 mt-4">
                    <div className="flex items-start gap-2">
                      <ChefHat className="w-4 h-4 text-primary-custom mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-primary-custom italic font-medium">
                        "{dish.chefNote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary-custom to-primary-custom/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-primary-custom/5 rounded-2xl p-8 border border-primary-custom/10">
            <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-3">
              Can't decide? Let our chef surprise you!
            </h4>
            <p className="text-primary-custom leading-relaxed max-w-2xl mx-auto">
              Ask your server about our daily chef's special or let us create a custom menu 
              featuring the best of both Nepali and Indian cuisines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}