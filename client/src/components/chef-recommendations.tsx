import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Star, ChefHat, Award } from "lucide-react";

export default function ChefRecommendations({ id = 'chef-recommendations' }: { id?: string }) {
  const { t } = useTranslation();
  const recommendations = [
    {
      id: 1,
      name: t('chefRecommendations.dishes.essenceOfHimalayan.name'),
      category: t('chefRecommendations.categories.nepaliSpecialty'),
      price: "39,99 €",
      description: t('chefRecommendations.dishes.essenceOfHimalayan.description'),
      badge: t('chefRecommendations.badges.mostPopular'),
      badgeColor: "bg-red-500",
      rating: 5,
      chefNote: t('chefRecommendations.dishes.essenceOfHimalayan.chefNote')
    },
    {
      id: 2,
      name: t('chefRecommendations.dishes.butterChicken.name'),
      category: t('chefRecommendations.categories.houseSpecial'),
      price: "14,50 €",
      description: t('chefRecommendations.dishes.butterChicken.description'),
      badge: t('chefRecommendations.badges.chefsChoice'),
      badgeColor: "bg-blue-500",
      rating: 5,
      chefNote: t('chefRecommendations.dishes.butterChicken.chefNote')
    },
    {
      id: 3,
      name: t('chefRecommendations.dishes.tandooriMixGrill.name'),
      category: t('chefRecommendations.categories.sizzler'),
      price: "15,95 €",
      description: t('chefRecommendations.dishes.tandooriMixGrill.description'),
      badge: t('chefRecommendations.badges.bestSeller'),
      badgeColor: "bg-green-500",
      rating: 5,
      chefNote: t('chefRecommendations.dishes.tandooriMixGrill.chefNote')
    },
    {
      id: 4,
      name: t('chefRecommendations.dishes.specialHimalayanBiryani.name'),
      category: t('chefRecommendations.categories.biryani'),
      price: "15,95 €",
      description: t('chefRecommendations.dishes.specialHimalayanBiryani.description'),
      badge: t('chefRecommendations.badges.signature'),
      badgeColor: "bg-purple-500",
      rating: 5,
      chefNote: t('chefRecommendations.dishes.specialHimalayanBiryani.chefNote')
    }
  ];

  return (
    <div id={id} className="scroll-mt-20">
      <section className="bg-gradient-to-r from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <ChefHat className="text-primary-custom w-8 h-8" />
              <h3 className="yadri-font text-4xl md:text-5xl font-bold text-primary-custom">
                {t('chefRecommendations.title')}
              </h3>
              <Award className="text-primary-custom w-8 h-8" />
            </div>
            <p className="text-lg text-primary-custom max-w-3xl mx-auto leading-relaxed">
              {t('chefRecommendations.subtitle')}
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
                {t('chefRecommendations.cta.title')}
              </h4>
              <p className="text-primary-custom leading-relaxed max-w-2xl mx-auto">
                {t('chefRecommendations.cta.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}