import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type MainTab = "menu" | "drinks";
type FoodTab = "nepali" | "indian";
type DrinkTab = "softDrinks" | "coffeeTea" | "beer" | "spirits" | "cocktails";

export default function MenuSystem() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>("menu");
  const [activeFoodTab, setActiveFoodTab] = useState<FoodTab>("nepali");
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>("softDrinks");

  const foodMenuData = {
    nepali: [
      {
        title: "Essence of Himalayan - Complete Set Menu",
        description: "A traditional 4-course journey through authentic Nepali flavors, featuring time-honored recipes from the mountains.",
        items: [
          { name: "Complete Set Menu for 1 Person", price: "39,99 €" }
        ]
      },
      {
        title: "1. Starter: Nepali Flavor",
        description: "Begin your culinary journey with traditional appetizers",
        items: [
          { name: "Mo:Mo (Choose your filling)", price: "Included" },
          { name: "• Vegan: Textured soy, cabbage, Himalayan spices", price: "" },
          { name: "• Chicken: Free-range chicken with garlic & ginger", price: "" },
          { name: "• Pork: Traditional Kathmandu-style rich & gamey", price: "" },
          { name: "Aloo Sadeko (potato salad with lemon & toasted mustard)", price: "Included" },
          { name: "Gundruk Ko Achar (fermented leafy greens with kale)", price: "Included" },
          { name: "Served with tomato achar (spiced Nepali sauce)", price: "Included" }
        ]
      },
      {
        title: "2. Soup: Reimagined Thukpa / Sherpa's Bowl",
        description: "Warming broths inspired by mountain traditions",
        items: [
          { name: "Vegan: Shiitake & ginger broth with rice noodles", price: "Included" },
          { name: "Standard: Chicken broth with vegetables & dhaniya", price: "Included" },
          { name: "Kwati (mixed legumes with cumin & turmeric)", price: "Included" }
        ]
      },
      {
        title: "3. Main Course: Thakali",
        description: "Hearty mountain curries prepared with traditional techniques",
        items: [
          { name: "Vegan: Soy in jimbu & tomato sauce", price: "Included" },
          { name: "Chicken Curry (Bone-in with fenugreek seeds)", price: "Included" },
          { name: "Kahsi ko Masu / Goat Curry", price: "Included" },
          { name: "(Bone-in slow-cooked with cardamom & black pepper)", price: "" }
        ]
      },
      {
        title: "4. Dessert: Yomari & Dhau",
        description: "Traditional sweets to complete your mountain feast",
        items: [
          { name: "Dhau (coconut yogurt with cardamom)", price: "Included" },
          { name: "Yomari (coconut & nut molasses dumpling)", price: "Included" },
          { name: "Optional: Kheer (Nepali-style rice pudding)", price: "Available" }
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
    softDrinks: [
      {
        title: "Soft Drinks",
        items: [
          { name: "Coca-Cola", price: "2,50 €" },
          { name: "Coca-Cola Zero", price: "2,50 €" },
          { name: "Fanta Orange", price: "2,50 €" },
          { name: "Fanta Lemon", price: "2,50 €" },
          { name: "Sprite", price: "2,50 €" },
          { name: "Tonic (Normal)", price: "2,50 €" },
          { name: "Tonic (Zero)", price: "2,50 €" },
          { name: "Tonic (Red)", price: "2,50 €" },
          { name: "Ice Tea Mango-Pineapple", price: "2,50 €" },
          { name: "Ice Tea Lemon", price: "2,50 €" }
        ]
      },
      {
        title: "Juices & Specialties",
        items: [
          { name: "Appletizer", price: "3,00 €" },
          { name: "Mango Lassi", price: "5,95 €" },
          { name: "Salted Lassi", price: "5,95 €" },
          { name: "Small Water", price: "1,95 €" },
          { name: "Sparkling Water", price: "2,00 €" },
          { name: "Orange Juice", price: "2,50 €" },
          { name: "Apple Juice", price: "2,50 €" },
          { name: "Pineapple Juice", price: "2,50 €" }
        ]
      }
    ],
    coffeeTea: [
      {
        title: "Coffee",
        items: [
          { name: "Espresso", price: "1,00 €" },
          { name: "Cortado Natural", price: "1,20 €" },
          { name: "Leche y Leche", price: "1,50 €" },
          { name: "Americano", price: "1,80 €" },
          { name: "White Coffee", price: "2,50 €" },
          { name: "Capuchino", price: "2,75 €" },
          { name: "Barraquito", price: "2,95 €" },
          { name: "Carajillo", price: "2,50 €" }
        ]
      },
      {
        title: "Special Coffee & Tea",
        items: [
          { name: "Irish Coffee", price: "4,00 €" },
          { name: "Calypso", price: "3,20 €" },
          { name: "Baileys Coffee", price: "3,50 €" },
          { name: "Tea (Infusions)", price: "2,00 €" },
          { name: "Indian Tea", price: "3,50 €" }
        ]
      }
    ],
    beer: [
      {
        title: "Local & International Beer",
        items: [
          { name: "Dorada Large", price: "2,80 €" },
          { name: "Dorada Small", price: "1,95 €" },
          { name: "Stella Artois Large", price: "2,80 €" },
          { name: "Stella Artois Small", price: "1,95 €" },
          { name: "Shandy Large", price: "3,00 €" },
          { name: "Shandy Small", price: "2,95 €" },
          { name: "Dorada Special Bot.", price: "2,80 €" },
          { name: "Dorada Sin Bot.", price: "2,50 €" },
          { name: "Dorada Limon Sin Bot.", price: "2,00 €" }
        ]
      },
      {
        title: "Premium & Specialty Beer",
        items: [
          { name: "Corona", price: "3,00 €" },
          { name: "Kopperberg Strawberry", price: "4,50 €" },
          { name: "Leffe Blond", price: "4,00 €" },
          { name: "Cobra (Indian)", price: "4,50 €" },
          { name: "King Fisher (Indian)", price: "4,50 €" },
          { name: "Gorkha (Nepali)", price: "5,95 €" }
        ]
      }
    ],
    spirits: [
      {
        title: "Whiskey & Brandy",
        items: [
          { name: "Famous Grouse", price: "3,50 €" },
          { name: "J & B", price: "4,50 €" },
          { name: "Red Label", price: "4,50 €" },
          { name: "Black Label", price: "7,25 €" },
          { name: "Chardú 12 Years", price: "6,25 €" },
          { name: "Jack Daniel", price: "5,20 €" },
          { name: "108 Brandy", price: "4,50 €" },
          { name: "Carlos I", price: "6,95 €" },
          { name: "Veterano", price: "4,50 €" },
          { name: "Courvoisier", price: "7,50 €" }
        ]
      },
      {
        title: "Rum & Vodka",
        items: [
          { name: "Khukuri XXX", price: "7,90 €" },
          { name: "Khukuri Spiced", price: "8,90 €" },
          { name: "Khukuri Coronation", price: "17,95 €" },
          { name: "Arehuchas", price: "3,90 €" },
          { name: "Havana", price: "5,95 €" },
          { name: "Malibu", price: "3,50 €" },
          { name: "Bacardi", price: "4,50 €" },
          { name: "Captain Morgan (Dark Rum)", price: "4,95 €" },
          { name: "8848 (Nepal) Vodka", price: "7,20 €" },
          { name: "Absoluto", price: "4,50 €" }
        ]
      },
      {
        title: "Gin & Others",
        items: [
          { name: "Gordon's", price: "4,20 €" },
          { name: "Gordon's Pink", price: "4,50 €" },
          { name: "Tanqueray", price: "4,95 €" },
          { name: "Bombay", price: "4,95 €" },
          { name: "Hendrick's", price: "4,95 €" },
          { name: "Aperol", price: "4,50 €" },
          { name: "Campari", price: "4,50 €" },
          { name: "Martini (Bianco/Rosso/Dry)", price: "4,50 €" },
          { name: "Tia Maria", price: "3,50 €" },
          { name: "Tequila", price: "3,50 €" }
        ]
      }
    ],
    cocktails: [
      {
        title: "Classic Cocktails",
        items: [
          { name: "Aperol Spritz", price: "8,95 €", description: "Prosecco - aperol - soda" },
          { name: "Blue Hawaii", price: "8,95 €", description: "White rum - blue curacao - liquid sugar - lime juice - pineapple - coconut juice" },
          { name: "Amaretto Sour", price: "8,95 €", description: "Disaronno - lemon juice - liquid sugar" },
          { name: "Espresso Martini", price: "8,95 €", description: "Vodka - coffee - coffee liquor - liquid sugar" },
          { name: "Pornstar Martini", price: "8,95 €", description: "Vanilla vodka - passoa - lemon juice - vanilla syrup - passion fruit" }
        ]
      },
      {
        title: "Tropical & Frozen",
        items: [
          { name: "Mojito", price: "8,95 €", description: "White rum - brown sugar - lime - mint (strawberry, coconut, mango, passion fruit)" },
          { name: "Piña Colada", price: "8,95 €", description: "White rum - pineapple juice - lemon juice - coconut" },
          { name: "Daiquiri Frozen", price: "8,95 €", description: "White rum - triple sec - lime juice - sugar syrup (strawberry - coconut - mango - passion fruit)" }
        ]
      },
      {
        title: "Non-Alcoholic Cocktails",
        items: [
          { name: "Virgin Mojito", price: "6,00 €", description: "Lemon soda - lime - sugar syrup - mint (strawberry, coconut, mango, passion fruit)" },
          { name: "Virgin Colada", price: "6,00 €", description: "Pineapple juice - coconut" },
          { name: "Virgin Hawaii", price: "6,00 €", description: "Curacao - lime - pineapple - coconut" },
          { name: "Real Lemonade", price: "6,00 €", description: "Fresh squeezed lemonade" }
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
            >Food Menu</Button>
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
                <div className="grid lg:grid-cols-2 gap-6 slide-in">
                  {foodMenuData[activeFoodTab].map((section, index) => (
                    <Card key={index} className="menu-card bg-white border border-gray-200">
                      <CardContent className="p-6">
                        <h5 className="yadri-font text-xl font-bold text-primary-custom mb-3 leading-relaxed">
                          {section.title}
                        </h5>
                        <p className="text-primary-custom mb-5 leading-relaxed text-sm">{section.description}</p>
                        <div className="space-y-4">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex flex-col gap-1">
                              <div className="flex justify-between items-start">
                                <span className={`text-primary-custom leading-relaxed ${
                                  item.name.startsWith('•') 
                                    ? 'text-sm pl-4 font-normal italic text-gray-600' 
                                    : item.name.startsWith('(') 
                                      ? 'text-sm font-normal italic text-gray-600 pl-4'
                                      : 'font-medium'
                                }`}>
                                  {item.name}
                                </span>
                                {item.price && (
                                  <span className={`text-primary-custom font-semibold ${
                                    item.price === 'Included' || item.price === 'Available' 
                                      ? 'text-sm text-green-600' 
                                      : 'text-lg'
                                  }`}>
                                    {item.price}
                                  </span>
                                )}
                              </div>
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
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <Button
                    onClick={() => setActiveDrinkTab("softDrinks")}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "softDrinks"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Soft Drinks
                  </Button>
                  <Button
                    onClick={() => setActiveDrinkTab("coffeeTea")}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "coffeeTea"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Coffee & Tea
                  </Button>
                  <Button
                    onClick={() => setActiveDrinkTab("beer")}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "beer"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Beer
                  </Button>
                  <Button
                    onClick={() => setActiveDrinkTab("spirits")}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "spirits"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Spirits
                  </Button>
                  <Button
                    onClick={() => setActiveDrinkTab("cocktails")}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeDrinkTab === "cocktails"
                        ? "bg-primary-custom text-white"
                        : "bg-transparent text-primary-custom border border-primary-custom hover:bg-primary-custom hover:text-white"
                    }`}
                  >
                    Cocktails
                  </Button>
                </div>

                {/* Drinks Content */}
                <div className="grid md:grid-cols-2 gap-6 slide-in stagger-animation">
                  {drinkMenuData[activeDrinkTab].map((section, index) => (
                    <Card key={index} className="menu-card bg-white border border-gray-200">
                      <CardContent className="p-6">
                        <h5 className="yadri-font text-xl font-bold text-primary-custom mb-3">
                          {section.title}
                        </h5>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex flex-col gap-1">
                              <div className="flex justify-between items-start">
                                <span className="font-medium text-primary-custom">{item.name}</span>
                                <span className="text-primary-custom font-semibold">{item.price}</span>
                              </div>
                              {(item as any).description && (
                                <p className="text-sm text-gray-600 italic">
                                  {(item as any).description}
                                </p>
                              )}
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
