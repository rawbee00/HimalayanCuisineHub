import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";

type MainTab = "menu" | "drinks" | "wine";
type FoodTab = "nepali" | "indian";
type DrinkTab = "softDrinks" | "coffeeTea" | "beer" | "spirits" | "cocktails";

export default function MenuSystem() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>("menu");
  const [activeFoodTab, setActiveFoodTab] = useState<FoodTab>("nepali");
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>("softDrinks");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const foodMenuData = {
    nepali: [
      {
        title: "Essence of Himalayan - Complete Set Menu",
        description: "A traditional 4-course journey through authentic Nepali flavors. Choose one dish from each course below for your complete dining experience.",
        items: [
          { name: "Complete Set Menu for 1 Person", price: "39,99 €" },
          { name: "How it works: Select one starter + one soup + one main + one dessert", price: "" }
        ]
      },
      {
        title: "1. Starter: Nepali Flavor",
        description: "Choose your appetizer to begin the journey",
        items: [
          { name: "Mo:Mo (Choose your filling)", price: "" },
          { name: "• Vegan: Textured soy, cabbage, Himalayan spices", price: "" },
          { name: "• Chicken: Free-range chicken with garlic & ginger", price: "" },
          { name: "• Pork: Traditional Kathmandu-style rich & gamey", price: "" },
          { name: "Aloo Sadeko (potato salad with lemon & toasted mustard)", price: "" },
          { name: "Gundruk Ko Achar (fermented leafy greens with kale)", price: "" },
          { name: "Served with tomato achar (spiced Nepali sauce)", price: "" }
        ]
      },
      {
        title: "2. Soup: Reimagined Thukpa / Sherpa's Bowl",
        description: "Choose your warming broth",
        items: [
          { name: "Vegan: Shiitake & ginger broth with rice noodles", price: "" },
          { name: "Standard: Chicken broth with vegetables & dhaniya", price: "" },
          { name: "Kwati (mixed legumes with cumin & turmeric)", price: "" }
        ]
      },
      {
        title: "3. Main Course: Thakali",
        description: "Choose your main curry dish",
        items: [
          { name: "Vegan: Soy in jimbu & tomato sauce", price: "" },
          { name: "Chicken: Free-range with garam masala", price: "" },
          { name: "Lamb: Slow-cooked with fennel & bay leaves", price: "" },
          { name: "Served with Nepali black lentil dal & jasmine rice", price: "" }
        ]
      },
      {
        title: "4. Dessert: Sweet Ending",
        description: "Traditional Nepali sweet to complete your meal",
        items: [
          { name: "Sikarni (cardamom-spiced hung yogurt with nuts)", price: "" },
          { name: "Sel Roti with honey (traditional ring-shaped bread)", price: "" },
          { name: "Kheer (rice pudding with almonds & raisins)", price: "" }
        ]
      }
    ],
    indian: [
      {
        title: "Starters",
        description: "Traditional appetizers to awaken your palate",
        items: [
          { name: "Tandoori Chicken", price: "12,50 €", description: "Half chicken marinated in yogurt and spices, cooked in tandoor" },
          { name: "Chicken Tikka", price: "11,50 €", description: "Boneless chicken pieces marinated and grilled to perfection" },
          { name: "Seekh Kebab", price: "10,50 €", description: "Spiced minced lamb skewers cooked in tandoor" },
          { name: "Samosa (2 pieces)", price: "6,50 €", description: "Crispy pastries filled with spiced potatoes and peas" },
          { name: "Onion Bhaji", price: "7,50 €", description: "Deep-fried onion fritters with chickpea flour" },
          { name: "Paneer Tikka", price: "9,50 €", description: "Marinated cottage cheese cubes grilled with peppers" }
        ]
      },
      {
        title: "Curry Sauces & Bases",
        description: "Rich, aromatic sauces that define Indian cuisine",
        items: [
          { name: "Butter Chicken", price: "15,50 €", description: "Creamy tomato-based curry with tender chicken pieces" },
          { name: "Chicken Tikka Masala", price: "14,50 €", description: "Grilled chicken in spiced tomato and cream sauce" },
          { name: "Lamb Rogan Josh", price: "16,50 €", description: "Traditional Kashmiri curry with aromatic spices" },
          { name: "Beef Madras", price: "15,50 €", description: "South Indian spicy curry with coconut and curry leaves" },
          { name: "Chicken Vindaloo", price: "14,50 €", description: "Goan-style fiery curry with vinegar and red chilies" },
          { name: "Palak Paneer", price: "12,50 €", description: "Cottage cheese in creamy spinach gravy" },
          { name: "Dal Makhani", price: "11,50 €", description: "Slow-cooked black lentils in butter and cream" }
        ]
      },
      {
        title: "Sizzlers & Tandoor Specials",
        description: "Dramatic presentations with authentic tandoor flavors",
        items: [
          { name: "Mixed Tandoori Platter", price: "22,50 €", description: "Chicken tikka, seekh kebab, tandoori chicken, and lamb chops" },
          { name: "Tandoori Fish", price: "18,50 €", description: "Fresh fish marinated in spices and grilled in tandoor" },
          { name: "Lamb Chops", price: "19,50 €", description: "Tender lamb chops marinated in yogurt and herbs" },
          { name: "Chicken Sizzler", price: "16,50 €", description: "Grilled chicken with sautéed vegetables on hot plate" },
          { name: "Prawn Koliwada", price: "17,50 €", description: "Spiced prawns served sizzling with onions and peppers" }
        ]
      },
      {
        title: "House Specials",
        description: "Chef's signature dishes and regional specialties",
        items: [
          { name: "Goan Fish Curry", price: "17,50 €", description: "Coconut-based curry with fresh fish and kokum" },
          { name: "Hyderabadi Biryani", price: "16,50 €", description: "Aromatic basmati rice layered with spiced meat" },
          { name: "Kerala Chicken Curry", price: "15,50 €", description: "Coconut milk curry with curry leaves and mustard seeds" },
          { name: "Punjabi Chole", price: "12,50 €", description: "Spiced chickpeas in thick, tangy gravy" },
          { name: "Rajasthani Laal Maas", price: "18,50 €", description: "Fiery red mutton curry from Rajasthan" }
        ]
      },
      {
        title: "Sides & Accompaniments",
        description: "Perfect complements to your main course",
        items: [
          { name: "Raita", price: "4,50 €", description: "Cooling yogurt with cucumber and mint" },
          { name: "Papadum (4 pieces)", price: "3,50 €", description: "Crispy lentil wafers with chutneys" },
          { name: "Mixed Pickle", price: "3,50 €", description: "Assorted Indian pickles" },
          { name: "Mint Chutney", price: "3,00 €", description: "Fresh mint and coriander dip" },
          { name: "Tamarind Chutney", price: "3,00 €", description: "Sweet and tangy tamarind sauce" }
        ]
      },
      {
        title: "Biryani & Rice",
        description: "Fragrant basmati rice preparations",
        items: [
          { name: "Chicken Biryani", price: "14,50 €", description: "Aromatic rice with spiced chicken and saffron" },
          { name: "Lamb Biryani", price: "16,50 €", description: "Tender lamb layered with fragrant basmati rice" },
          { name: "Vegetable Biryani", price: "12,50 €", description: "Mixed vegetables with aromatic rice and spices" },
          { name: "Saffron Rice", price: "5,50 €", description: "Basmati rice flavored with saffron" },
          { name: "Jeera Rice", price: "4,50 €", description: "Cumin-flavored basmati rice" },
          { name: "Coconut Rice", price: "5,50 €", description: "South Indian style coconut-flavored rice" }
        ]
      },
      {
        title: "Bread & Tandoor Bakes",
        description: "Freshly baked breads from our tandoor oven",
        items: [
          { name: "Naan", price: "3,50 €", description: "Classic leavened bread baked in tandoor" },
          { name: "Garlic Naan", price: "4,50 €", description: "Naan topped with fresh garlic and herbs" },
          { name: "Cheese Naan", price: "5,50 €", description: "Naan stuffed with melted cheese" },
          { name: "Peshwari Naan", price: "5,50 €", description: "Sweet naan with coconut, raisins, and nuts" },
          { name: "Roti", price: "2,50 €", description: "Whole wheat flatbread" },
          { name: "Paratha", price: "4,50 €", description: "Layered, buttered flatbread" },
          { name: "Kulcha", price: "4,50 €", description: "Leavened bread stuffed with onions or potatoes" }
        ]
      }
    ]
  };

  const drinksMenuData = {
    softDrinks: [
      {
        title: "Refreshing Beverages",
        description: "Cool and refreshing non-alcoholic drinks",
        items: [
          { name: "Coca Cola", price: "3,50 €" },
          { name: "Sprite", price: "3,50 €" },
          { name: "Orange Juice", price: "4,50 €" },
          { name: "Apple Juice", price: "4,50 €" },
          { name: "Mango Lassi", price: "5,50 €" },
          { name: "Sweet Lassi", price: "4,50 €" },
          { name: "Sparkling Water", price: "3,00 €" },
          { name: "Still Water", price: "2,50 €" }
        ]
      }
    ],
    coffeeTea: [
      {
        title: "Hot Beverages",
        description: "Warming drinks and traditional teas",
        items: [
          { name: "Masala Chai", price: "4,50 €" },
          { name: "Green Tea", price: "3,50 €" },
          { name: "Black Tea", price: "3,00 €" },
          { name: "Coffee", price: "3,50 €" },
          { name: "Cappuccino", price: "4,50 €" },
          { name: "Espresso", price: "3,00 €" },
          { name: "Hot Chocolate", price: "4,50 €" }
        ]
      }
    ],
    beer: [
      {
        title: "Beer Selection",
        description: "Local and international beers",
        items: [
          { name: "Kingfisher", price: "4,50 €" },
          { name: "Heineken", price: "4,50 €" },
          { name: "Corona", price: "5,00 €" },
          { name: "Local Draft", price: "4,00 €" }
        ]
      }
    ],
    spirits: [
      {
        title: "Premium Spirits",
        description: "Fine spirits and liqueurs",
        items: [
          { name: "Whiskey", price: "6,50 €" },
          { name: "Vodka", price: "5,50 €" },
          { name: "Gin", price: "6,00 €" },
          { name: "Rum", price: "5,50 €" }
        ]
      }
    ],
    cocktails: [
      {
        title: "Signature Cocktails",
        description: "Crafted cocktails with unique flavors",
        items: [
          { name: "Himalayan Sunset", price: "8,50 €" },
          { name: "Spice Route", price: "9,00 €" },
          { name: "Mango Tango", price: "8,50 €" },
          { name: "Classic Mojito", price: "7,50 €" }
        ]
      }
    ]
  };

  const wineMenuData = [
    {
      title: "White Wines",
      description: "Crisp and elegant white wines",
      items: [
        { name: "Blason Esquide White", price: "Glass: 6,90 € | Bottle: 20,00 €", description: "Region: Rioja | Grapes: Viura | Fresh and fruity with citrus notes" },
        { name: "Rías Baixas Albariño", price: "22,00 €", description: "Region: Galicia | Grape: Albariño | Mineral and saline with stone fruit aromas" },
        { name: "Rueda Verdejo", price: "18,50 €", description: "Region: Castilla y León | Grape: Verdejo | Herbaceous with tropical fruit hints" }
      ]
    },
    {
      title: "Red Wines",
      description: "Rich and complex red wines",
      items: [
        { name: "Lagarto Tinto", price: "Glass: 6,90 € | Bottle: 20,00 €", description: "Region: Castilla y León | Grapes: Tempranillo, Mencía | Deep red with violet rims" },
        { name: "Sembro 2019", price: "24,00 €", description: "Region: Ribera del Duero | Grape: Tempranillo | Deep red with blackberry aromas" },
        { name: "Acappele Crianza 2019", price: "28,00 €", description: "Region: Ribera del Duero | Grape: Tempranillo | Intense cherry with garnet edge" }
      ]
    },
    {
      title: "Rosé & Sparkling Wines",
      description: "Light rosés and celebratory sparkling wines",
      items: [
        { name: "Lagarto Rosado", price: "Glass: 6,90 € | Bottle: 20,00 €", description: "Region: Castilla y León | Grape: Tempranillo | Pale pink with strawberry aromas" },
        { name: "Le Couchon Bubblesque Prosecco", price: "26,00 €", description: "Region: Veneto, Italy | Light straw yellow with fine bubbles" },
        { name: "Moët & Chandon", price: "52,00 €", description: "Origin: France | Type: Champagne | Classic and refined with persistent bubbles" }
      ]
    },
    {
      title: "Sangrias",
      description: "Traditional Spanish sangrias - perfect for sharing",
      items: [
        { name: "Red Sangria", price: "Glass: 8,00 € | 1L: 14,00 €", description: "Traditional red wine sangria with fresh fruits" },
        { name: "White Sangria", price: "Glass: 8,00 € | 1L: 14,00 €", description: "Refreshing white wine sangria with citrus fruits" },
        { name: "Cava Sangria", price: "Glass: 10,00 € | 1L: 16,00 €", description: "Sparkling sangria made with premium cava" }
      ]
    }
  ];

  return (
    <section className="menu-section bg-white py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hamburger Menu Button - Top Right */}
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-primary-custom hover:bg-primary-custom/90 text-white p-3 rounded-lg shadow-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Hamburger Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
              <div className="p-6 pt-20">
                <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-6">Menu Sections</h4>
                <div className="space-y-4">
                  <Button
                    onClick={() => {
                      setActiveMainTab("menu");
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const menuSection = document.querySelector('.menu-section');
                        if (menuSection) {
                          menuSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className={`w-full text-left justify-start h-12 text-lg ${
                      activeMainTab === "menu"
                        ? "bg-gradient-to-r from-primary-custom to-blue-600 text-white"
                        : "bg-gray-100 text-primary-custom hover:bg-gray-200"
                    }`}
                  >
                    Food Menu
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveMainTab("drinks");
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const menuSection = document.querySelector('.menu-section');
                        if (menuSection) {
                          menuSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className={`w-full text-left justify-start h-12 text-lg ${
                      activeMainTab === "drinks"
                        ? "bg-gradient-to-r from-primary-custom to-blue-600 text-white"
                        : "bg-gray-100 text-primary-custom hover:bg-gray-200"
                    }`}
                  >
                    Drinks
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveMainTab("wine");
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const menuSection = document.querySelector('.menu-section');
                        if (menuSection) {
                          menuSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className={`w-full text-left justify-start h-12 text-lg ${
                      activeMainTab === "wine"
                        ? "bg-gradient-to-r from-primary-custom to-blue-600 text-white"
                        : "bg-gray-100 text-primary-custom hover:bg-gray-200"
                    }`}
                  >
                    Wine
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <h3 className="yadri-font text-4xl md:text-5xl font-bold text-primary-custom mb-4">
            Our Menu
          </h3>
          <p className="text-lg text-primary-custom max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional dishes and beverages
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8">
          {/* Food Menu Content */}
          {activeMainTab === "menu" && (
            <div>
              <div className="text-center mb-8">
                <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-4">Food Menu</h4>
                <p className="text-primary-custom">Choose from our signature cuisines</p>
              </div>
              
              {/* Food Menu Sliding Buttons */}
              <div className="flex justify-center gap-6 mb-8">
                <Button
                  onClick={() => setActiveFoodTab("nepali")}
                  className={`slide-button px-10 py-3 font-medium ${
                    activeFoodTab === "nepali" ? "active" : ""
                  }`}
                >
                  Himalayan/Nepali
                </Button>
                <Button
                  onClick={() => setActiveFoodTab("indian")}
                  className={`slide-button px-10 py-3 font-medium ${
                    activeFoodTab === "indian" ? "active" : ""
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
                          <div key={itemIndex} className="flex flex-col gap-2">
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
                                  item.price.startsWith('+') 
                                    ? 'text-sm text-orange-600' 
                                    : 'text-lg'
                                }`}>
                                  {item.price}
                                </span>
                              )}
                            </div>
                            {'description' in item && item.description && (
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
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

          {/* Drinks Tab Content */}
          {activeMainTab === "drinks" && (
            <div>
              <div className="text-center mb-8">
                <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-4">Beverages Menu</h4>
                <p className="text-primary-custom">Complement your meal with our curated drink selection</p>
              </div>
              
              {/* Drinks Menu Sliding Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Button
                  onClick={() => setActiveDrinkTab("softDrinks")}
                  className={`slide-button px-6 py-3 font-medium text-sm ${
                    activeDrinkTab === "softDrinks" ? "active" : ""
                  }`}
                >
                  Soft Drinks
                </Button>
                <Button
                  onClick={() => setActiveDrinkTab("coffeeTea")}
                  className={`slide-button px-6 py-3 font-medium text-sm ${
                    activeDrinkTab === "coffeeTea" ? "active" : ""
                  }`}
                >
                  Coffee & Tea
                </Button>
                <Button
                  onClick={() => setActiveDrinkTab("beer")}
                  className={`slide-button px-6 py-3 font-medium text-sm ${
                    activeDrinkTab === "beer" ? "active" : ""
                  }`}
                >
                  Beer
                </Button>
                <Button
                  onClick={() => setActiveDrinkTab("spirits")}
                  className={`slide-button px-6 py-3 font-medium text-sm ${
                    activeDrinkTab === "spirits" ? "active" : ""
                  }`}
                >
                  Spirits
                </Button>
                <Button
                  onClick={() => setActiveDrinkTab("cocktails")}
                  className={`slide-button px-6 py-3 font-medium text-sm ${
                    activeDrinkTab === "cocktails" ? "active" : ""
                  }`}
                >
                  Cocktails
                </Button>
              </div>

              {/* Drinks Content */}
              <div className="grid lg:grid-cols-2 gap-6 slide-in">
                {drinksMenuData[activeDrinkTab].map((section, index) => (
                  <Card key={index} className="menu-card bg-white border border-gray-200">
                    <CardContent className="p-6">
                      <h5 className="yadri-font text-xl font-bold text-primary-custom mb-3">
                        {section.title}
                      </h5>
                      <p className="text-primary-custom mb-4 text-sm">{section.description}</p>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-center">
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

          {/* Wine Tab Content */}
          {activeMainTab === "wine" && (
            <div>
              <div className="text-center mb-8">
                <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-4">Wine Selection</h4>
                <p className="text-primary-custom">Curated wines to enhance your dining experience</p>
              </div>
              
              {/* Wine Content */}
              <div className="grid lg:grid-cols-1 gap-6 slide-in">
                {wineMenuData.map((section, index) => (
                  <Card key={index} className="menu-card bg-white border border-gray-200">
                    <CardContent className="p-6">
                      <h5 className="yadri-font text-xl font-bold text-primary-custom mb-3">
                        {section.title}
                      </h5>
                      <p className="text-primary-custom mb-4 text-sm">{section.description}</p>
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-b border-gray-100 pb-3 last:border-0">
                            <div className="flex justify-between items-start mb-1">
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
    </section>
  );
}