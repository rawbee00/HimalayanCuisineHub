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
          { name: "Chicken Curry (Bone-in with fenugreek seeds)", price: "" },
          { name: "Kahsi ko Masu / Goat Curry", price: "" },
          { name: "(Bone-in slow-cooked with cardamom & black pepper)", price: "" }
        ]
      },
      {
        title: "4. Dessert: Yomari & Dhau",
        description: "Choose your traditional sweet ending",
        items: [
          { name: "Dhau (coconut yogurt with cardamom)", price: "" },
          { name: "Yomari (coconut & nut molasses dumpling)", price: "" },
          { name: "Optional Add-on: Kheer (Nepali-style rice pudding)", price: "+3,00 €" }
        ]
      }
    ],
    indian: [
      {
        title: "Appetizers",
        description: "Start your Indian culinary journey with these traditional appetizers",
        items: [
          { name: "Papadum", price: "0,90 €", description: "Thin Indian crispy flatbread" },
          { name: "Spicy Papadum", price: "1,00 €", description: "Thin Indian crispy spicy flatbread." },
          { name: "Pickle Tray", price: "3,50 €", description: "Mango chutney, Mint sauce & Chopped Onions" },
          { name: "Tamarind Sauce", price: "0,90 €", description: "Bittersweet sauce from the fruit of tamarind." },
          { name: "Spicy Garlic Sauce", price: "0,90 €", description: "Sauce made with fresh garlic & spicy mayonnaise." },
          { name: "Mango Chutney", price: "0,90 €", description: "Mango flavour sweet sauce." },
          { name: "Mint Sauce", price: "0,90 €", description: "Sauce made with fresh mint & yogurt." },
          { name: "Spicy Onions", price: "0,90 €", description: "Chopped onions with cucumber & capsicum." },
          { name: "Mixed Salad", price: "5,50 €", description: "Fresh mixed vegetables and greens" },
          { name: "Plain Yoghurt", price: "2,90 €", description: "Traditional Indian yogurt" }
        ]
      },
      {
        title: "Normal Starters",
        description: "Traditional Indian starters prepared with authentic spices and techniques",
        items: [
          { name: "Onion Bhaji", price: "4,25 €", description: "Onions balls bound together with lightly spiced & fragrant chickpea flour batter.", allergens: "G" },
          { name: "Vegetable Samosa", price: "4,50 €", description: "Triangular pastry filled with potatoes & peas, golden fried.", allergens: "G" },
          { name: "Garlic Mushroom", price: "4,50 €", description: "Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice.", allergens: "L" },
          { name: "Meat Samosa", price: "4,75 €", description: "Triangular pastry filled with potatoes, peas & meat, golden fried.", allergens: "G" },
          { name: "Vegetable Pakora", price: "4,50 €", description: "Sliced vegetables wrapped in batter & deep fried.", allergens: "G" },
          { name: "Chicken Pakora", price: "4,25 €", description: "Marinated chicken pieces in a batter, golden fried.", allergens: "G" },
          { name: "Chicken Puri", price: "5,50 €", description: "Chicken cooked & served on deep fried round bread.", allergens: "G" },
          { name: "King Prawn Puri", price: "5,95 €", description: "King prawn cooked with ginger - garlic & served on deep fried round bread.", allergens: "G, C" },
          { name: "Garlic Chicken", price: "5,95 €", description: "Chicken cooked with garlic & lemon." },
          { name: "Chicken Lollipop", price: "5,50 €", description: "Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix." },
          { name: "Hot Chicken Wings", price: "5,50 €", description: "Spicy, juicy wings coated in a fiery marinade that packs a punch." }
        ]
      },
      {
        title: "Tandoori Starters",
        description: "Fresh from our traditional clay oven, perfectly spiced and expertly prepared",
        items: [
          { name: "Chicken Tikka", price: "4,50 €", description: "Boneless chicken pieces marinated spicy yogurt cooked in a tandoor." },
          { name: "Tandoor Chicken", price: "5,50 €", description: "Chicken leg piece marinated in a spicy yogurt cooked in tandoor." },
          { name: "Pudina Tikka", price: "5,50 €", description: "Boneless chicken pieces marinated with mint, ginger & cooked in tandoor." },
          { name: "Lamb Tikka", price: "6,50 €", description: "Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor." },
          { name: "Barra Kebab", price: "5,50 €", description: "Succulent lamb chop marinated in a yogurt & spices, flame-grilled for a smoky bite." },
          { name: "Sheek Kebab", price: "5,50 €", description: "Minced lamb marinated with spiced, ginger, coriander & cooked on skewers in a tandoor." },
          { name: "Garlic King Prawn", price: "5,90 €", description: "Grilled king prawn cooked with garlic & lemon." }
        ]
      },
      {
        title: "Special Platter",
        description: "Perfect for sharing and experiencing multiple flavors",
        items: [
          { name: "Special Himalayan", price: "15,50 €", description: "Includes: Onion Bhaji, veg pakora, barra kebab, chicken tikka, pudina tikka, chicken pakora & sheekh kebab" }
        ]
      },
      {
        title: "Proteins",
        description: "Dishes from the cuisine of the Indian subcontinent which combines the use of a varieties of spices, vegetables, herbs like ginger, garlic, green chillies, turmeric, mustard seed, cumin seeds, coriander etc. Each dish has the combination of ingredients that makes it unique.",
        items: [
          { name: "Chicken", price: "9,95 €", description: "Traditional chicken curry with authentic Indian spices" },
          { name: "Chicken Tikka", price: "10,95 €", description: "Marinated chicken pieces in rich curry sauce" },
          { name: "Lamb", price: "11,95 €", description: "Tender lamb cooked with aromatic spices" },
          { name: "Lamb Tikka", price: "12,95 €", description: "Grilled lamb pieces in flavorful curry" },
          { name: "King Prawn", price: "13,95 €", description: "Fresh king prawns in exotic spice blend" },
          { name: "Mix Vegetables", price: "10,95 €", description: "Seasonal vegetables cooked with traditional spices" },
          { name: "Soya Meat", price: "12,95 €", description: "Plant-based protein with authentic Indian flavors" },
          { name: "Paneer", price: "12,95 €", description: "Fresh cottage cheese in rich curry sauce" },
          { name: "Special Himalayan", price: "15,95 €", description: "Our signature protein dish with unique spice blend" }
        ]
      },
      {
        title: "Curry Sauces",
        description: "Choose your preferred curry sauce to combine with any protein above",
        items: [
          { name: "Masala", price: "", description: "Masala curry is one of the most popular dish with a mild flavour but rich in a cream & almond." },
          { name: "Korma", price: "", description: "Mild curry consisting of cream grated coconut." },
          { name: "Balti", price: "", description: "Balti sauce is based on green peppers, garlic & onions with turmeric & garam masala among other spices." },
          { name: "Bhuna", price: "", description: "Made with chopped onions, roasted red and green peppers, coriander seeds, ginger garlic coriander & fenugreek leaves." },
          { name: "Curry", price: "", description: "Classic curry with a fresh tomatoes & red onions in smooth sauce decorated with coriander." },
          { name: "Dhansak", price: "", description: "Combines elements of Persian & Gujarati cuisine. Dhansak is made with lentils, ginger, garlic, coconut, pineapple & fresh coriander." },
          { name: "Dopiaza", price: "", description: "Dopiaza curry sauce is based on onions family (Brown onions, chives & spring onions)" },
          { name: "Jalfrezi", price: "", description: "Involves bell peppers, ginger, garlic, cumin, coriander & spices in a thick sauce with a touch of cream." },
          { name: "Karahi", price: "", description: "Prepared in special cast iron skillet, this curry is turned brown with chopped tomato, onions, coriander, ginger & garlic." },
          { name: "Pathia", price: "", description: "Pathia is an ancient parsi cuisine from persia. It's bittersweet flavoured with a touch of coconut." },
          { name: "Rogan Josh", price: "", description: "A kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander." },
          { name: "Saag", price: "", description: "Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream." },
          { name: "Manchuria", price: "", description: "Fresh mint in semidry sauce with tomatoes, lemon juice & garam masala." },
          { name: "Jai Puri", price: "", description: "Semi dense curry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander." }
        ]
      },
      {
        title: "Sizzlers",
        description: "Served on hot sizzling plates straight from our tandoor - a feast for all your senses",
        items: [
          { name: "Paneer Shashlik", price: "11,50 €", description: "Chunks of paneer marinated in spices, cooked with onions & bell peppers." },
          { name: "Chicken Tikka Sizzler", price: "11,50 €", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions." },
          { name: "Chicken Tikka Shashlik", price: "13,50 €", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions." },
          { name: "Lamb Tikka Sizzler", price: "12,95 €", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions." },
          { name: "Lamb Tikka Shashlik", price: "14,50 €", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions." },
          { name: "Tandoori Chicken Sizzler", price: "11,50 €", description: "Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions." },
          { name: "King Prawn Sizzler", price: "13,95 €", description: "King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions." },
          { name: "Tandoori Mix Grill", price: "15,95 €", description: "Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns." }
        ]
      },
      {
        title: "House Special",
        description: "Our chef's signature creations - unique dishes that showcase the best of our kitchen",
        items: [
          { name: "Mango Chicken", price: "11,95 €", description: "Boneless chicken cooked with mango pulp in traditional curry sauce." },
          { name: "Methi Gosht", price: "12,95 €", description: "Tender pieces of lamb cooked with fenugreek, leaves, herbs & spices." },
          { name: "Chilli Chicken", price: "14,50 €", description: "Cooked with onions, tomatoes, cumin seeds." },
          { name: "Butter Chicken", price: "14,50 €", description: "Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek.", allergens: "L, N" },
          { name: "Chilli Paneer", price: "14,50 €", description: "Soft paneer cubes in a vibrant spicy sauce.", allergens: "L" },
          { name: "Keema Mutter Masala", price: "14,50 €", description: "Minced meat & peas in a flavorful gravy." },
          { name: "Hakka Noodles", price: "13,50 €", description: "Stir-fried noodles with crisp vegetables.", allergens: "G" },
          { name: "Malai Kofta", price: "14,50 €", description: "Cottage cheese dumplings in a creamy tomato gravy.", allergens: "L, G" },
          { name: "Butter Lamb", price: "15,50 €", description: "Slow-cooked lamb in a silky butter sauce.", allergens: "L" },
          { name: "Chilli King Prawn", price: "15,50 €", description: "Jumbo prawns in a tangy chilli sauce.", allergens: "C" }
        ]
      },
      {
        title: "Sides",
        description: "Traditional Indian side dishes to complement your main course",
        items: [
          { name: "Bombay Aloo", price: "7,90 €", description: "Classic potatoes curry served in a semi dry sauce & flavoured with various spices as cumin, turmeric & garam masala." },
          { name: "Aubergine Bhaji", price: "7,90 €", description: "Aubergine cooked in a tandoor then peeled in a semi spicy curry base." },
          { name: "Aloo Gobi", price: "8,50 €", description: "Potatoes & cauliflower curry served in a semi dry sauce." },
          { name: "Saag Aloo", price: "7,90 €", description: "Spinach curry with potatoes, spices & touch of cream." },
          { name: "Saag Bhaji", price: "7,90 €", description: "Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish." },
          { name: "Palak Paneer", price: "9,95 €", description: "Homemade cheese cooked with spinach & seasoned with garlic, garam masala." },
          { name: "Mutter Paneer", price: "9,95 €", description: "Soft paneer & green peas in a luscious tomato-based sauce." },
          { name: "Tadka Daal", price: "7,90 €", description: "Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander." },
          { name: "Daal Makhani", price: "8,50 €", description: "Daal makhani is a classic north indian dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce." },
          { name: "Chana Masala", price: "8,50 €", description: "Chickpeas cooked with tomatoes, garlic, onions, & various spices such as turmeric & garam masala." },
          { name: "Mushroom Bhaji", price: "9,95 €", description: "Sliced mushroom, cooked with onions & spices." }
        ]
      },
      {
        title: "Biryani",
        description: "Biryani rice cooked separately with an intensely flavoured sauce. Accompanied with curry sauce or mix raita.",
        items: [
          { name: "Chicken", price: "10,95 €", description: "Fragrant basmati rice with tender chicken pieces" },
          { name: "Chicken Tikka", price: "11,95 €", description: "Aromatic rice with marinated tandoori chicken tikka" },
          { name: "Lamb", price: "12,95 €", description: "Rich biryani with succulent lamb pieces" },
          { name: "Lamb Tikka", price: "13,95 €", description: "Spiced rice with grilled lamb tikka" },
          { name: "King Prawn", price: "14,95 €", description: "Premium biryani with fresh king prawns" },
          { name: "Mix Vegetables", price: "11,95 €", description: "Vegetarian biryani with seasonal vegetables" },
          { name: "Soya Meat", price: "13,95 €", description: "Plant-based biryani with soya protein" },
          { name: "Paneer", price: "13,95 €", description: "Cottage cheese biryani with aromatic spices" },
          { name: "Special Himalayan", price: "15,95 €", description: "Our signature biryani with unique spice blend" }
        ]
      },
      {
        title: "Rice",
        description: "Traditional basmati rice dishes to complement your meal",
        items: [
          { name: "Plain Boiled Rice", price: "3,50 €", description: "Traditional white basmati rice." },
          { name: "Pilau Rice", price: "3,80 €", description: "Indian basmati rice with three colours. Flavoured with onions, cinnamon, cloves & herbs." },
          { name: "Keema Rice", price: "4,95 €", description: "Basmati rice cooked with mincemeat & spices." },
          { name: "Coconut Rice", price: "4,50 €", description: "Sweet basmati coconut rice served in its special colour." },
          { name: "Mix Vegetable Rice", price: "4,50 €", description: "Stir fried mix vegetable in basmati rice." },
          { name: "Mushroom Rice", price: "4,50 €", description: "Stir fried mushroom in basmati rice." },
          { name: "Garlic Rice", price: "4,50 €", description: "Basmati rice with garlic & spices." },
          { name: "Zeera Rice", price: "4,50 €", description: "Basmati rice cooked with cumin & garnished with coriander." },
          { name: "Egg Fried Rice", price: "4,50 €", description: "Egg fried basmati rice." },
          { name: "Onion Rice", price: "4,50 €", description: "Basmati rice cooked with onions." },
          { name: "Special Fried Rice", price: "5,50 €", description: "Basmati rice with eggs & peas." },
          { name: "Himalayan Rice", price: "5,95 €", description: "Rice prepared in the chef's special style with prawn, mix vegetables & touch of mint." }
        ]
      },
      {
        title: "Indian Bread",
        description: "Freshly baked naan bread from our tandoor oven",
        items: [
          { name: "Plain Naan", price: "2,95 €", description: "Naan Bread slightly buttered on top.", allergens: "G, L" },
          { name: "Garlic Naan", price: "3,25 €", description: "Naan bread topped with garlic & coriander.", allergens: "G, L" },
          { name: "Coconut Naan", price: "3,75 €", description: "Naan bread topped with coconut.", allergens: "G, L" },
          { name: "Keema Naan", price: "3,95 €", description: "Naan bread filled with spiced minced meat.", allergens: "G, L" },
          { name: "Peshwari Naan", price: "3,95 €", description: "Naan bread filled with coconut, sultanas, almonds & sugar.", allergens: "G, L, N" },
          { name: "Cheese Naan", price: "3,95 €", description: "Naan bread filled with cheese.", allergens: "G, L" },
          { name: "Butter Naan", price: "3,50 €", description: "Naan bread with butter.", allergens: "G, L" },
          { name: "Onion Naan", price: "3,75 €", description: "Naan bread topped with fresh onions & coriander.", allergens: "G, L" },
          { name: "Kulcha Naan", price: "3,95 €", description: "Topped with green & red peppers & touch of green chilli.", allergens: "G, L" },
          { name: "Chilli Naan", price: "3,50 €", description: "Naan bread topped with chilli.", allergens: "G, L" },
          { name: "Garlic Chilli Naan", price: "3,95 €", description: "Naan bread topped with garlic & chilli.", allergens: "G, L" },
          { name: "Garlic Cheese Naan", price: "4,20 €", description: "Naan bread filled with cheese & topped with garlic.", allergens: "G, L" },
          { name: "Chilli Cheese Naan", price: "4,20 €", description: "Naan bread filled with cheese & topped with chilli.", allergens: "G, L" }
        ]
      },
      {
        title: "Chapatis",
        description: "Traditional thin Indian breads",
        items: [
          { name: "Chapati", price: "2,50 €", description: "Thin Indian bread." },
          { name: "Butter Chapati", price: "2,95 €", description: "Thin Indian bread with butter." },
          { name: "Tandoori Roti", price: "2,95 €", description: "Thin Indian bread cooked in tandoor." },
          { name: "Plain Paratha", price: "3,25 €", description: "Indian bread made with layers of butter." },
          { name: "Aloo Paratha", price: "3,50 €", description: "Filled with mashed potatoes & peas with spices & butter." }
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
    ],
    wine: [
      {
        title: "House Wine",
        description: "Our carefully selected house wines by the glass or bottle",
        items: [
          { name: "Blason Esquide White", price: "Glass: 4,50 € | Bottle: 14,00 €", description: "Region: Rioja | Grapes: Viura | Pale green & crystalline color. Soft & delicious aroma." },
          { name: "Blason Esquide Red", price: "Glass: 4,50 € | Bottle: 14,00 €", description: "Region: Rioja | Grape: Tempranillo | Cherry red. Fresh & fruity aroma." },
          { name: "Blason Esquide Rosé", price: "Glass: 4,50 € | Bottle: 14,00 €", description: "Region: Rioja | Grapes: Tempranillo, Viura, Garnacha | Bright ruby. Soft & delicate aroma." }
        ]
      },
      {
        title: "White Wines",
        description: "Premium white wines from renowned regions",
        items: [
          { name: "Lagarto Blanco", price: "Glass: 6,90 € | Bottle: 20,00 €", description: "Region: Castilla y León | Grape: Verdejo | Dry, fresh, and fragrant white. Aromas of green apple, mango, and passion fruit." },
          { name: "Fraktique Sauvignon", price: "21,00 €", description: "Region: Languedoc, France | Grapes: Sauvignon Blanc 99% / Grenache Blanc 10% | Bright pale green. Earthy fragrances and crisp fruit like kiwi, apple, and white apricot." },
          { name: "Fraktique Chardonnay", price: "22,90 €", description: "Region: Languedoc, France | Grape: Chardonnay | Bright and dense yellow. Floral and tropical aromas, with notes of pear and stone fruit." },
          { name: "Le Couchon Pinot Grigio", price: "24,00 €", description: "Region: Puglia, Italy | Grape: Pinot Grigio | Flavors of green apple, kiwi, lime, and ripe citrus. Rich in flavor, good texture." },
          { name: "Mar Blanco", price: "29,00 €", description: "Region: Güímar, Tenerife | Grape: Listán Blanco (1300m altitude) | Straw-colored with greenish hues. Notes of pear and pineapple." },
          { name: "Irache Chardonnay", price: "18,90 €", description: "Region: D.O. Navarra | Grape: Chardonnay | Pale yellow with green highlights. Tropical and citrus aromas." }
        ]
      },
      {
        title: "Red Wines",
        description: "Rich and complex red wines",
        items: [
          { name: "Lagarto Tinto", price: "Glass: 6,90 € | Bottle: 20,00 €", description: "Region: Castilla y León | Grapes: Tempranillo, Mencía | Deep red with violet rims. Floral and blackberry aromas." },
          { name: "Sembro 2019", price: "24,00 €", description: "Region: Ribera del Duero | Grape: Tempranillo | Deep red. Aromas of blackberry and currant. Raspberry jam finish." },
          { name: "Acappele Crianza 2019", price: "28,00 €", description: "Region: Ribera del Duero | Grape: Tempranillo | Intense cherry with garnet edge. Aromas of candied fruit and sweet spices." },
          { name: "Viña Alzará Joven", price: "16,00 €", description: "Grapes: Tempranillo, Graciano, Garnacha | Ripe fruit and bright color. Traditional Rioja style." }
        ]
      },
      {
        title: "Rosé & Sparkling Wines",
        description: "Light rosés and celebratory sparkling wines",
        items: [
          { name: "Lagarto Rosado", price: "Glass: 6,90 € | Bottle: 20,00 €", description: "Region: Castilla y León | Grape: Tempranillo | Pale pink. Fresh aromas of strawberry, pear, and peach." },
          { name: "Irache Rosado", price: "17,50 €", description: "Region: D.O. Navarra | Grapes: Tempranillo, Garnacha | Raspberry pink. Aromas of strawberry and raspberry." },
          { name: "Le Couchon Bubblesque Prosecco", price: "26,00 €", description: "Region: Veneto, Italy | Light straw yellow. Fine bubbles. Dry and slightly bitter taste." },
          { name: "Le Couchon Brut Prosecco", price: "39,00 €", description: "Region: Treviso, Italy | Grape: Glera | Pale straw yellow. Fine perlage. Dry and fragrant taste." },
          { name: "Moët & Chandon", price: "52,00 €", description: "Origin: France | Type: Champagne | Classic, elegant, and refined. Persistent and balanced bubbles." }
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
    ]
  };

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
                      // Smooth scroll to menu section
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
                      // Smooth scroll to menu section
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
                      // Smooth scroll to menu section
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

          {/* Wine Tab Content */}
          <div className={`tab-content ${activeMainTab === "wine" ? "active" : ""}`}>
            {activeMainTab === "wine" && (
              <div>
                <div className="text-center mb-8">
                  <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-4">Wine Selection</h4>
                  <p className="text-primary-custom">Discover our carefully curated collection of fine wines</p>
                </div>
                
                {/* Wine Content */}
                <div className="grid lg:grid-cols-2 gap-6 slide-in stagger-animation">
                  {drinkMenuData.wine.map((section, index) => (
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
                                <span className="font-medium text-primary-custom leading-relaxed">
                                  {item.name}
                                </span>
                                <span className="text-primary-custom font-semibold text-sm whitespace-nowrap ml-2">
                                  {item.price}
                                </span>
                              </div>
                              {(item as any).description && (
                                <p className="text-sm text-gray-600 italic leading-relaxed">
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
