const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export const BRANDS = {

  //premium wikshy
  "the-macallan": {
    brandName: " Macallan",
    est: 1824,
    country: "Scotland",
    region: "Speyside",
    themeColor: "#b38b00",
    banner: {
      title: "Crafted Since 1824",
      subtitle: "An obsession with oak, a devotion to excellence.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBq6YIA5CNVNStXaCHRAHskhubvWXe2ecT5whLEuvURQ9SBdg5dGWblPic5RuqDjmTz03DCFCDOYG3B2W0h0Z&s&ec=121528423",
    },
    heritage: "Founded in 1824 by Alexander Reid, The Macallan is one of the world’s most respected single malt Scotch whisky producers, renowned for its exceptional sherry-seasoned oak casks.",
    whiskies: [
      {
        id: "12-oak",
        name: "Sherry Oak 12 Years Old",
        est: 2018,
        rating: 4.8,
        image: "https://www.shutterstock.com/image-photo/jakarta-indonesia-september-20-2023photo-260nw-2364194921.jpg",
        color: "Rich Gold",
        nose: "Vanilla with ginger, dried fruits, sherry sweetness and wood smoke.",
        palate: "Deliciously smooth with rich dried fruits, oak spice and sherry.",
        finish: "Long, sweet toffee with gentle spice.",
        abv: "40%",
        cask: "Sherry Seasoned European Oak",
      },
      
      
    ],
  },

  "glenfiddich": {
    brandName: "Glenfiddich",
    est: 1887,
    country: "Scotland",
    region: "Speyside",
    themeColor: "#1e8e3e",
    banner: {
      title: "Where Tradition Meets Innovation",
      subtitle: "The world’s most awarded single malt.",
      image: "https://images.unsplash.com/photo-1604908177522-040b48e6b42d?auto=format&fit=crop&w=1600&q=80",
    },
    heritage: "Founded in 1887 by William Grant, Glenfiddich pioneered single malt whisky as a global category and remains family-owned to this day.",
    whiskies: [
      {
        id: "12-original",
        name: "12 Years Old Original",
        est: 1980,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        color: "Pale Gold",
        nose: "Fresh pear and subtle oak.",
        palate: "Creamy malt with orchard fruit.",
        finish: "Clean, smooth and mellow.",
        abv: "40%",
        cask: "American Oak & European Oak",
      },
    ],
  },

  "johnnie-walker": {
    brandName: "Johnnie Walker",
    est: 1820,
    country: "Scotland",
    region: "Kilmarnock",
    themeColor: "#caa24d",
    banner: {
      title: "Keep Walking",
      subtitle: "The world’s leading Scotch whisky brand.",
      image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=1600&q=80",
    },
    heritage: "Founded by John Walker in 1820, Johnnie Walker is famous for its iconic striding man and expertly blended Scotch whiskies.",
    whiskies: [
      {
        id: "black-label",
        name: "Black Label 12 Years",
        est: 1909,
        rating: 4.7,
        image: "https://images.squarespace-cdn.com/content/v1/5bb630e081551245e01bc1b8/1589086491680-WM4ABBOQ18HE2HQC7FSQ/johnnie+walker.gif?format=2500w",
        color: "Deep Amber",
        nose: "Smoky malt, vanilla and dried fruit.",
        palate: "Balanced sweetness, spice and smoke.",
        finish: "Long, warming and smoky.",
        abv: "40%",
        cask: "Refill & Re-charred Oak",
      },
    ],
  },

  "lagavulin": {
    brandName: "Lagavulin",
    est: 1816,
    country: "Scotland",
    region: "Islay",
    themeColor: "#3d405b",
    banner: {
      title: "The King of Islay",
      subtitle: "Intense, smoky, and rich single malts.",
      image: "https://c8.alamy.com/comp/2H1G86B/bucharest-romania-january-27-2020-illustrative-editorial-image-of-a-bottle-of-lagavulin-single-malt-scotch-whisky-is-displayed-in-bar-in-bucharest-2H1G86B.jpg",
    },
    heritage: "Lagavulin is famous for its slow distillation and peaty character, making it one of the most robust spirits in the world.",
    whiskies: [
      {
        id: "16-year",
        name: "16 Year Old",
        est: 1987,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhNmOm7hF0wdJ57IiMcecAxm0A1ouxKaCW6sJ_zMdQspjVelvc6u4PQnz1DncpqC4tt-kE6-DTUXferbsOZ6UP&s&ec=121528423",
        color: "Deep Amber gold",
        nose: "Intense peat smoke with iodine and seaweed.",
        palate: "Dry peat smoke with gentle but strong sweetness.",
        finish: "A long, elegant peat-filled finish.",
        abv: "43%",
        cask: "Oak Casks",
      },
    ],
  },

  "chivas-regal": {
    brandName: "Chivas Regal",
    est: 1801,
    country: "Scotland",
    region: "Speyside",
    themeColor: "#8e1b1b",
    banner: {
      title: "Success is a Blend",
      subtitle: "The world's first luxury whisky.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
    },
    heritage: "The Chivas brothers pioneered the art of blending, creating a smooth and generous style that conquered the world.",
    whiskies: [
      {
        id: "18-gold",
        name: "18 Year Old Gold Signature",
        est: 1997,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
        color: "Intense Amber",
        nose: "Rich, indulgent, multi-layered aromas.",
        palate: "Velvety, dark chocolate and elegant floral notes.",
        finish: "Extremely warm and long finish.",
        abv: "40%",
        cask: "Fine Selected Casks",
      },
    ],
  },

  "the-balvenie": {
    brandName: "The Balvenie",
    est: 1892,
    country: "Scotland",
    region: "Speyside",
    themeColor: "#c19a6b",
    banner: {
      title: "The Five Rare Crafts",
      subtitle: "Handcrafted single malt from barley to bottle.",
      image: "https://images.unsplash.com/photo-1508253195889-0f40f0984920?auto=format&fit=crop&w=1600&q=80",
    },
    heritage: "The Balvenie is the only distillery that still grows its own barley and employs its own coopers and coppersmiths.",
    whiskies: [
      {
        id: "doublewood-12",
        name: "DoubleWood 12 Year Old",
        est: 1993,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
        color: "Amber Gold",
        nose: "Sweet fruit and Oloroso sherry notes.",
        palate: "Smooth and mellow with nuttiness and cinnamon.",
        finish: "Long and warming finish.",
        abv: "40%",
        cask: "Bourbon & Sherry Casks",
      },
    ],
  },

  //Mocktails

   "virgin-mojito": {
    brandName: "Virgin Mojito",
    est: 1980,
    country: "Global",
    region: "Classic Bar",
    themeColor: "#3cb371",
    banner: {
      title: "Fresh • Minty • Classic",
      subtitle: "A timeless non-alcoholic refreshment",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtqyCwMFRuVM1iEoVYhiYBHg3OnCFcJYqcg&s",
    },
    heritage:
      "Virgin Mojito is a refreshing mocktail inspired by the classic Cuban Mojito, offering the same zest without alcohol.",
    whiskies: [
      {
        id: "virgin-mojito-classic",
        name: "Classic Virgin Mojito",
        est: 1980,
        rating: 4.6,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0cRYcGcMi9dEq-09oOqEDHURSnzdLrEl0Q&s",
        color: "Clear Green",
        nose: "Fresh mint and lime aroma.",
        palate: "Citrusy lime with cooling mint.",
        finish: "Clean, crisp and refreshing.",
        abv: "0%",
        cask: "Non-Alcoholic Blend",
      },
    ],
  },

  "shirley-temple": {
    brandName: "Shirley Temple",
    est: 1934,
    country: "USA",
    region: "Classic Diner",
    themeColor: "#ff5c8a",
    banner: {
      title: "Sweet • Fruity • Iconic",
      subtitle: "The world’s most famous mocktail",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBcQa3dTyozCxX-5aAG1rXiFs0JGePsHZKg&s",
    },
    heritage:
      "Created in the 1930s, Shirley Temple is a sweet, colorful mocktail loved by generations.",
    whiskies: [
      {
        id: "shirley-temple-classic",
        name: "Classic Shirley Temple",
        est: 1934,
        rating: 4.5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso3dHDWxPhIq2NBffh01pSocxxw_FeiDWAA&s",
        color: "Ruby Red",
        nose: "Sweet cherry and citrus.",
        palate: "Grenadine sweetness with ginger ale.",
        finish: "Light, bubbly and cheerful.",
        abv: "0%",
        cask: "Non-Alcoholic Blend",
      },
    ],
  },

  "fruit-punch": {
    brandName: "Fruit Punch",
    est: 1920,
    country: "Global",
    region: "Tropical",
    themeColor: "#ff9800",
    banner: {
      title: "Juicy • Colorful • Fun",
      subtitle: "A burst of tropical flavors",
      image:
        "https://images.unsplash.com/photo-1609951651556-5334e70a43a7",
    },
    heritage:
      "Fruit Punch blends multiple fruit juices to create a vibrant and festive mocktail enjoyed worldwide.",
    whiskies: [
      {
        id: "fruit-punch-classic",
        name: "Classic Fruit Punch",
        est: 1920,
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
        color: "Bright Orange",
        nose: "Mixed tropical fruits.",
        palate: "Sweet citrus and berry notes.",
        finish: "Smooth and refreshing.",
        abv: "0%",
        cask: "Non-Alcoholic Blend",
      },
    ],
  },

  "strawberry-cooler": {
    brandName: "Strawberry Cooler",
    est: 2005,
    country: "Global",
    region: "Modern Café",
    themeColor: "#e53935",
    banner: {
      title: "Cool • Sweet • Refreshing",
      subtitle: "Perfect for summer evenings",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-A8kvWgaga-ejOoyKsW5_oQ-vvkU1hunDA&s",
    },
    heritage:
      "Strawberry Cooler is a modern mocktail crafted for hot days with fresh fruit and soda.",
    whiskies: [
      {
        id: "strawberry-cooler-classic",
        name: "Classic Strawberry Cooler",
        est: 2005,
        rating: 4.6,
        image:
          "https://drinkdesoi.com/cdn/shop/articles/Strawberry_Mojito_Mocktail_Recipe_2048x2048.webp?v=1724333203",
        color: "Strawberry Red",
        nose: "Fresh strawberries.",
        palate: "Sweet berry with citrus balance.",
        finish: "Cool and crisp.",
        abv: "0%",
        cask: "Non-Alcoholic Blend",
      },
    ],
  },

  //Beers

    // ================= BEERS =================

  "corona-extra": {
    brandName: "Corona Extra",
    est: 1925,
    country: "Mexico",
    region: "Lager",
    themeColor: "#f4c430",
    banner: {
      title: "La Cerveza Más Fina",
      subtitle: "Light, crisp and refreshing Mexican lager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aQCVFzVRbdM6xL4Yc8ls7jdwEasRQRtbmA&s",
    },
    heritage:
      "Corona Extra is one of the world’s most recognizable beers, known for its light taste and iconic lime ritual.",
    whiskies: [
      {
        id: "corona-classic",
        name: "Corona Extra Lager",
        est: 1925,
        rating: 4.5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSfMUYyV7TYbX8wwZwEEFeeKqGkh6jRkWLg&s",
        color: "Pale Gold",
        nose: "Light malt with citrus notes.",
        palate: "Crisp, clean and refreshing.",
        finish: "Dry and smooth.",
        abv: "4.5%",
        cask: "Glass Bottle",
      },
    ],
  },

  "kingfisher": {
    brandName: "Kingfisher",
    est: 1857,
    country: "India",
    region: "Lager",
    themeColor: "#d32f2f",
    banner: {
      title: "The King of Good Times",
      subtitle: "India’s most loved beer",
      image:
        "https://i.pinimg.com/736x/7c/4d/a6/7c4da6fa26b352b22cb2a1021c730b6a.jpg",
    },
    heritage:
      "Kingfisher is India’s most iconic beer brand, synonymous with celebrations and good times.",
    whiskies: [
      {
        id: "kingfisher-premium",
        name: "Kingfisher Premium Lager",
        est: 1978,
        rating: 4.3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_UpWTAhOU9uO7KMX0HvWQwsIBvczInDqFg&s",
        color: "Golden",
        nose: "Mild malt aroma.",
        palate: "Smooth and easy-drinking.",
        finish: "Clean and refreshing.",
        abv: "4.8%",
        cask: "Glass Bottle",
      },
    ],
  },

  "tuborg": {
    brandName: "Tuborg",
    est: 1873,
    country: "Denmark",
    region: "Pilsner",
    themeColor: "#1e88e5",
    banner: {
      title: "Open for Fun",
      subtitle: "Smooth Danish pilsner",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiOVQgvp1sou__89u7dd2ZOxfJdgaDNRdSQ&s",
    },
    heritage:
      "Tuborg is a Danish brewing icon, popular worldwide for its mild bitterness and smooth taste.",
    whiskies: [
      {
        id: "tuborg-green",
        name: "Tuborg Green",
        est: 1880,
        rating: 4.4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvvoOR4jD8EobhWi2O7cPLIasgqyy2jmTuQ&s",
        color: "Light Gold",
        nose: "Grainy malt aroma.",
        palate: "Light bitterness with mild sweetness.",
        finish: "Smooth and crisp.",
        abv: "4.6%",
        cask: "Glass Bottle",
      },
    ],
  },

  "budweiser": {
    brandName: "Budweiser",
    est: 1876,
    country: "USA",
    region: "American Lager",
    themeColor: "#b71c1c",
    banner: {
      title: "King of Beers",
      subtitle: "Classic American lager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtfkaCdBrrMoDe64vVj2wTp-W2uuXZY1N_w&s",
    },
    heritage:
      "Budweiser is one of the world’s best-known beers, brewed with a unique beechwood aging process.",
    whiskies: [
      {
        id: "budweiser-classic",
        name: "Budweiser Lager",
        est: 1876,
        rating: 4.2,
        image:
          "https://cloudfront-eu-central-1.images.arcpublishing.com/williamreed/5JUS2OAZRBI5TGF5XX6H5IJOLM.jpg",
        color: "Amber Gold",
        nose: "Light malt and hops.",
        palate: "Crisp with subtle sweetness.",
        finish: "Clean and smooth.",
        abv: "5%",
        cask: "Glass Bottle",
      },
    ],
  },

  "knock-out": {
    brandName: "Knock Out",
    est: 1984,
    country: "India",
    region: "Strong Beer",
    themeColor: "#6a1b9a",
    banner: {
      title: "Strong & Bold",
      subtitle: "High-strength Indian beer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9DtT490oOg9fmHmCQ0wzYB2VH9GlQcEMng&s",
    },
    heritage:
      "Knock Out is a strong beer brand popular in India for its bold flavor and higher alcohol content.",
    whiskies: [
      {
        id: "knock-out-strong",
        name: "Knock Out Strong",
        est: 1984,
        rating: 4.1,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/pornstar-mock-tini-third-6776afee14f47.jpg?crop=0.811xw:0.811xh;0.0881xw,0.111xh&resize=1200:*",
        color: "Deep Gold",
        nose: "Strong malt aroma.",
        palate: "Bold and intense.",
        finish: "Long and warming.",
        abv: "8%",
        cask: "Glass Bottle",
      },
    ],
  },

  "haywards": {
    brandName: "Haywards",
    est: 1974,
    country: "India",
    region: "Strong Lager",
    themeColor: "#2e7d32",
    banner: {
      title: "Bold Strong Beer",
      subtitle: "Popular high-strength lager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB38yCFrWXHroY_ZtztxLRpcBxYxnjIk4wmQ&s",
    },
    heritage:
      "Haywards is known for its strong beers and loyal fanbase across India.",
    whiskies: [
      {
        id: "haywards-5000",
        name: "Haywards 5000",
        est: 1974,
        rating: 4.0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z3Iu2El_QFny8AObJuVNpkudaIl9nSkC6w&s",
        color: "Amber",
        nose: "Grainy malt.",
        palate: "Strong and slightly bitter.",
        finish: "Long and intense.",
        abv: "7%",
        cask: "Glass Bottle",
      },
    ],
  },

//Spirits

  // ================= SPIRITS =================

  "vodka": {
    brandName: "Vodka",
    est: 1400,
    country: "Global",
    region: "Neutral Spirit",
    themeColor: "#90caf9",
    banner: {
      title: "Pure • Clean • Smooth",
      subtitle: "The world’s most versatile spirit",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oCVVeMTh9obRePHTSRxU2gT2jKFhPUGuJg&s",
    },
    heritage:
      "Vodka originated in Eastern Europe and is prized for its purity, neutrality, and smooth finish.",
    whiskies: [
      {
        id: "classic-vodka",
        name: "Classic Vodka",
        est: 1400,
        rating: 4.4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj81S1sz4DnfXPip9WDNJl5gSbiYEa8d6Bcg&s",
        color: "Crystal Clear",
        nose: "Clean and neutral.",
        palate: "Smooth with subtle sweetness.",
        finish: "Dry and crisp.",
        abv: "40%",
        cask: "Stainless Steel",
      },
    ],
  },

  "rum": {
    brandName: "Rum",
    est: 1650,
    country: "Caribbean",
    region: "Molasses Spirit",
    themeColor: "#a1887f",
    banner: {
      title: "Rich • Warm • Sweet",
      subtitle: "Spirit of the Caribbean",
      image: "https://mymocktailforest.com/wp-content/uploads/2025/01/MMF-Cinnamon-Rum-Martini-Mocktail-12-2.jpg",
    },
    heritage:
      "Rum is distilled from sugarcane byproducts and is deeply rooted in Caribbean culture.",
    whiskies: [
      {
        id: "classic-rum",
        name: "Classic Dark Rum",
        est: 1650,
        rating: 4.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogpo-zODA_h0h5qpOCIIVnmw9RL0TqGNxyQ&s",
        color: "Dark Amber",
        nose: "Caramel and spice.",
        palate: "Sweet molasses with vanilla.",
        finish: "Warm and lingering.",
        abv: "42%",
        cask: "Oak Barrels",
      },
    ],
  },

  "jameson": {
    brandName: "Jameson",
    est: 1780,
    country: "Ireland",
    region: "Irish Whiskey",
    themeColor: "#4caf50",
    banner: {
      title: "Triple Distilled Smoothness",
      subtitle: "Irish whiskey perfected",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnGwKGT1wox1uWRgGraQ3PD3q4hbwR9JCOg&s",
    },
    heritage:
      "Jameson is a world-famous Irish whiskey known for its smooth and approachable character.",
    whiskies: [
      {
        id: "jameson-original",
        name: "Jameson Original",
        est: 1780,
        rating: 4.6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnQkJXb7qgDfr1rCPicQLO9nYV59typu4Kg&s",
        color: "Golden Honey",
        nose: "Light floral and spice.",
        palate: "Smooth vanilla with toasted wood.",
        finish: "Clean and mellow.",
        abv: "40%",
        cask: "Ex-Bourbon & Sherry",
      },
    ],
  },

  "grey-goose": {
    brandName: "Grey Goose",
    est: 1997,
    country: "France",
    region: "Luxury Vodka",
    themeColor: "#b0bec5",
    banner: {
      title: "The World’s Best Tasting Vodka",
      subtitle: "Crafted in France",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    },
    heritage:
      "Grey Goose is a premium French vodka celebrated for its elegance and craftsmanship.",
    whiskies: [
      {
        id: "grey-goose-original",
        name: "Grey Goose Vodka",
        est: 1997,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598514983318-2f64f8f479f7",
        color: "Crystal Clear",
        nose: "Soft citrus and almond.",
        palate: "Silky smooth with gentle sweetness.",
        finish: "Clean and refined.",
        abv: "40%",
        cask: "Stainless Steel",
      },
    ],
  },

  "old-monk": {
    brandName: "Old Monk",
    est: 1954,
    country: "India",
    region: "Dark Rum",
    themeColor: "#6d4c41",
    banner: {
      title: "The Legend of Dark Rum",
      subtitle: "India’s most iconic rum",
      image: "https://images.unsplash.com/photo-1598514983318-2f64f8f479f7",
    },
    heritage:
      "Old Monk is a cult-favorite Indian dark rum with a loyal global fanbase.",
    whiskies: [
      {
        id: "old-monk-classic",
        name: "Old Monk Dark Rum",
        est: 1954,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
        color: "Deep Brown",
        nose: "Vanilla and caramel.",
        palate: "Rich, smooth and sweet.",
        finish: "Long and warming.",
        abv: "42.8%",
        cask: "Oak Barrels",
      },
    ],
  },

  "captain-morgan": {
    brandName: "Captain Morgan",
    est: 1944,
    country: "Caribbean",
    region: "Spiced Rum",
    themeColor: "#fbc02d",
    banner: {
      title: "Live Like the Captain",
      subtitle: "Bold spiced Caribbean rum",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    },
    heritage:
      "Captain Morgan is a globally popular spiced rum known for its bold and adventurous spirit.",
    whiskies: [
      {
        id: "captain-morgan-original",
        name: "Captain Morgan Spiced Rum",
        est: 1944,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1604908554023-0bdfd3b4c7c6",
        color: "Golden Amber",
        nose: "Vanilla and spice.",
        palate: "Sweet spice with oak.",
        finish: "Smooth and warming.",
        abv: "35%",
        cask: "Oak Barrels",
      },
    ],
  },


};