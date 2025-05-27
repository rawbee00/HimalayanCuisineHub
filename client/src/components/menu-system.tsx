import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type MainTab = "menu" | "drinks";
type FoodTab = "nepali" | "indian";
type DrinkTab = "beverages" | "coffeeTea" | "wine";

export default function MenuSystem() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>("menu");
  const [activeFoodTab, setActiveFoodTab] = useState<FoodTab>("nepali");
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>("beverages");

  const foodMenuData = {
    nepali: [
      {
        title: "Essence of Himalayan",
        description: "Traditional Nepali dishes crafted with authentic mountain spices and time-honored techniques.",
        items: [
          { name: "Dal Bhat", price: "$16.99" },
          { name: "Momo (Dumplings)", price: "$12.99" },
          { name: "Gundruk Soup", price: "$8.99" }
        ]
      },
      {
        title: "Mountain Specialties",
        description: "Signature dishes inspired by the flavors of the Himalayan region.",
        items: [
          { name: "Yak Curry", price: "$22.99" },
          { name: "Thukpa", price: "$14.99" },
          { name: "Sel Roti", price: "$6.99" }
        ]
      }
    ],
    indian: [
      {
        title: "Tandoor Specialties",
        description: "Fresh from our traditional clay oven, perfectly spiced and expertly prepared.",
        items: [
          { name: "Tandoori Chicken", price: "$18.99" },
          { name: "Naan Bread", price: "$4.99" },
          { name: "Seekh Kebab", price: "$16.99" }
        ]
      },
      {
        title: "Curry House Classics",
        description: "Rich, aromatic curries prepared with traditional Indian spices and techniques.",
        items: [
          { name: "Butter Chicken", price: "$19.99" },
          { name: "Palak Paneer", price: "$15.99" },
          { name: "Biryani", price: "$17.99" }
        ]
      }
    ]
  };

  const drinkMenuData = {
    beverages: [
      {
        title: "Fresh & Traditional",
        items: [
          { name: "Mango Lassi", price: "$5.99" },
          { name: "Fresh Lime Soda", price: "$4.99" },
          { name: "Himalayan Spring Water", price: "$3.99" }
        ]
      },
      {
        title: "Specialty Drinks",
        items: [
          { name: "Butter Tea", price: "$6.99" },
          { name: "Spiced Buttermilk", price: "$4.99" },
          { name: "Rose Milk", price: "$5.99" }
        ]
      }
    ],
    coffeeTea: [
      {
        title: "Hot Beverages",
        items: [
          { name: "Masala Chai", price: "$4.99" },
          { name: "Himalayan Green Tea", price: "$3.99" },
          { name: "Espresso", price: "$3.99" }
        ]
      },
      {
        title: "Specialty Coffee",
        items: [
          { name: "Cardamom Coffee", price: "$5.99" },
          { name: "Himalayan Black Coffee", price: "$4.99" },
          { name: "Ginger Tea", price: "$4.99" }
        ]
      }
    ],
    wine: [
      {
        title: "Red Wine Selection",
        items: [
          { name: "Cabernet Sauvignon", price: "$8.99" },
          { name: "Merlot", price: "$7.99" },
          { name: "Pinot Noir", price: "$9.99" }
        ]
      },
      {
        title: "White Wine & Others",
        items: [
          { name: "Chardonnay", price: "$7.99" },
          { name: "Sauvignon Blanc", price: "$8.99" },
          { name: "House Special Rose", price: "$6.99" }
        ]
      }
    ]
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="yadri-font text-4xl md:text-5xl font-bold text-primary-custom mb-4">
            Our Menu
          </h3>
          <p className="text-lg text-primary-custom max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional dishes and beverages
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
          {/* Main Menu Categories */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveMainTab("menu")}
              className={`tab-button px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                activeMainTab === "menu"
                  ? "bg-white text-primary-custom border-primary-custom active"
                  : "bg-transparent text-primary-custom border-gray-300 hover:border-primary-custom"
              }`}
            >
              Menu
            </Button>
            <Button
              onClick={() => setActiveMainTab("drinks")}
              className={`tab-button px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 ${
                activeMainTab === "drinks"
                  ? "bg-white text-primary-custom border-primary-custom active"
                  : "bg-transparent text-primary-custom border-gray-300 hover:border-primary-custom"
              }`}
            >
              Drinks
            </Button>
          </div>

          {/* Menu Tab Content */}
          <div className={`tab-content ${activeMainTab === "menu" ? "active" : ""}`}>
            {activeMainTab === "menu" && (
              <div>
                <div className="text-center mb-8">
                  <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-4">Food Menu</h4>
                  <p className="text-primary-custom">Choose from our signature cuisines</p>
                </div>
                
                {/* Food Menu Sliding Buttons */}
                <div className="flex justify-center gap-4 mb-8">
                  <Button
                    onClick={() => setActiveFoodTab("nepali")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeFoodTab === "nepali"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Himalayan/Nepali
                  </Button>
                  <Button
                    onClick={() => setActiveFoodTab("indian")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeFoodTab === "indian"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Indian
                  </Button>
                </div>

                {/* Food Content */}
                <div className="grid md:grid-cols-2 gap-6 slide-in">
                  {foodMenuData[activeFoodTab].map((section, index) => (
                    <Card key={index} className="menu-card bg-white border border-gray-200">
                      <CardContent className="p-6">
                        <h5 className="yadri-font text-xl font-bold text-primary-custom mb-3">
                          {section.title}
                        </h5>
                        <p className="text-primary-custom mb-4">{section.description}</p>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between">
                              <span className="font-medium text-primary-custom">{item.name}</span>
                              <span className="text-primary-custom font-semibold">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Drinks Tab Content */}
          <div className={`tab-content ${activeMainTab === "drinks" ? "active" : ""}`}>
            {activeMainTab === "drinks" && (
              <div>
                <div className="text-center mb-8">
                  <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-4">Beverages Menu</h4>
                  <p className="text-primary-custom">Complement your meal with our curated drink selection</p>
                </div>
                
                {/* Drinks Menu Sliding Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button
                    onClick={() => setActiveDrinkTab("beverages")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "beverages"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Beverages
                  </Button>
                  <Button
                    onClick={() => setActiveDrinkTab("coffeeTea")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "coffeeTea"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Coffee & Tea
                  </Button>
                  <Button
                    onClick={() => setActiveDrinkTab("wine")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "wine"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Wine
                  </Button>
                </div>

                {/* Drinks Content */}
                <div className="grid md:grid-cols-2 gap-6 slide-in">
                  {drinkMenuData[activeDrinkTab].map((section, index) => (
                    <Card key={index} className="menu-card bg-white border border-gray-200">
                      <CardContent className="p-6">
                        <h5 className="yadri-font text-xl font-bold text-primary-custom mb-3">
                          {section.title}
                        </h5>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between">
                              <span className="font-medium text-primary-custom">{item.name}</span>
                              <span className="text-primary-custom font-semibold">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
