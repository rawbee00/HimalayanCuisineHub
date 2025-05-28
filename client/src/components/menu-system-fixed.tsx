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
        title: "Appetizers",
        description: "Traditional appetizers to start your meal",
        items: [
          { name: "Papadum", price: "0,90 €", description: "Thin Indian crispy flatbread" },
          { name: "Spicy Papadum", price: "1,00 €", description: "Thin Indian crispy spicy flatbread" },
          { name: "Pickle Tray", price: "3,50 €", description: "Mango chutney, Mint sauce & Chopped Onions" },
          { name: "Tamarind Sauce", price: "0,90 €", description: "Bittersweet sauce from the fruit of tamarind" },
          { name: "Spicy Garlic Sauce", price: "0,90 €", description: "Sauce made with fresh garlic & spicy mayonnaise" },
          { name: "Mango Chutney", price: "0,90 €", description: "Mango flavour sweet sauce" },
          { name: "Mint Sauce", price: "0,90 €", description: "Sauce made with fresh mint & yogurt" },
          { name: "Spicy Onions", price: "0,90 €", description: "Chopped onions with cucumber & capsicum" },
          { name: "Mixed Salad", price: "5,50 €", description: "Fresh mixed vegetables" },
          { name: "Plain Yoghurt", price: "2,90 €", description: "Creamy natural yogurt" }
        ]
      },
      {
        title: "Starters",
        description: "Authentic Indian starters",
        items: [
          { name: "Onion Bhaji", price: "4,25 €", description: "Onions balls bound together with lightly spiced & fragrant chickpea flour batter" },
          { name: "Vegetable Samosa", price: "4,50 €", description: "Triangular pastry filled with potatoes & peas, golden fried" },
          { name: "Garlic Mushroom", price: "4,50 €", description: "Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice" },
          { name: "Meat Samosa", price: "4,75 €", description: "Triangular pastry filled with potatoes, peas & meat, golden fried" },
          { name: "Vegetable Pakora", price: "4,50 €", description: "Sliced vegetables wrapped in batter & deep fried" },
          { name: "Chicken Pakora", price: "4,25 €", description: "Marinated chicken pieces in a batter, golden fried" },
          { name: "Chicken Puri", price: "5,50 €", description: "Chicken cooked & served on deep fried round bread" },
          { name: "King Prawn Puri", price: "5,95 €", description: "King prawn cooked with ginger - garlic & served on deep fried round bread" },
          { name: "Garlic Chicken", price: "5,95 €", description: "Chicken cooked with garlic & limon" },
          { name: "Chicken Lollipop", price: "5,50 €", description: "Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix" },
          { name: "Hot Chicken Wings", price: "5,50 €", description: "Spicy, juicy wings coated in a fiery marinade that packs a punch" }
        ]
      },
      {
        title: "Curry Sauces",
        description: "Choose your protein and we'll prepare it in your favorite traditional sauce",
        items: [
          { name: "Masala", price: "", description: "Masala curry is one of the most popular dish with a mild flavour but rich in cream & almond" },
          { name: "Korma", price: "", description: "Mild curry consisting of cream grated coconut" },
          { name: "Balti", price: "", description: "Balti sauce is based on green peppers, garlic & onions with turmeric & garam masala among other spices" },
          { name: "Bhuna", price: "", description: "Made with chopped onions, roasted red and green peppers, coriander seeds, ginger garlic coriander & fenugreek leaves" },
          { name: "Curry", price: "", description: "Classic curry with fresh tomatoes & red onions in smooth sauce decorated with coriander" },
          { name: "Dhansak", price: "", description: "Combines elements of Persian & Gujarati cuisine. Made with lentils, ginger, garlic, coconut, pineapple & fresh coriander" },
          { name: "Dopiaza", price: "", description: "Dopiaza curry sauce is based on onions family (Brown onions, chives & spring onions)" },
          { name: "Jalfrezi", price: "", description: "Involves bell peppers, ginger, garlic, cumin, coriander & spices in a thick sauce with a touch of cream" },
          { name: "Karahi", price: "", description: "Prepared in special cast iron skillet, this curry is turned brown with chopped tomato, onions, coriander, ginger & garlic" },
          { name: "Pathia", price: "", description: "Pathia is an ancient parsi cuisine from persia. It's bittersweet flavoured with a touch of coconut" },
          { name: "Rogan Josh", price: "", description: "A kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander" },
          { name: "Saag", price: "", description: "Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream" },
          { name: "Manchuria", price: "", description: "Fresh mint in semidry sauce with tomatoes, lemon juice & garam masala" },
          { name: "Jai Puri", price: "", description: "Semi dense curry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander" }
        ]
      },
      {
        title: "Curries",
        description: "Dish from the cuisine of the Indian subcontinent which combines the use of varieties of spices, vegetables, herbs like ginger, garlic, green chillies, turmeric, mustard seed, cumin seeds, coriander etc. Each dish has the combination of ingredients that makes it unique.",
        items: [
          { name: "Chicken", price: "9,95 €", description: "Traditional chicken curry" },
          { name: "Chicken Tikka", price: "10,95 €", description: "Grilled chicken pieces in curry sauce" },
          { name: "Lamb", price: "11,95 €", description: "Tender lamb curry" },
          { name: "Lamb Tikka", price: "12,95 €", description: "Grilled lamb pieces in curry sauce" },
          { name: "King Prawn", price: "13,95 €", description: "King prawns in curry sauce" },
          { name: "Mix Vegetables", price: "10,95 €", description: "Mixed vegetables curry" },
          { name: "Soya Meat", price: "12,95 €", description: "Soya meat in curry sauce" },
          { name: "Paneer", price: "12,95 €", description: "Cottage cheese curry" },
          { name: "Special Himalayan", price: "15,95 €", description: "Chef's special curry" }
        ]
      },
      {
        title: "Tandoori Specialties",
        description: "Marinated and cooked in our traditional tandoor oven",
        items: [
          { name: "Chicken Tikka", price: "4,50 €", description: "Boneless chicken pieces marinated spicy yogurt cooked in a tandoor" },
          { name: "Tandoor Chicken", price: "5,50 €", description: "Chicken leg piece marinated in a spicy yogurt cooked in tandoor" },
          { name: "Pudina Tikka", price: "5,50 €", description: "Boneless chicken pieces marinated with mint, ginger & cooked in tandoor" },
          { name: "Lamb Tikka", price: "6,50 €", description: "Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor" },
          { name: "Barra Kebab", price: "5,50 €", description: "Succulent lamb chop marinated in a yogurt & spices, flame-grilled for a smoky bite" },
          { name: "Sheek Kebab", price: "5,50 €", description: "Minced lamb marinated with spiced, ginger, coriander & cooked on skewers in a tandoor" },
          { name: "Garlic King Prawn", price: "5,90 €", description: "Grilled king prawn cooked with garlic & limon" },
          { name: "Special Himalayan", price: "15,59 €", description: "Includes: Onion Bhaji, veg pakora, barra kebab, chicken tikka, pudina tikka, chicken pakora & sheekh kebab" }
        ]
      },
      {
        title: "Sizzlers",
        description: "Served on hot sizzling plates with onions and peppers",
        items: [
          { name: "Paneer Shashlik", price: "11,50 €", description: "Chunks of paneer marinated in spices, cooked with onions & bell peppers" },
          { name: "Chicken Tikka Sizzler", price: "11,50 €", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
          { name: "Chicken Tikka Shashlik", price: "13,50 €", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, limon & onions" },
          { name: "Lamb Tikka Sizzler", price: "12,95 €", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
          { name: "Lamb Tikka Shashlik", price: "14,50 €", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, limon & onions" },
          { name: "Tandoori Chicken Sizzler", price: "11,50 €", description: "Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions" },
          { name: "King Prawn Sizzler", price: "13,95 €", description: "King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions" },
          { name: "Tandoori Mix Grill", price: "15,95 €", description: "Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns" }
        ]
      },
      {
        title: "House Specials",
        description: "Chef's signature dishes and unique specialties",
        items: [
          { name: "Mango Chicken", price: "11,95 €", description: "Boneless chicken cooked with mango pulp in traditional curry sauce" },
          { name: "Methi Gosht", price: "12,95 €", description: "Tender pieces of lamb cooked with fenugreek, leaves, herbs & spices" },
          { name: "Chilli Chicken", price: "14,50 €", description: "Cooked with onions, tomatoes, cumin seeds" },
          { name: "Butter Chicken", price: "14,50 €", description: "Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek" },
          { name: "Chilli Paneer", price: "14,50 €", description: "Soft paneer cubes in a vibrant spicy sauce" },
          { name: "Keema Mutter Masala", price: "14,50 €", description: "Minced meat & peas in a flavorful gravy" },
          { name: "Hakka Noodles", price: "13,50 €", description: "Stir - fried noodles with crisp vegetables" },
          { name: "Malai Kofta", price: "14,50 €", description: "Cottage cheese dumplings in a creamy tomato gravy" },
          { name: "Butter Lamb", price: "15,50 €", description: "Slow - cooked lamb in a silky butter sauce" },
          { name: "Chilli King Prawn", price: "15,50 €", description: "Jumbo prawns in a tangy chilli sauce" }
        ]
      },
      {
        title: "Sides",
        description: "Perfect accompaniments to complement your main course",
        items: [
          { name: "Bombay Aloo", price: "7,90 €", description: "Classic potatoes curry served in a semi dry sauce & flavoured with various spices as cumin, turmeric & garam masala" },
          { name: "Aubergine Bhaji", price: "7,90 €", description: "Aubergine cooked in a tandoor then peeled in a semi spicy curry base" },
          { name: "Aloo Gobi", price: "8,50 €", description: "Potatoes & cauliflower curry served in a semi dry sauce" },
          { name: "Saag Aloo", price: "7,90 €", description: "Spinach curry with potatoes, spices & touch of cream" },
          { name: "Saag Bhaji", price: "7,90 €", description: "Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish" },
          { name: "Palak Paneer", price: "9,95 €", description: "Homemade cheese cooked with spinach & seasoned with garlic, garam masala" },
          { name: "Mutter Paneer", price: "9,95 €", description: "Soft paneer & green peas in a luscious tomato - based sauce" },
          { name: "Tadka Daal", price: "7,90 €", description: "Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander" },
          { name: "Daal Makhni", price: "8,50 €", description: "Daal makhni is a classic north indian dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce" },
          { name: "Chana Masala", price: "8,50 €", description: "Chickpeas cooked with tomatoes, garlic, onions & various spices such as turmeric & garam masala" },
          { name: "Mushroom Bhaji", price: "9,95 €", description: "Sliced mushroom cooked with onions & spices" }
        ]
      },
      {
        title: "Biryani",
        description: "Biryani rice cooked separately with an intensely flavoured sauce. Accompanied with curry sauce or mix raita",
        items: [
          { name: "Chicken", price: "10,95 €", description: "Traditional chicken biryani" },
          { name: "Chicken Tikka", price: "11,95 €", description: "Grilled chicken tikka biryani" },
          { name: "Lamb", price: "12,95 €", description: "Tender lamb biryani" },
          { name: "Lamb Tikka", price: "13,95 €", description: "Grilled lamb tikka biryani" },
          { name: "King Prawn", price: "14,95 €", description: "King prawn biryani" },
          { name: "Mix Vegetables", price: "11,95 €", description: "Mixed vegetable biryani" },
          { name: "Soya Meat", price: "13,95 €", description: "Soya meat biryani" },
          { name: "Paneer", price: "13,95 €", description: "Cottage cheese biryani" },
          { name: "Special Himalayan", price: "15,95 €", description: "Chef's special biryani" }
        ]
      },
      {
        title: "Rice",
        description: "Authentic basmati rice dishes and accompaniments",
        items: [
          { name: "Plain Boiled Rice", price: "3,50 €", description: "Traditional white basmati rice" },
          { name: "Pilau Rice", price: "3,80 €", description: "Indian basmati rice with three colours. Flavoured with onions, cinnamon, cloves & herbs" },
          { name: "Keema Rice", price: "4,95 €", description: "Basmati rice cooked with mincemeat & spices" },
          { name: "Coconut Rice", price: "4,50 €", description: "Sweet basmati coconut rice served in its special colour" },
          { name: "Mix Vegetable Rice", price: "4,50 €", description: "Stir fried mix vegetable in basmati rice" },
          { name: "Mushroom Rice", price: "4,50 €", description: "Stir fried mushroom in basmati rice" },
          { name: "Garlic Rice", price: "4,50 €", description: "Basmati rice with garlic & spices" },
          { name: "Zeera Rice", price: "4,50 €", description: "Basmati rice cooked with cumin & garnished with coriander" },
          { name: "Egg Fried Rice", price: "4,50 €", description: "Egg fried basmati rice" },
          { name: "Onion Rice", price: "4,50 €", description: "Basmati rice cooked with onions" },
          { name: "Special Fried Rice", price: "5,50 €", description: "Basmati rice with eggs & peas" },
          { name: "Himalayan Rice", price: "5,95 €", description: "Rice prepared in the chef's special style with prawn, mix vegetables & touch of mint" }
        ]
      },
      {
        title: "Indian Bread",
        description: "Freshly baked breads from our tandoor oven",
        items: [
          { name: "Plain Naan", price: "2,95 €", description: "Naan Bread slightly buttered on top" },
          { name: "Garlic Naan", price: "3,25 €", description: "Naan bread topped with garlic & coriander" },
          { name: "Coconut Naan", price: "3,75 €", description: "Naan bread topped with coconut" },
          { name: "Keema Naan", price: "3,95 €", description: "Naan bread filled with spiced minced meat" },
          { name: "Peshwari Naan", price: "3,95 €", description: "Naan bread filled with coconut, sultanas, almonds & sugar" },
          { name: "Cheese Naan", price: "3,95 €", description: "Naan bread filled with cheese" },
          { name: "Butter Naan", price: "3,50 €", description: "Naan bread with butter" },
          { name: "Onion Naan", price: "3,75 €", description: "Naan bread topped with fresh onions & coriander" },
          { name: "Kulcha Naan", price: "3,95 €", description: "Topped with green & red peppers & touch of green chilli" },
          { name: "Chilli Naan", price: "3,50 €", description: "Naan bread topped with chilli" },
          { name: "Garlic Chilli Naan", price: "3,95 €", description: "Naan bread topped with garlic & chilli" },
          { name: "Garlic Cheese Naan", price: "4,20 €", description: "Naan bread filled with cheese & topped with garlic" },
          { name: "Chilli Cheese Naan", price: "4,20 €", description: "Naan bread filled with cheese & topped with chilli" }
        ]
      },
      {
        title: "Chapatis",
        description: "Traditional Indian flatbreads",
        items: [
          { name: "Chapati", price: "2,50 €", description: "Thin Indian bread" },
          { name: "Butter Chapati", price: "2,95 €", description: "Thin Indian bread with butter" },
          { name: "Tandoori Roti", price: "2,95 €", description: "Thin Indian bread cooked in tandoor" },
          { name: "Plain Paratha", price: "3,25 €", description: "Indian bread made with layers of butter" },
          { name: "Aloo Paratha", price: "3,50 €", description: "Filled with mashed potatoes & peas with spices & butter" }
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