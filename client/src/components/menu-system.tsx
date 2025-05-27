import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type MainTab = "menu" | "drinks";
type FoodTab = "nepali" | "indian";
type DrinkTab = "softDrinks" | "coffeeTea" | "beer" | "spirits" | "cocktails" | "wine";

export default function MenuSystem() {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>("menu");
  const [activeFoodTab, setActiveFoodTab] = useState<FoodTab>("nepali");
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>("softDrinks");

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
          { name: "Spicy Papadum", price: "1,00 €", description: "Thin Indian crispy spicy flatbread" },
          { name: "Pickle Tray", price: "3,50 €", description: "Mango chutney, Mint sauce & Chopped Onions" },
          { name: "Tamarind Sauce", price: "0,90 €", description: "Bittersweet sauce from the fruit of tamarind" },
          { name: "Spicy Garlic Sauce", price: "0,90 €", description: "Sauce made with fresh garlic & spicy mayonnaise" },
          { name: "Mango Chutney", price: "0,90 €", description: "Mango flavour sweet sauce" },
          { name: "Mint Sauce", price: "0,90 €", description: "Sauce made with fresh mint & yogurt" },
          { name: "Spicy Onions", price: "0,90 €", description: "Chopped onions with cucumber & capsicum" },
          { name: "Mixed Salad", price: "5,50 €", description: "Fresh mixed vegetables and greens" },
          { name: "Plain Yoghurt", price: "2,90 €", description: "Traditional Indian yogurt" }
        ]
      },
      {
        title: "Normal Starters",
        description: "Traditional Indian starters prepared with authentic spices and techniques",
        items: [
          { name: "Onion Bhaji", price: "4,25 €", description: "Onions balls bound together with lightly spiced & fragrant chickpea flour batter" },
          { name: "Vegetable Samosa", price: "4,50 €", description: "Triangular pastry filled with potatoes & peas, golden fried" },
          { name: "Garlic Mushroom", price: "4,50 €", description: "Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice" },
          { name: "Meat Samosa", price: "4,75 €", description: "Triangular pastry filled with potatoes, peas & meat, golden fried" },
          { name: "Vegetable Pakora", price: "4,50 €", description: "Sliced vegetables wrapped in batter & deep fried" },
          { name: "Chicken Pakora", price: "4,25 €", description: "Marinated chicken pieces in a batter, golden fried" },
          { name: "Chicken Puri", price: "5,50 €", description: "Chicken cooked & served on deep fried round bread" },
          { name: "King Prawn Puri", price: "5,95 €", description: "King prawn cooked with ginger - garlic & served on deep fried round bread" },
          { name: "Garlic Chicken", price: "5,95 €", description: "Chicken cooked with garlic & lemon" },
          { name: "Chicken Lollipop", price: "5,50 €", description: "Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix" },
          { name: "Hot Chicken Wings", price: "5,50 €", description: "Spicy, juicy wings coated in a fiery marinade that packs a punch" }
        ]
      },
      {
        title: "Tandoori Starters",
        description: "Fresh from our traditional clay oven, perfectly spiced and expertly prepared",
        items: [
          { name: "Chicken Tikka", price: "4,50 €", description: "Boneless chicken pieces marinated spicy yogurt cooked in a tandoor" },
          { name: "Tandoor Chicken", price: "5,50 €", description: "Chicken leg piece marinated in a spicy yogurt cooked in tandoor" },
          { name: "Pudina Tikka", price: "5,50 €", description: "Boneless chicken pieces marinated with mint, ginger & cooked in tandoor" },
          { name: "Lamb Tikka", price: "6,50 €", description: "Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor" },
          { name: "Barra Kebab", price: "5,50 €", description: "Succulent lamb chop marinated in a yogurt & spices, flame-grilled for a smoky bite" },
          { name: "Sheek Kebab", price: "5,50 €", description: "Minced lamb marinated with spiced, ginger, coriander & cooked on skewers in a tandoor" },
          { name: "Garlic King Prawn", price: "5,90 €", description: "Grilled king prawn cooked with garlic & lemon" }
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
        title: "Sizzlers",
        description: "Served on hot sizzling plates straight from our tandoor - a feast for all your senses",
        items: [
          { name: "Paneer Shashlik", price: "11,50 €", description: "Chunks of paneer marinated in spices, cooked with onions & bell peppers" },
          { name: "Chicken Tikka Sizzler", price: "11,50 €", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
          { name: "Chicken Tikka Shashlik", price: "13,50 €", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions" },
          { name: "Lamb Tikka Sizzler", price: "12,95 €", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
          { name: "Lamb Tikka Shashlik", price: "14,50 €", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions" },
          { name: "Tandoori Chicken Sizzler", price: "11,50 €", description: "Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions" },
          { name: "King Prawn Sizzler", price: "13,95 €", description: "King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions" },
          { name: "Tandoori Mix Grill", price: "15,95 €", description: "Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns" }
        ]
      },
      {
        title: "House Special",
        description: "Our chef's signature creations - unique dishes that showcase the best of our kitchen",
        items: [
          { name: "Mango Chicken", price: "11,95 €", description: "Boneless chicken cooked with mango pulp in traditional curry sauce" },
          { name: "Methi Gosht", price: "12,95 €", description: "Tender pieces of lamb cooked with fenugreek leaves, herbs & spices" },
          { name: "Chilli Chicken", price: "14,50 €", description: "Cooked with onions, tomatoes, cumin seeds" },
          { name: "Butter Chicken", price: "14,50 €", description: "Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek" },
          { name: "Chilli Paneer", price: "14,50 €", description: "Soft paneer cubes in a vibrant spicy sauce" },
          { name: "Keema Mutter Masala", price: "14,50 €", description: "Minced meat & peas in a flavorful gravy" },
          { name: "Hakka Noodles", price: "13,50 €", description: "Stir-fried noodles with crisp vegetables" },
          { name: "Malai Kofta", price: "14,50 €", description: "Cottage cheese dumplings in a creamy tomato gravy" },
          { name: "Butter Lamb", price: "15,50 €", description: "Slow-cooked lamb in a silky butter sauce" },
          { name: "Chilli King Prawn", price: "15,50 €", description: "Jumbo prawns in a tangy chilli sauce" }
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
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <Button
              onClick={() => setActiveMainTab("menu")}
              className={`slide-button px-12 py-4 font-semibold text-lg ${
                activeMainTab === "menu" ? "active" : ""
              }`}
            >
              Food Menu
            </Button>
            <Button
              onClick={() => setActiveMainTab("drinks")}
              className={`slide-button px-12 py-4 font-semibold text-lg ${
                activeMainTab === "drinks" ? "active" : ""
              }`}
            >
              Drinks & Wine
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
                                    item.price.startsWith('+') 
                                      ? 'text-sm text-orange-600' 
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
                  <Button
                    onClick={() => setActiveDrinkTab("wine")}
                    className={`slide-button px-6 py-3 font-medium text-sm ${
                      activeDrinkTab === "wine" ? "active" : ""
                    }`}
                  >
                    Wine
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
