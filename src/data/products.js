export const BRAND_NAME = "AURELIUS & CO.";
export const BRAND_TAGLINE = "CRAFTED TO MAKE AN ENTRANCE";

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Footwear", count: 25 },
  { id: "loafers", name: "Loafers", count: 5, groups: ["Penny Loafers", "Tassel Loafers", "Driving Loafers", "Casual Loafers"] },
  { id: "oxfords", name: "Oxfords & Derbys", count: 5, groups: ["Cap Toe Oxfords", "Wholecuts", "Wingtip Brogues", "Derby Shoes"] },
  { id: "monk-straps", name: "Monk Straps", count: 2, groups: ["Double Monk Strap Shoes", "Single Monk Strap"] },
  { id: "boots", name: "Boots", count: 6, groups: ["Chelsea Boots", "Chukka Boots", "Dress Boots", "Cap Toe Boots", "Lace-Up Boots", "Suede Boots"] },
  { id: "sneakers", name: "Premium Sneakers", count: 4, groups: ["Leather Sneakers", "Premium Sneakers", "Slip-On Sneakers"] },
  { id: "casual-slippers", name: "Casual & Slippers", count: 3, groups: ["Boat Shoes", "Driving Shoes", "Velvet Slippers"] },
];

export const ALL_CATEGORIES_LIST = [
  "Loafers",
  "Penny Loafers",
  "Tassel Loafers",
  "Driving Loafers",
  "Casual Loafers",
  "Oxford Shoes",
  "Derby Shoes",
  "Cap Toe Oxfords",
  "Wholecuts",
  "Wingtip Brogues",
  "Monk Strap Shoes",
  "Double Monk Strap Shoes",
  "Chelsea Boots",
  "Chukka Boots",
  "Dress Boots",
  "Cap Toe Boots",
  "Lace-Up Boots",
  "Suede Boots",
  "Leather Sneakers",
  "Premium Sneakers",
  "Slip-On Sneakers",
  "Boat Shoes",
  "Driving Shoes",
  "Casual Slip-Ons",
  "Velvet Slippers"
];

