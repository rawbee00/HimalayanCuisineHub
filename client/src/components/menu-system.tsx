import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type MainTab = "menu" | "drinks" | "wine";
type FoodTab = "nepali" | "indian";
type DrinkTab = "softDrinks" | "coffeeTea" | "beer" | "spirits" | "whiskey" | "brandy" | "cocktails";

interface IMenuItem {
  name: string;
  price?: string;
  glassPrice?: string;
  bottlePrice?: string;
  bottleLabel?: string; // Custom label for bottle (e.g., 'Pitcher (1L)')
  description?: string;
  tags?: string[];
  isSpicy?: boolean;
  isVeg?: boolean;
  isPopular?: boolean;
}

interface IMenuSection {
  title: string;
  description?: string;
  items: IMenuItem[];
}

// Menu data
const foodMenuData: Record<FoodTab, readonly IMenuSection[]> = {
  nepali: [
    {
      title: "STARTER: NEPALI FLAVOR",
      items: [
        { 
          name: "Mo: Mo (Choose your filling)", 
          description: "Vegan: Textured soy, cabbage, and Himalayan spices | " +
                     "Chicken: Free-range chicken with garlic and ginger | " +
                     "Pork: Traditional Kathmandu-style rich and gamey"
        },
        { name: "Aloo Sadeko", description: "Potato salad with lemon and toasted mustard" },
        { 
          name: "Gundruk Ko Achar", 
          description: "Fermented leafy greens adapted with kale. Served with tomato achar (spiced Nepali sauce)" 
        }
      ]
    },
    {
      title: "SOUP: REIMAGINED THUKPA / SHERPA'S BOWL",
      items: [
        { 
          name: "Vegan Version", 
          description: "Shiitake and ginger broth with rice noodles" 
        },
        { 
          name: "Standard Option", 
          description: "Chicken broth with vegetables and dhaniya ko patta (coriander)" 
        },
        { name: "Kwati", description: "Mixed legumes with cumin and turmeric" }
      ]
    },
    {
      title: "MAIN COURSE: THAKALI",
      items: [
        { 
          name: "Vegan Version", 
          description: "Soy in jimbu and tomato sauce" 
        },
        { 
          name: "Chicken Curry", 
          description: "Bone-in curry with fenugreek seeds" 
        },
        { 
          name: "Kahsi ko Masu / Goat Curry", 
          description: "Bone-in slow-cooked with cardamom and black pepper masala" 
        }
      ]
    },
    {
      title: "DESSERT: YOMARI & DHAU",
      items: [
        { name: "Dhau", description: "Coconut yogurt with cardamom" },
        { name: "Yomari", description: "Coconut and nut molasses dumpling" },
        { name: "Optional: Kheer", description: "Nepali-style rice pudding" }
      ]
    },
    {
      title: "SET MENU",
      items: [
        { name: "Set Menu", price: "39.99" }
      ]
    }
  ],
  indian: [
    {
      title: "APPATIZER",
      items: [
        { name: "Papadum", price: "0.90", description: "Thin Indian crispy flatbread" },
        { name: "Spicy Papadum", price: "1.00", description: "Thin Indian crispy spicy flatbread" },
        { name: "PICKLE TRAY", price: "3.50", description: "Mango chutney, Mint sauce & Chopped Onions" },
        { name: "Tamarind Sauce", price: "0.90", description: "Bittersweet sauce from the fruit of tamarind" },
        { name: "Spicy Garlic Sacue", price: "0.90", description: "Sacue made with fresh garlic & spicy mayonnaise" },
        { name: "Mango Chutney", price: "0.90", description: "Mango flavour sweert sauce" },
        { name: "Mint Sauce", price: "0.90", description: "Sacue mande with fresh mint & yogur" },
        { name: "Spicy Onions", price: "0.90", description: "Chopped onions with cucumber & capsicum" },
        { name: "Mixed Salad", price: "5.50" },
        { name: "Plain Yoghurt", price: "2.90" }
      ]
    },
    {
      title: "STARTER",
      items: [
        { name: "Onion Bhaji", price: "4.25", description: "Onions balls bound together with lightly spiced & fragrant chickpea flour batter" },
        { name: "Vegetable Samosa", price: "4.50", description: "Triangular pastry filled with potatoes & peas, golden fried" },
        { name: "Garlic Mushroom", price: "4.50", description: "Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice" },
        { name: "Meat Samosa", price: "4.75", description: "Triangular pastry filled with potatoes, peas & meat, golden fried" },
        { name: "Vegetable Pakora", price: "4.50", description: "Sliced vegetables wrapped in batter & deep fried" },
        { name: "Chicken Pakora", price: "4.25", description: "Marinated chicken pieces in a batter, golden fried" },
        { name: "Chicken Puri", price: "5.50", description: "Chicken cooked & served on deep fried round bread" },
        { name: "King Prawn Puri", price: "5.95", description: "King prawn cooked with ginger - garlic & served on deep fried round bread" },
        { name: "Garlic Chicken", price: "5.95", description: "Chicken cooked with garlic & limon" },
        { name: "Chicken Lollipop", price: "5.50", description: "Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix" },
        { name: "Hot Chicken Wings", price: "5.50", description: "Spicy, juicy wings coated in a fiery marinade that packs a punch" },
        { name: "Chicken Tikka", price: "4.50", description: "Boneless chicken pieces marinated spicy yogurt cooked in a tandoor" },
        { name: "Tandoor Chicken", price: "5.50", description: "Chicken leg piece marinated in a spicy yogurt cooked in tandoor" },
        { name: "Pudina Tikka", price: "5.50", description: "Boneless chicken pieces marinated with mint,ginger & cooked in tandoor" },
        { name: "Lamb Tikka", price: "6.50", description: "Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor" },
        { name: "Barra Kebab", price: "5.50", description: "Succulent lamb chop marinated in a yogurt & spices,flame-grilled for a smoky bite" },
        { name: "Sheek Kebab", price: "5.50", description: "Minced lamb marinated with spiced,ginger, coriander & cooked on skewers in a tandoor" },
        { name: "Garlic King Prawn", price: "5.90", description: "Grilled king prawn cooked with garlic & limon" },
        { name: "Special Himalayan", price: "15.59", description: "Inclueds : Onion Bhaji, veg pakora, barra kebab, chicken tikka, pudina tikka, chicken pakora & sheekh kebab" }
      ]
    },
    {
      title: "CURRIES",
      description: "Dish from the cuisine of the Indian subcontinent which combines the use of a varieties of spices, vegetables, herbs like ginger, garlic, green chillies, turmeric, mustard seed, cumin seeds, coriander etc. Each dish has the combination of ingredients that makes it unique.",
      items: [
        { name: "Chicken", price: "9.95" },
        { name: "Chicken Tikka", price: "10.95" },
        { name: "Lamb ", price: "11.95" },
        { name: "Lamb Tikka", price: "12.95" },
        { name: "King Prawn", price: "13.95" },
        { name: "Mix Vegetables", price: "10.95" },
        { name: "Soya Meat", price: "12.95" },
        { name: "Paneer", price: "12.95" },
        { name: "Special Himalayn", price: "15.95" }
      ]
    },
    {
      title: "CURRY SAUCE",
      items: [
        { name: "Masala", description: "Masala curry is one of the most popular dish with a mild flavourbut ric in a cream & almond" },
        { name: "Koram", description: "Mild curry consisting of cream grated coconut" },
        { name: "Balti", description: "Balti sacue is based on green peppers, garlic & onions with turmeric & garam masala among other spices" },
        { name: "Bhuna", description: "Made with chopped onions, rosted red and green peppers, coriander seeds, ginger garlic coriander & fenugreek leaves" },
        { name: "Curry", description: "Classic curry with a fresh tmatoes & red onions in smooth sauce decorated with coriander" },
        { name: "Dhansak", description: "Combines elements of Persian & Gujarati cuisine. Dhansak is made with lentils, ginger, garlic, coconut, pineapple & fresh coriander" },
        { name: "Dopiaza", description: "Dopiaza curry sauce is based on onions family (Brown onions, chives & spring onions)" },
        { name: "Jalfrezi", description: "Involves bell peppers, ginger, garlic, cumin, coriander & spices in a thick sauce with a touch of cream" },
        { name: "Karahi", description: "Prepared in special cast iron skillet, this curry is turned brown with chopped tomato, onions, coriander, ginger & garlic" },
        { name: "Pathia", description: "Pathia is an ancient parsi cuisine from persia. It´s bettersweet flavoured with a touch of coconut" },
        { name: "Rogan Josh", description: "A kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander" },
        { name: "Saag", description: "Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream" },
        { name: "Manchuria", description: "Fresh mint in semidry sauce with tomatoes, lemon juice & garam masala" },
        { name: "Jai Puri", description: "Semi dense currry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander" }
      ]
    },
    {
      title: "SIZZLERS",
      items: [
        { name: "Paneer Shashlik", price: "11.50", description: "Chunks of paneer marinated in spices, cooked with onions & bell peppers" },
        { name: "Lamb Tikka Shashlik", price: "14.50", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, limon & onions" },
        { name: "Chicken Tikka Sizzler", price: "11.50", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
        { name: "Tandoori Chicken Sizzler", price: "11.50", description: "Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions" },
        { name: "Chicken Tikka Shashlik", price: "13.50", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, limon & onions" },
        { name: "King Prawn Sizzler", price: "13.95", description: "King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions" },
        { name: "Lamb Tikka Sizzler", price: "12.95", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
        { name: "Tandoori Mix Grill", price: "15.95", description: "Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns" }
      ]
    },
    {
      title: "HOUSE SPECIAL",
      items: [
        { name: "Mango Chicken", price: "11.95", description: "Boneless chicken cooked with mango pulp in traditional curry sauce" },
        { name: "Methi Gosht", price: "12.95", description: "Tender pieces of lamb cooked with fenugreek, leaves, hearbs & spices" },
        { name: "Chilli Chicken", price: "14.50", description: "Cooked with onions, tomatoes, cumin seeds" },
        { name: "Butter Chicken", price: "14.50", description: "Chicken pieces pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek" },
        { name: "Chilli Paneer", price: "14.50", description: "Soft paneer cubes in a vibrant spicy sauce" },
        { name: "Keema Mutter Masala", price: "14.50", description: "Minced meat & peas in a flavorful gravy" },
        { name: "Hakka Noodles", price: "13.50", description: "Stir - fried noodles with crisp vegetables" },
        { name: "Malai Kofta", price: "14.50", description: "Cottage cheese dumplings in a creamy tomato gravy" },
        { name: "Butter Lamb", price: "15.50", description: "Slow - cooked lamb in a silky butter sauce" },
        { name: "Chilli King Prawn", price: "15.50", description: "Jumbo prawns in a tangy chilli sauce" }
      ]
    },
    {
      title: "SIDES",
      items: [
        { name: "Bombay Aloo", price: "7.90", description: "Classic potatoes curry served in a semi dry sauce & flavoured with various spices as cumin, turmeric & garmal masala" },
        { name: "Mutter Paneer", price: "9.95", description: "Soft paneer & green peas in a luscious tomato - based sauce" },
        { name: "Tadka Daal", price: "7.90", description: "Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander" },
        { name: "Daal Makhni", price: "8.50", description: "Daal  makhni is a classi north indain dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce" },
        { name: "Aubrgine Bhaji", price: "7.90", description: "Aubrgine cooked in a tandoor then peeled in a semi spicy curry base" },
        { name: "Aloo Gobi", price: "8.50", description: "Potatoes & cauliflower curry served in a semi dry sauce" },
        { name: "Saag Aloo", price: "7.90", description: "Spinach curry with potatoes, spices & touch of cream" },
        { name: "Saag Bhaji", price: "7.90", description: "Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish" },
        { name: "Chana Masala", price: "8.50", description: "Chickpeas cooked with tomatoes, garlic, onions,& various spices such as turmeric & garam masala" },
        { name: "Mushroom Bhaji", price: "9.95", description: "Sliced mushroo, cooked with onions & spices" }
      ]
    },
    {
      title: "BIRYANI",
      items: [
        { name: "Vegetable Biryani", price: "12.95", description: "Fragrant basmati rice cooked with mixed vegetables & aromatic spices" },
        { name: "Chicken Biryani", price: "13.95", description: "Tender chicken pieces cooked with basmati rice & a blend of spices" },
        { name: "Lamb Biryani", price: "14.95", description: "Succulent lamb pieces cooked with basmati rice & aromatic spices" },
        { name: "King Prawn Biryani", price: "15.95", description: "Jumbo prawns cooked with basmati rice & a special blend of spices" },
        { name: "Special Biryani", price: "16.95", description: "A mix of chicken, lamb & prawns cooked with basmati rice & aromatic spices" }
      ]
    },
    {
      title: "RICE",
      items: [
        { name: "Steamed Rice", price: "3.50" },
        { name: "Jeera Rice", price: "4.50", description: "Basmati rice tempered with cumin seeds" },
        { name: "Peas Pulao", price: "4.95", description: "Basmati rice cooked with green peas & whole spices" },
        { name: "Vegetable Pulao", price: "5.50", description: "Basmati rice cooked with mixed vegetables & whole spices" },
        { name: "Kashmiri Pulao", price: "5.95", description: "Fragrant basmati rice cooked with dry fruits & nuts" }
      ]
    },
    {
      title: "INDIAN BREAD",
      items: [
        { name: "Plain Naan", price: "2.95", description: "Naan Bread slightly buttered on top" },
        { name: "Onion Naan", price: "3.75", description: "Naan bread topped with fresh onions & coriander" },
        { name: "Garlic Naan", price: "3.50", description: "Naan bread topped with garlic & coriander" },
        { name: "Cheese Naan", price: "3.95", description: "Naan bread filled with cheese" },
        { name: "Peshwari Naan", price: "3.95", description: "Naan bread filled with coconut & sultanas" },
        { name: "Keema Naan", price: "3.95", description: "Naan bread filled with spiced minced lamb" },
        { name: "Chilli Naan", price: "3.50", description: "Naan bread topped with chilli" },
        { name: "Garlic Chilli Naan", price: "3.95", description: "Naan bread topped with garlic & chilli" },
        { name: "Coconut Naan", price: "3.75", description: "Naan bread topped with coconut" },
        { name: "Tandoori Roti", price: "2.95", description: "Whole wheat bread cooked in tandoor" },
        { name: "Butter Roti", price: "3.25", description: "Whole wheat bread cooked in tandoor & brushed with butter" },
        { name: "Laccha Paratha", price: "3.50", description: "Flaky layered bread" },
        { name: "Plain Paratha", price: "3.25", description: "Whole wheat flatbread" },
        { name: "Aloo Paratha", price: "3.95", description: "Whole wheat flatbread stuffed with spiced potatoes" },
        { name: "Puri", price: "3.50", description: "Deep fried puffed bread" },
        { name: "Bhatura", price: "3.50", description: "Leavened deep fried bread" }
      ]
    },
    {
      title: "CHAPATIS",
      items: [
        { name: "Plain Chapati", price: "2.50" },
        { name: "Butter Chapati", price: "2.95", description: "Thin Indian bread with butter" },
        { name: "Garlic Chapati", price: "3.25" },
        { name: "Chilli Chapati", price: "3.25" },
        { name: "Garlic Chilli Chapati", price: "3.50" },
        { name: "Cheese Chapati", price: "3.50" },
        { name: "Aloo Paratha", price: "3.95", description: "Stuffed with spiced potatoes" },
        { name: "Gobi Paratha", price: "3.95", description: "Stuffed with spiced cauliflower" },
        { name: "Mooli Paratha", price: "3.95", description: "Stuffed with spiced radish" },
        { name: "Mix Paratha", price: "4.25", description: "Stuffed with mixed vegetables" },
        { name: "Tandoori Roti", price: "2.95", description: "Thin Indian bread cooked in tandoor" }
      ]
    }
  ]
};

const drinkMenuData: Record<DrinkTab, readonly IMenuSection[]> = {
  softDrinks: [
    {
      title: "Soft Drinks",
      description: "Refreshing beverages",
      items: [
        { name: "Coca Cola", price: "2.50" },
        { name: "Coca Cola Zero", price: "2.50" },
        { name: "Fanta Orange", price: "2.50" },
        { name: "Fanta Lemon", price: "2.50" },
        { name: "Sprite", price: "2.50" },
        { name: "Tonic (Normal/Zero/Red)", price: "2.50" },
        { name: "Ice Tea Mango-Pineapple", price: "2.50" },
        { name: "Ice Tea Lemon", price: "2.50" },
        { name: "Appletiser", price: "3.00" },
        { name: "Mango Lassi", price: "5.95" },
        { name: "Salted Lassi", price: "5.95" },
        { name: "Small Water", price: "1.95" },
        { name: "Sparkling Water", price: "2.00" },
        { name: "Orange Juice", price: "2.50" },
        { name: "Apple Juice", price: "2.50" },
        { name: "Pineapple Juice", price: "2.50" }
      ]
    }
  ],
  coffeeTea: [
    {
      title: "Coffee & Tea",
      description: "Hot beverages",
      items: [
        { name: "Espresso", price: "1.00" },
        { name: "Cortado Natural", price: "1.20" },
        { name: "Leche y Leche", price: "1.50" },
        { name: "Americano", price: "1.80" },
        { name: "White Coffee", price: "2.50" },
        { name: "Cappuccino", price: "2.75" },
        { name: "Barraquito", price: "2.95" },
        { name: "Irish Coffee", price: "4.00" },
        { name: "Carajillo", price: "2.50" },
        { name: "Calypso", price: "3.20" },
        { name: "Baileys Coffee", price: "3.50" },
        { name: "Te (Infusions)", price: "2.00" },
        { name: "Indian Tea", price: "3.50" }
      ]
    }
  ],
  beer: [
    {
      title: "Beer",
      description: "Local and imported beers",
      items: [
        { name: "Dorada Large", price: "2.80" },
        { name: "Dorada Small", price: "1.95" },
        { name: "Stella Artois Large", price: "2.80" },
        { name: "Stella Artois Small", price: "1.95" },
        { name: "Shandy Large", price: "3.00" },
        { name: "Shandy Small", price: "2.95" },
        { name: "Dorada Special Bot.", price: "2.80" },
        { name: "Dorada Sin Bot.", price: "2.50" },
        { name: "Dorada Limon Sin Bot.", price: "2.00" },
        { name: "Corona", price: "3.00" },
        { name: "Kopperberg Strawberry", price: "4.50" },
        { name: "Leffe Blond", price: "4.00" },
        { name: "Cobra (Indian)", price: "4.50" },
        { name: "King Fisher (Indian)", price: "4.50" },
        { name: "Gorkha (Nepali)", price: "5.95" }
      ]
    }
  ],
  spirits: [
    {
      title: "Spirits & Liquors",
      description: "Premium spirits and liquors",
      items: [
        { name: "Baileys", price: "4.95" },
        { name: "Amaretto", price: "4.95" },
        { name: "Cointreau", price: "4.95" },
        { name: "Jägermeister", price: "4.20" },
        { name: "Sambuca", price: "3.95" },
        { name: "Tia Maria", price: "3.50" },
        { name: "Tequila", price: "3.50" },
        { name: "Ron Miel", price: "3.00" },
        { name: "Licor 43", price: "3.00" }
      ]
    }
  ],
  whiskey: [
    {
      title: "Whiskey",
      description: "Fine selection of whiskeys",
      items: [
        { name: "Famous Grouse", price: "3.50" },
        { name: "J & B", price: "4.50" },
        { name: "Red Label", price: "4.50" },
        { name: "Black Label", price: "7.25" },
        { name: "Chardu 12 Years", price: "6.25" },
        { name: "Jack Daniel's", price: "5.20" }
      ]
    }
  ],
  brandy: [
    {
      title: "Brandy",
      description: "Smooth brandy selection",
      items: [
        { name: "108", price: "4.50" },
        { name: "Carlos I", price: "6.95" },
        { name: "Veterano", price: "4.50" },
        { name: "Courvoisier", price: "7.50" }
      ]
    }
  ],
  cocktails: [
    {
      title: "Cocktails",
      description: "Classic and signature cocktails",
      items: [
        { name: "Aperol Spritz", price: "8.95", description: "Prosecco - Aperol - Soda" },
        { name: "Blue Hawaii", price: "8.95", description: "White rum - Blue curacao - Lime juice - Pineapple - Coconut juice" },
        { name: "Amaretto Sour", price: "8.95", description: "Disaronno - Lemon juice - Liquid sugar" },
        { name: "Espresso Martini", price: "8.95", description: "Vodka - Coffee - Coffee liquor - Liquid sugar" },
        { name: "Pronstar Martini", price: "8.95", description: "Vanilla vodka - Passoa - Lemon juice - Vanilla syrup - Passion fruit" },
        { name: "Mojito", price: "8.95", description: "White rum - Brown sugar - Lime - Mint" },
        { name: "Piña Colada", price: "8.95", description: "White rum - Pineapple juice - Lemon juice - Coconut" },
        { name: "Daiquiri Frozen", price: "8.95", description: "White rum - Triple sec - Lime juice - Sugar syrup" }
      ]
    },
    {
      title: "Non-Alcoholic Cocktails",
      description: "Refreshing alcohol-free options",
      items: [
        { name: "Virgin Mojito", price: "6.00", description: "Lemon soda - Lime - Sugar syrup - Mint" },
        { name: "Virgin Colada", price: "6.00", description: "Pineapple juice - Coconut" },
        { name: "Virgin Hawaii", price: "6.00", description: "Curacao - Lime - Pineapple - Coconut" },
        { name: "Real Lemonade", price: "6.00", description: "Freshly squeezed lemonade" }
      ]
    }
  ]
};

// Wine menu data
const wineMenuData = [
  {
    title: "House Wines",
    description: "Our selection of house wines by the glass or bottle",
    items: [
      { 
        name: "Blason Esquide White", 
        glassPrice: "4.50",
        bottlePrice: "14.00",
        description: "Region: Rioja | Grapes: Viura\nPale green & crystalline color. Soft & delicious aroma." 
      },
      { 
        name: "Blason Esquide Red", 
        glassPrice: "4.50",
        bottlePrice: "14.00",
        description: "Region: Rioja | Grape: Tempranillo\nCherry red. Fresh & fruity aroma." 
      },
      { 
        name: "Blason Esquide Rosé", 
        glassPrice: "4.50",
        bottlePrice: "14.00",
        description: "Region: Rioja | Grapes: Tempranillo, Viura, Garnacha\nBright ruby. Soft & delicate aroma." 
      }
    ]
  },
  {
    title: "White Wines",
    description: "Our selection of premium white wines",
    items: [
      { 
        name: "Lagarto Blanco", 
        glassPrice: "6.90",
        bottlePrice: "20.00",
        description: "Region: Castilla y León | Grape: Verdejo\nDry, fresh, and fragrant white with aromas of green apple, mango, and passion fruit." 
      },
      { 
        name: "Fraktique Sauvignon", 
        bottlePrice: "21.00", 
        description: "Region: Languedoc, France | Grapes: Sauvignon Blanc 99%, Grenache Blanc 1%\nBright pale green. Earthy fragrances and crisp fruit like kiwi, apple, and white apricot." 
      },
      { 
        name: "Fraktique Chardonnay", 
        bottlePrice: "22.90", 
        description: "Region: Languedoc, France | Grape: Chardonnay\nBright and dense yellow. Floral and tropical aromas, with notes of pear and stone fruit." 
      },
      { 
        name: "Le Couchon Pinot Grigio", 
        bottlePrice: "24.00", 
        description: "Region: Puglia, Italy | Grape: Pinot Grigio\nFlavors of green apple, kiwi, lime, and ripe citrus. Rich in flavor, good texture, and fine finish." 
      },
      { 
        name: "Mar Blanco", 
        bottlePrice: "29.00", 
        description: "Region: Güímar, Tenerife | Grape: Listán Blanco (1300 m altitude)\nStraw-colored with greenish hues. Unfiltered, clean, fresh, and elegant. Notes of pear and pineapple." 
      },
      { 
        name: "Irache Chardonnay", 
        bottlePrice: "18.90", 
        description: "Region: D.O. Navarra | Grape: Chardonnay\nPale yellow with green highlights. Tropical and citrus aromas." 
      },
      { 
        name: "Viña Sol", 
        bottlePrice: "15.00", 
        description: "Region: D.O. Catalunya | Grapes: Parellada and Garnacha\nLight and bright golden color. Citrus aromas. Silky, with subtle acidity and a delicate mouthfeel." 
      },
      { 
        name: "Viña Alzará Blanco", 
        bottlePrice: "15.00", 
        description: "Region: Rioja | Grape: Viura\nTransparent, fruity, ideal to drink very cold." 
      },
      { 
        name: "Eido de Fonte", 
        bottlePrice: "24.00", 
        description: "Region: D.O. Rías Baixas (Subzone O Condado) | Grape: 100% Albariño\nLemon yellow with green reflections. Intense and complex aroma, with citrus notes, pear, apple, and peach." 
      }
    ]
  },
  {
    title: "Red Wines",
    description: "Our selection of premium red wines",
    items: [
      { 
        name: "Lagarto Tinto", 
        glassPrice: "6.90",
        bottlePrice: "20.00",
        description: "Region: Castilla y León | Grapes: Tempranillo, Mencía\nDeep red with violet rims. Floral and blackberry aromas. Smooth and silky with ripe tannins." 
      },
      { 
        name: "Sembro 2019", 
        bottlePrice: "24.00", 
        description: "Region: Ribera del Duero | Grape: Tempranillo\nDeep red. Aromas of blackberry and currant. Raspberry jam finish." 
      },
      { 
        name: "Acappele Crianza 2019", 
        bottlePrice: "28.00", 
        description: "Region: Ribera del Duero | Grape: Tempranillo\nIntense cherry with garnet edge. Aromas of candied fruit and sweet spices. Powerful and tasty." 
      },
      { 
        name: "Viña Alzará Joven", 
        bottlePrice: "16.00", 
        description: "Grapes: Tempranillo, Graciano, Garnacha\nRipe fruit and bright color. Traditional Rioja style." 
      }
    ]
  },
  {
    title: "Rosé Wines",
    description: "Our selection of refreshing rosé wines",
    items: [
      { 
        name: "Lagarto Rosado", 
        glassPrice: "6.90",
        bottlePrice: "20.00",
        description: "Region: Castilla y León | Grape: Tempranillo\nPale pink. Fresh aromas of strawberry, pear, and peach." 
      },
      { 
        name: "Irache Rosado", 
        bottlePrice: "17.50", 
        description: "Region: D.O. Navarra | Grapes: Tempranillo, Garnacha\nRaspberry pink. Aromas of strawberry and raspberry. Fresh, tasty, and balanced." 
      },
      { 
        name: "Mateus Rosado", 
        bottlePrice: "16.50", 
        description: "Region: Portugal | Grapes: Baga, Rufete, Tinta Barroca, Touriga Franca\nRaspberry pink. Floral and fruity aroma. Fresh, fruity, with fine bubbles." 
      }
    ]
  },
  {
    title: "Sparkling Wines & Prosecco",
    description: "Our selection of sparkling wines and prosecco",
    items: [
      { 
        name: "Le Couchon Bubblesque Prosecco", 
        bottlePrice: "26.00", 
        description: "Region: Veneto, Italy | Grapes: Blend of white grapes\nLight straw yellow. Fine bubbles. Dry and slightly bitter taste." 
      },
      { 
        name: "Le Couchon Brut Prosecco", 
        bottlePrice: "39.00", 
        description: "Region: Treviso, Italy | Grape: Glera\nPale straw yellow. Fine perlage. Dry and fragrant taste." 
      },
      { 
        name: "Le Couchon Rosé Prosecco", 
        bottlePrice: "32.00", 
        description: "Region: Trevigiana | Grapes: Glera, Pinot Nero, Raboso\nBright pale pink. Fragrance of strawberry, raspberry, and rose. Fresh and aromatic." 
      },
      { 
        name: "Cava", 
        bottlePrice: "22.00", 
        description: "Grapes: Macabeo, Xarel·lo, Parellada\nTraditional sparkling wine, ideal for celebrations." 
      },
      { 
        name: "Moët & Chandon", 
        bottlePrice: "52.00", 
        description: "Origin: France | Type: Champagne\nClassic, elegant, and refined. Persistent and balanced bubbles." 
      }
    ]
  },
  {
    title: "Sangrias",
    description: "Refreshing sangrias by the glass or pitcher (1L)",
    items: [
      { 
        name: "Red Sangria", 
        glassPrice: "8.00",
        bottlePrice: "14.00",
        bottleLabel: "Pitcher (1L)",
        description: "Refreshing red wine sangria with fresh fruits" 
      },
      { 
        name: "White Sangria", 
        glassPrice: "8.00",
        bottlePrice: "14.00",
        bottleLabel: "Pitcher (1L)",
        description: "Refreshing white wine sangria with fresh fruits" 
      },
    ]
  }
];

export function MenuSystem() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('menu');
  const [activeFoodTab, setActiveFoodTab] = useState<FoodTab>('nepali');
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>('softDrinks');

  // Listen for tab change events from other components (like the hero section)
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      const tab = event.detail as MainTab;
      if (['menu', 'drinks', 'wine'].includes(tab)) {
        setActiveMainTab(tab);
      }
    };

    // Add event listener
    window.addEventListener('setActiveTab', handleTabChange as EventListener);

    // Clean up
    return () => {
      window.removeEventListener('setActiveTab', handleTabChange as EventListener);
    };
  }, []);


  // Helper function to render menu items
  const renderMenuItems = (items: readonly IMenuItem[] = []) => {
    const isWineList = activeMainTab === 'drinks' && activeDrinkTab === 'wine' as unknown as DrinkTab;
    
    return (
      <>
        {isWineList && items.some(item => item.glassPrice || item.bottlePrice) && (
          <div className="flex justify-end mb-2">
            <div className="flex gap-8 pr-4">
              {items.some(item => item.glassPrice) && (
                <span className="text-lg font-semibold text-gray-700 font-yatra">Glass</span>
              )}
              {items.some(item => item.bottlePrice) && (
                <span className="text-lg font-semibold text-gray-700 font-yatra">Bottle</span>
              )}
            </div>
          </div>
        )}
        {items.map((item, index) => {
          const hasMultiplePrices = item.glassPrice && item.bottlePrice;
          
          return (
            <motion.div
              key={index}
              className="py-1.5 border-b border-gray-100 last:border-0"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 font-yatra">
                    {item.name}
                  </h3>
                  
                  {/* Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-0.5 font-yatra whitespace-pre-line">
                      {item.description}
                    </p>
                  )}
                  
                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Price display */}
                <div className="flex-shrink-0">
                  {hasMultiplePrices ? (
                    <div className="flex items-baseline gap-4">
                      {item.glassPrice && (
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary-custom whitespace-nowrap">
                            {item.glassPrice.startsWith('€') ? item.glassPrice : `€${item.glassPrice}`}
                          </div>
                        </div>
                      )}
                      {item.bottlePrice && (
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary-custom whitespace-nowrap">
                            {item.bottlePrice.startsWith('€') ? item.bottlePrice : `€${item.bottlePrice}`}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (item.glassPrice || item.bottlePrice) ? (
                    <span className="text-xl font-bold text-primary-custom whitespace-nowrap">
                      {(item.glassPrice || item.bottlePrice)?.startsWith('€') 
                        ? (item.glassPrice || item.bottlePrice) 
                        : `€${item.glassPrice || item.bottlePrice}`}
                    </span>
                  ) : item.price ? (
                    <span className="text-xl font-bold text-primary-custom whitespace-nowrap">
                      {item.price.startsWith('€') ? item.price : `€${item.price}`}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          );
        })}
      </>
    );
  };

  const renderMenuSections = (sections: readonly IMenuSection[] = []) => {
    return sections.map((section, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="font-bold text-xl md:text-2xl text-primary-custom mb-4 border-b-2 border-primary-custom/20 pb-2 font-yatra">
          {section.title}
        </div>
        {section.description && (
          <p className="text-gray-600 mb-4">{section.description}</p>
        )}
        {renderMenuItems(section.items)}
      </motion.div>
    ));
  };

  // Handle menu navigation from header
  useEffect(() => {
    const menuElement = menuRef.current;
    if (menuElement) {
      const activeTab = menuElement.getAttribute('data-active-tab');
      const drinksTab = menuElement.getAttribute('data-drinks-tab');
      
      if (activeTab) {
        setActiveMainTab(activeTab as MainTab);
        if (activeTab === 'drinks' && drinksTab) {
          setActiveDrinkTab(drinksTab as DrinkTab);
        }
      }
    }
  }, [menuRef]);

  // URL-based tab switching has been removed to allow manual tab selection

  return (
    <div ref={menuRef} id="menu-system" className="menu-system">
      {/* Main Tabs */}
      <div className="flex justify-center mb-8 space-x-4 max-w-2xl mx-auto">
        <button
          onClick={() => setActiveMainTab('menu')}
          className={`flex-1 py-2 px-4 rounded-md text-base font-semibold font-yatra ${
            activeMainTab === 'menu'
              ? 'bg-primary-custom text-white'
              : 'bg-white text-primary-custom border border-primary-custom'
          }`}
        >
          Food
        </button>
        <button
          onClick={() => setActiveMainTab('drinks')}
          className={`flex-1 py-2 px-4 rounded-md text-base font-semibold font-yatra ${
            activeMainTab === 'drinks'
              ? 'bg-primary-custom text-white'
              : 'bg-white text-primary-custom border border-primary-custom'
          }`}
        >
          Drinks
        </button>
        <button
          onClick={() => setActiveMainTab('wine')}
          className={`flex-1 py-2 px-4 rounded-md text-base font-semibold font-yatra ${
            activeMainTab === 'wine'
              ? 'bg-primary-custom text-white'
              : 'bg-white text-primary-custom border border-primary-custom'
          }`}
        >
          Wine
        </button>
      </div>

      {/* Food Menu */}
      {activeMainTab === 'menu' && (
        <div className="space-y-8">
          {/* Food Tabs */}
          <div className="flex justify-center mb-6">
            <Button
              variant={activeFoodTab === 'nepali' ? 'default' : 'outline'}
              onClick={() => setActiveFoodTab('nepali')}
              className="flex-1 text-base font-yatra"
            >
              Nepali
            </Button>
            <Button
              variant={activeFoodTab === 'indian' ? 'default' : 'outline'}
              onClick={() => setActiveFoodTab('indian')}
              className="flex-1 text-base font-yatra"
            >
              Indian
            </Button>
          </div>

          {/* Food Sections */}
          {renderMenuSections(foodMenuData[activeFoodTab])}
        </div>
      )}

      {/* Drinks Menu */}
      {activeMainTab === 'drinks' && (
        <div className="space-y-8">
          {/* Drink Tabs */}
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            <Button
              variant={activeDrinkTab === 'softDrinks' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('softDrinks')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Soft Drinks
            </Button>
            <Button
              variant={activeDrinkTab === 'coffeeTea' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('coffeeTea')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Coffee & Tea
            </Button>
            <Button
              variant={activeDrinkTab === 'beer' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('beer')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Beer
            </Button>
            <Button
              variant={activeDrinkTab === 'spirits' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('spirits')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Spirits
            </Button>
            <Button
              variant={activeDrinkTab === 'whiskey' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('whiskey')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Whiskey
            </Button>
            <Button
              variant={activeDrinkTab === 'brandy' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('brandy')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Brandy
            </Button>
            <Button
              variant={activeDrinkTab === 'cocktails' ? 'default' : 'outline'}
              onClick={() => setActiveDrinkTab('cocktails')}
              className="flex-1 min-w-[120px] font-yatra"
            >
              Cocktails
            </Button>
          </div>

          {/* Drink Sections */}
          {renderMenuSections(drinkMenuData[activeDrinkTab])}
        </div>
      )}

      {/* Wine Menu */}
      {activeMainTab === 'wine' && (
        <div className="space-y-8">
          {/* Wine Sections */}
          {renderMenuSections(wineMenuData)}
        </div>
      )}
    </div>
  );
}