export const products = [
  {
    id: "aurelius-signature-oxford",
    name: "The Signature Cap Toe Oxford",
    category: "Cap Toe Oxfords",
    categoryGroup: "oxfords",
    price: 6499,
    originalPrice: 8499,
    rating: 4.9,
    reviewsCount: 128,
    description: "Engineered from hand-burnished French calfskin leather with a Goodyear welted construction. Hand-carved bevelled waist and stacked leather heel.",
    leatherType: "French Full-Grain Calfskin",
    construction: "Goodyear Welted (360° Hand Stitch)",
    sole: "Hand-finished Stacked Leather",
    colors: [
      { name: "Espresso Brown", hex: "#3B2317", primary3D: "#3B2317", sole3D: "#1A0F0A" },
      { name: "Midnight Black", hex: "#111113", primary3D: "#111113", sole3D: "#08080A" },
      { name: "Antique Cognac", hex: "#7E4727", primary3D: "#7E4727", sole3D: "#2B160C" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    featured: true,
    isNew: true,
    isBestSeller: true,
    inStock: true,
    heroModel: true,
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "oxford",
      baseColor: "#3B2317",
      accentColor: "#C7A46A",
      leatherRoughness: 0.3,
      clearcoat: 0.8,
      hasCapToe: true,
      hasLaces: true
    }
  },
  {
    id: "aurelius-sovereign-wholecut",
    name: "The Sovereign Seamless Wholecut",
    category: "Wholecuts",
    categoryGroup: "oxfords",
    price: 7999,
    originalPrice: 9999,
    rating: 5.0,
    reviewsCount: 94,
    description: "Crafted from a single pristine piece of flawless Italian calfskin leather. Zero external seam lines, finished with a hand-applied museum patina.",
    leatherType: "Italian Museum Calfskin",
    construction: "Blake Rapid Welt",
    sole: "Hand-polished Leather & Rubber Cushion",
    colors: [
      { name: "Patina Bordeaux", hex: "#4A1521", primary3D: "#4A1521", sole3D: "#1C080C" },
      { name: "Nero Black", hex: "#161616", primary3D: "#161616", sole3D: "#0A0A0A" },
      { name: "Walnut Tan", hex: "#8B5A2B", primary3D: "#8B5A2B", sole3D: "#36220F" }
    ],
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    featured: true,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "wholecut",
      baseColor: "#4A1521",
      accentColor: "#C7A46A",
      leatherRoughness: 0.25,
      clearcoat: 0.9,
      hasCapToe: false,
      hasLaces: true
    }
  },
  {
    id: "aurelius-royal-penny-loafer",
    name: "The Royal Tuscan Penny Loafer",
    category: "Penny Loafers",
    categoryGroup: "loafers",
    price: 5499,
    originalPrice: 6999,
    rating: 4.8,
    reviewsCount: 162,
    description: "Unstructured luxury Tuscan penny loafer featuring hand-stitched apron apron detail, supple glove-leather lining and arch memory foam.",
    leatherType: "Tuscan Grain Leather",
    construction: "Hand-Stitched Moccasin",
    sole: "Flexible Stacked Leather Sole",
    colors: [
      { name: "Rich Cognac", hex: "#7A431D", primary3D: "#7A431D", sole3D: "#2B160A" },
      { name: "Deep Navy", hex: "#1B2A4A", primary3D: "#1B2A4A", sole3D: "#0B111E" },
      { name: "Black Velvet Matte", hex: "#1F1F1F", primary3D: "#1F1F1F", sole3D: "#0A0A0A" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    featured: true,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "loafer",
      baseColor: "#7A431D",
      accentColor: "#C7A46A",
      leatherRoughness: 0.35,
      clearcoat: 0.5,
      hasCapToe: false,
      hasLaces: false,
      loaferType: "penny"
    }
  },
  {
    id: "aurelius-venetian-tassel-loafer",
    name: "The Venetian Tassel Loafer",
    category: "Tassel Loafers",
    categoryGroup: "loafers",
    price: 5999,
    originalPrice: 7499,
    rating: 4.9,
    reviewsCount: 87,
    description: "Hand-crafted tassel loafer made from velvety Italian suede with woven leather collar piping and solid brass tassel tips.",
    leatherType: "Italian Repello Suede",
    construction: "Blake Stitched",
    sole: "Bevelled Leather Sole",
    colors: [
      { name: "Olive Suede", hex: "#4B4C33", primary3D: "#4B4C33", sole3D: "#1A1B12" },
      { name: "Chocolate Suede", hex: "#3D2B1F", primary3D: "#3D2B1F", sole3D: "#160F0B" },
      { name: "Sand Suede", hex: "#C2A684", primary3D: "#C2A684", sole3D: "#473A2A" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    featured: true,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "loafer",
      baseColor: "#3D2B1F",
      accentColor: "#C7A46A",
      leatherRoughness: 0.8,
      clearcoat: 0.1,
      hasCapToe: false,
      hasLaces: false,
      loaferType: "tassel"
    }
  },
  {
    id: "aurelius-double-monk-strap",
    name: "The Executive Double Monk Strap",
    category: "Double Monk Strap Shoes",
    categoryGroup: "monk-straps",
    price: 6899,
    originalPrice: 8999,
    rating: 4.9,
    reviewsCount: 110,
    description: "Bold double buckle monk strap featuring hand-polished antiqued calfskin, solid brushed brass hardware, and Goodyear welt construction.",
    leatherType: "Annonay Full-Grain Leather",
    construction: "Goodyear Welted",
    sole: "Hand-finished Stacked Leather",
    colors: [
      { name: "Cognac Amber", hex: "#8A4925", primary3D: "#8A4925", sole3D: "#301A0D" },
      { name: "Onyx Black", hex: "#141416", primary3D: "#141416", sole3D: "#070708" }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    featured: true,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "monk",
      baseColor: "#8A4925",
      accentColor: "#D4AF37",
      leatherRoughness: 0.3,
      clearcoat: 0.7,
      hasBuckle: true
    }
  },
  {
    id: "aurelius-royal-chelsea-boot",
    name: "The Royal Kensington Chelsea Boot",
    category: "Chelsea Boots",
    categoryGroup: "boots",
    price: 7499,
    originalPrice: 9499,
    rating: 5.0,
    reviewsCount: 204,
    description: "Clean single-piece Chelsea boot crafted from weatherproof Italian box calf leather with elasticized side gores and woven back pull-tabs.",
    leatherType: "Hydro-Tanned Box Calf",
    construction: "Goodyear Storm Welt",
    sole: "Vibram Commando Leather Sole",
    colors: [
      { name: "Obsidian Black", hex: "#121214", primary3D: "#121214", sole3D: "#060607" },
      { name: "Chestnut Suede", hex: "#5C3826", primary3D: "#5C3826", sole3D: "#24160F" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    featured: true,
    isNew: true,
    isBestSeller: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "boot",
      baseColor: "#121214",
      accentColor: "#C7A46A",
      leatherRoughness: 0.25,
      clearcoat: 0.8,
      bootStyle: "chelsea"
    }
  },
  {
    id: "aurelius-metropolitan-sneaker",
    name: "The Metropolitan Minimalist Leather Sneaker",
    category: "Premium Sneakers",
    categoryGroup: "sneakers",
    price: 4999,
    originalPrice: 6499,
    rating: 4.8,
    reviewsCount: 312,
    description: "Sleek low-top luxury sneaker built with full-grain Nappa leather, hand-stitched Margom rubber cupsole, and memory foam calfskin footbed.",
    leatherType: "Italian Nappa Leather",
    construction: "Stitched Cupsole Construction",
    sole: "Margom Italian Rubber Sole",
    colors: [
      { name: "Pure Off-White", hex: "#F5F3EF", primary3D: "#F5F3EF", sole3D: "#E8E4DC" },
      { name: "Monochrome Black", hex: "#1A1A1A", primary3D: "#1A1A1A", sole3D: "#101010" },
      { name: "Warm Olive", hex: "#3F4236", primary3D: "#3F4236", sole3D: "#F5F3EF" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    featured: true,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "sneaker",
      baseColor: "#F5F3EF",
      accentColor: "#C7A46A",
      leatherRoughness: 0.4,
      clearcoat: 0.2,
      sole3D: "#E8E4DC"
    }
  },
  {
    id: "aurelius-monaco-driving-loafer",
    name: "The Monaco Pebble-Sole Driving Loafer",
    category: "Driving Loafers",
    categoryGroup: "loafers",
    price: 4499,
    originalPrice: 5999,
    rating: 4.7,
    reviewsCount: 89,
    description: "Hand-moccasin driving shoe featuring signature rubber gommino pebble nodes extending up the heel for effortless grip while driving.",
    leatherType: "Glove Soft Calfskin",
    construction: "Tubular Moccasin",
    sole: "Rubber Gommino Pebble Sole",
    colors: [
      { name: "Caramel Tan", hex: "#B87333", primary3D: "#B87333", sole3D: "#1A1A1A" },
      { name: "Midnight Navy", hex: "#1E2A3A", primary3D: "#1E2A3A", sole3D: "#1A1A1A" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    featured: false,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "loafer",
      baseColor: "#B87333",
      accentColor: "#C7A46A",
      leatherRoughness: 0.5,
      clearcoat: 0.2,
      loaferType: "driving"
    }
  },
  {
    id: "aurelius-wingtip-brogue",
    name: "The Heritage Wingtip Brogue Derby",
    category: "Wingtip Brogues",
    categoryGroup: "oxfords",
    price: 6799,
    originalPrice: 8499,
    rating: 4.8,
    reviewsCount: 142,
    description: "Intricate perforated broguing details across full-grain calfskin uppers with hand-burnished medallion toe design and storm welt.",
    leatherType: "Hand-Burnished Calfskin",
    construction: "Goodyear Welted",
    sole: "Double Layer Leather Sole",
    colors: [
      { name: "Antique Walnut", hex: "#6E3B1F", primary3D: "#6E3B1F", sole3D: "#24130A" },
      { name: "Deep Charcoal", hex: "#232328", primary3D: "#232328", sole3D: "#0D0D10" }
    ],
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    featured: false,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "oxford",
      baseColor: "#6E3B1F",
      accentColor: "#C7A46A",
      leatherRoughness: 0.35,
      clearcoat: 0.6,
      hasBrogue: true
    }
  },
  {
    id: "aurelius-florentine-velvet-slipper",
    name: "The Florentine Crested Velvet Slipper",
    category: "Velvet Slippers",
    categoryGroup: "casual-slippers",
    price: 5299,
    originalPrice: 6799,
    rating: 4.9,
    reviewsCount: 65,
    description: "Opulent evening smoking slipper made from deep cotton velvet with quilted satin lining, gold metallic bullion embroidery, and hand-stained leather sole.",
    leatherType: "Venetian Velvet & Bullion Embroidery",
    construction: "Turned Shoe Construction",
    sole: "Hardwood Carved Leather Sole",
    colors: [
      { name: "Imperial Royal Blue", hex: "#102347", primary3D: "#102347", sole3D: "#1C140D" },
      { name: "Midnight Black Velvet", hex: "#161616", primary3D: "#161616", sole3D: "#1C140D" },
      { name: "Emerald Green", hex: "#0F3826", primary3D: "#0F3826", sole3D: "#1C140D" }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    featured: true,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "slipper",
      baseColor: "#102347",
      accentColor: "#FFD700",
      leatherRoughness: 0.9,
      clearcoat: 0.05
    }
  },
  {
    id: "aurelius-highland-chukka-boot",
    name: "The Highland Waterproof Chukka Boot",
    category: "Chukka Boots",
    categoryGroup: "boots",
    price: 6199,
    originalPrice: 7999,
    rating: 4.7,
    reviewsCount: 77,
    description: "Two-eyelet desert chukka boot with weather-treated Charles F. Stead suede and natural crepe rubber lugged outsole.",
    leatherType: "CF Stead Waterproof Suede",
    construction: "Stitch-Down Construction",
    sole: "Natural Plantation Crepe Rubber",
    colors: [
      { name: "Sand Suede", hex: "#B89B77", primary3D: "#B89B77", sole3D: "#D4C2A5" },
      { name: "Snuff Brown", hex: "#634735", primary3D: "#634735", sole3D: "#332319" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
    featured: false,
    isNew: false,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "boot",
      baseColor: "#634735",
      accentColor: "#C7A46A",
      leatherRoughness: 0.85,
      clearcoat: 0.0,
      bootStyle: "chukka"
    }
  },
  {
    id: "aurelius-casual-slip-on",
    name: "The Amalfi Riviera Casual Slip-On",
    category: "Casual Slip-Ons",
    categoryGroup: "casual-slippers",
    price: 3999,
    originalPrice: 5299,
    rating: 4.6,
    reviewsCount: 54,
    description: "Lightweight breathable slip-on tailored with perforated calfskin vamp, elastic gussets, and ultra-flexible ergonomic outsole.",
    leatherType: "Perforated Calfskin",
    construction: "Direct Inject Molded",
    sole: "Ergonomic Flex Rubber",
    colors: [
      { name: "Warm Off-White", hex: "#EBE7DF", primary3D: "#EBE7DF", sole3D: "#D8D2C6" },
      { name: "Navy Blue", hex: "#202E42", primary3D: "#202E42", sole3D: "#EBE7DF" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    featured: false,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "sneaker",
      baseColor: "#EBE7DF",
      accentColor: "#C7A46A",
      leatherRoughness: 0.5,
      clearcoat: 0.1
    }
  },
  {
    id: "aurelius-cap-toe-dress-boot",
    name: "The Commandant Cap Toe Dress Boot",
    category: "Cap Toe Boots",
    categoryGroup: "boots",
    price: 8499,
    originalPrice: 10999,
    rating: 5.0,
    reviewsCount: 88,
    description: "Commanding 6-inch lace-up boot featuring speed hooks, hand-burnished toe cap, double welted sole, and plush padded ankle collar.",
    leatherType: "Horween Chromexcel Leather",
    construction: "360° Goodyear Storm Welt",
    sole: "Dainite Rubber Lug Sole",
    colors: [
      { name: "Oxblood Red", hex: "#52161A", primary3D: "#52161A", sole3D: "#1F080A" },
      { name: "Pitch Black", hex: "#141414", primary3D: "#141414", sole3D: "#080808" }
    ],
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    featured: true,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "boot",
      baseColor: "#52161A",
      accentColor: "#C7A46A",
      leatherRoughness: 0.3,
      clearcoat: 0.7,
      bootStyle: "captoe"
    }
  },
  {
    id: "aurelius-classic-derby-shoe",
    name: "The Regent Plain Toe Derby",
    category: "Derby Shoes",
    categoryGroup: "oxfords",
    price: 5899,
    originalPrice: 7299,
    rating: 4.8,
    reviewsCount: 91,
    description: "Versatile open-lacing Derby with smooth aniline leather finish, refined quarters, and all-day shock absorbing memory footbed.",
    leatherType: "Aniline Finished Calfskin",
    construction: "Blake Stitched",
    sole: "Leather Sole with Rubber Insert",
    colors: [
      { name: "Mahogany Brown", hex: "#472818", primary3D: "#472818", sole3D: "#1C0F09" },
      { name: "Classic Black", hex: "#141414", primary3D: "#141414", sole3D: "#090909" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
    featured: false,
    isNew: false,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "oxford",
      baseColor: "#472818",
      accentColor: "#C7A46A",
      leatherRoughness: 0.35,
      clearcoat: 0.5
    }
  },
  {
    id: "aurelius-slip-on-sneaker",
    name: "The Vantage Leather Slip-On Sneaker",
    category: "Slip-On Sneakers",
    categoryGroup: "sneakers",
    price: 4699,
    originalPrice: 5999,
    rating: 4.7,
    reviewsCount: 68,
    description: "Clean laceless design rendered in tumbled Italian calfskin with elastic side gores and lightweight rubber cupsole.",
    leatherType: "Tumbled Italian Calfskin",
    construction: "Stitched Cupsole",
    sole: "Low-Profile Italian Rubber",
    colors: [
      { name: "Matte Black", hex: "#1A1A1C", primary3D: "#1A1A1C", sole3D: "#121214" },
      { name: "Ivory White", hex: "#F2EFE9", primary3D: "#F2EFE9", sole3D: "#E2DDD3" }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    featured: false,
    isNew: false,
    isBestSeller: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    model3DParams: {
      type: "sneaker",
      baseColor: "#1A1A1C",
      accentColor: "#C7A46A",
      leatherRoughness: 0.5,
      clearcoat: 0.1
    }
  }
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    step: "01",
    title: "Sourcing & Tanning",
    subtitle: "Full-Grain French & Italian Leathers",
    desc: "We exclusively select top-tier 1% full-grain calfskins from historical tanneries in Tuscany and Alsace, vegetable-tanned over 60 days using natural oak bark and chest extracts."
  },
  {
    step: "02",
    title: "Hand-Lasting & Welt",
    subtitle: "Traditional Goodyear Welted Process",
    desc: "Over 200 distinct manual operations. Our master artisans hand-pull each upper over custom wooden lasts and stitch a leather welt to ensure decades of resoleability."
  },
  {
    step: "03",
    title: "Hand-Patina Finishing",
    subtitle: "Artisanal Layering of Dyes & Waxes",
    desc: "Every pair receives up to 12 coats of hand-applied natural waxes, spirit dyes, and champagne polishes to create a unique depth of tone found nowhere else."
  },
  {
    step: "04",
    title: "Ergonomic Balance",
    subtitle: "Cork Filling & Arch Support",
    desc: "A hot cork bed molds to your exact foot footprint over time, combined with a tempered steel shank for unmatched balance, stability, and zero foot fatigue."
  }
];

export const EDITORIAL_ARTICLES = [
  {
    id: 1,
    title: "THE ART OF THE PERFECT STEP",
    subtitle: "The Anatomy of a Bespoke Oxford",
    readTime: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
    quote: "A man's confidence begins where his feet touch the ground."
  },
  {
    id: 2,
    title: "FROM TUSCANY WITH PASSION",
    subtitle: "Inside Our Historic Florentine Atelier",
    readTime: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    quote: "True luxury is never rushed. It is forged through time, dedication, and mastery."
  }
];
