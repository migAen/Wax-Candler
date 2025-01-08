
export const fancyCombinations = [
  // Floral & Fruity (combining family_id 1 for Floral, and family_id 2 for Fruity)
  {
    id: 1,
    family_ids: [1, 2],
    name: 'Peach Blossom Delight',
    description: 'A sweet floral and fruity mix of Peach, Rose, and Jasmine',
    subcategories: [
      { family_id: 1, name: 'Fruity Floral', example_notes: ['Peach', 'Rose'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose', 'Jasmine'] },
      { family_id: 2, name: 'Stone Fruits', example_notes: ['Peach'] }
    ]
  },
  {
    id: 2,
    family_ids: [1, 2],
    name: 'Tropical Rose Garden',
    description: 'A refreshing blend of Mango, Coconut, Rose, and Gardenia',
    subcategories: [
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose', 'Gardenia'] },
      { family_id: 2, name: 'Tropical Fruits', example_notes: ['Mango', 'Coconut'] }
    ]
  },
  {
    id: 3,
    family_ids: [1, 2],
    name: 'Apple Jasmine Breeze',
    description: 'A crisp fusion of Apple, Jasmine, and Lily of the Valley',
    subcategories: [
      { family_id: 1, name: 'Floral (General)', example_notes: ['Jasmine', 'Lily of the Valley'] },
      { family_id: 2, name: 'Stone Fruits', example_notes: ['Apple'] }
    ]
  },
  {
    id: 4,
    family_ids: [1, 2],
    name: 'Fruity Garden Bloom',
    description: 'A vibrant blend of Strawberry, Rose, and Freesia',
    subcategories: [
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose'] },
      { family_id: 1, name: 'Powdery Floral', example_notes: ['Freesia'] },
      { family_id: 2, name: 'Berry', example_notes: ['Strawberry'] }
    ]
  },

  // Woody & Spicy (combining family_id 4 for Woody, and family_id 11 for Spicy)
  {
    id: 5,
    family_ids: [4, 11],
    name: 'Amber Spice Woods',
    description: 'A rich fusion of Amber, Cinnamon, and Sandalwood',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Sandalwood'] },
      { family_id: 4, name: 'Sweet Woody', example_notes: ['Amber'] },
      { family_id: 11, name: 'Warm Spicy', example_notes: ['Cinnamon'] }
    ]
  },
  {
    id: 6,
    family_ids: [4, 11],
    name: 'Smoldering Pine',
    description: 'A smoky, woody concoction of Pine, Cedarwood, and Black Pepper',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood', 'Pine'] },
      { family_id: 11, name: 'Piquant Spicy', example_notes: ['Black Pepper'] }
    ]
  },
  {
    id: 7,
    family_ids: [4, 11],
    name: 'Cedar Spice Rush',
    description: 'Cedarwood, Patchouli, and Cinnamon, for a deep, spicy, and woody aroma',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood'] },
      { family_id: 4, name: 'Sweet Woody', example_notes: ['Patchouli'] },
      { family_id: 11, name: 'Warm Spicy', example_notes: ['Cinnamon'] }
    ]
  },
  {
    id: 8,
    family_ids: [4, 11],
    name: 'Warming Sandalwood Chai',
    description: 'A soothing mix of Sandalwood, Cardamom, and Nutmeg',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Sandalwood'] },
      { family_id: 11, name: 'Warm Spicy', example_notes: ['Cardamom', 'Nutmeg'] }
    ]
  },

  // Citrus & Floral (combining family_id 2 for Fruity, and family_id 1 for Floral)
  {
    id: 9,
    family_ids: [2, 1],
    name: 'Citrus Blossom Serenade',
    description: 'Bergamot, Lemon, and Tuberose create a zesty yet elegant floral aroma',
    subcategories: [
      { family_id: 2, name: 'Citrus', example_notes: ['Bergamot', 'Lemon'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Tuberose'] }
    ]
  },
  {
    id: 10,
    family_ids: [2, 1],
    name: 'Lemon Rose Mist',
    description: 'A bright and fresh mix of Lemon, Rose, and Violet',
    subcategories: [
      { family_id: 2, name: 'Citrus', example_notes: ['Lemon'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose'] },
      { family_id: 12, name: 'Floral Powdery', example_notes: ['Violet'] }
    ]
  },
  {
    id: 11,
    family_ids: [2, 1],
    name: 'Orange Jasmine Dream',
    description: 'A delicate combination of Orange, Jasmine, and Lavender',
    subcategories: [
      { family_id: 2, name: 'Citrus', example_notes: ['Orange'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Jasmine', 'Lavender'] }
    ]
  },
  {
    id: 12,
    family_ids: [2, 1],
    name: 'Zesty Floral Breeze',
    description: 'Grapefruit, Freesia, and Ylang-Ylang, for a lively, fragrant atmosphere',
    subcategories: [
      { family_id: 2, name: 'Citrus', example_notes: ['Grapefruit'] },
      { family_id: 1, name: 'Powdery Floral', example_notes: ['Freesia'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Ylang-Ylang'] }
    ]
  },

  // Gourmand & Oriental (combining family_id 3 for Oriental, and family_id 5 for Amber)
  {
    id: 13,
    family_ids: [3, 5],
    name: 'Vanilla Spice Dream',
    description: 'A sweet, comforting blend of Vanilla, Cinnamon, and Clove',
    subcategories: [
      { family_id: 3, name: 'Spicy Oriental', example_notes: ['Cinnamon', 'Clove'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Vanilla'] }
    ]
  },
  {
    id: 14,
    family_ids: [3, 5],
    name: 'Coffee Amber Luxe',
    description: 'A rich and indulgent mix of Coffee, Amber, and Chocolate',
    subcategories: [
      { family_id: 3, name: 'Gourmand', example_notes: ['Coffee', 'Chocolate'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] }
    ]
  },
  {
    id: 15,
    family_ids: [3, 5],
    name: 'Caramel Woods',
    description: 'A warm, decadent fusion of Caramel, Sandalwood, and Tonka Bean',
    subcategories: [
      { family_id: 3, name: 'Gourmand', example_notes: ['Caramel'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Tonka Bean'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Sandalwood'] }
    ]
  },
  {
    id: 16,
    family_ids: [3, 5],
    name: 'Almond Spice Essence',
    description: 'A creamy blend of Almond, Cinnamon, and Vanilla',
    subcategories: [
      { family_id: 3, name: 'Spicy Oriental', example_notes: ['Cinnamon'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Vanilla'] }
    ]
  },

  // Woody & Fresh Green (combining family_id 4 for Woody, and family_id 10 for Green)
  {
    id: 17,
    family_ids: [4, 10],
    name: 'Cedarleaf Essence',
    description: 'A fresh and woody blend of Cedar, Pine, and Green Leaves',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedar', 'Pine'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Green Leaves'] }
    ]
  },
  {
    id: 18,
    family_ids: [4, 10],
    name: 'Herbal Cedarwood',
    description: 'An earthy fusion of Rosemary, Cedarwood, and Sage',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Rosemary', 'Sage'] }
    ]
  },
  {
    id: 19,
    family_ids: [4, 10],
    name: 'Mossy Woodlands',
    description: 'A vibrant blend of Oakmoss, Patchouli, and Vetiver',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Oakmoss', 'Vetiver'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Patchouli'] }
    ]
  },
  {
    id: 20,
    family_ids: [4, 10],
    name: 'Forest Dew',
    description: 'A refreshing combination of Moss, Pine, and Fresh Grass',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Pine'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Moss', 'Fresh Grass'] }
    ]
  },

  // Amber & Floral (combining family_id 5 for Amber, and family_id 1 for Floral)
  {
    id: 21,
    family_ids: [5, 1],
    name: 'Warm Floral Embrace',
    description: 'A luxurious blend of Amber, Rose, and Jasmine',
    subcategories: [
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose', 'Jasmine'] }
    ]
  },
  {
    id: 22,
    family_ids: [5, 1],
    name: 'Vanilla Garden Blossom',
    description: 'A comforting blend of Vanilla, Tuberose, and Amber',
    subcategories: [
      { family_id: 5, name: 'Warm Amber', example_notes: ['Vanilla'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Tuberose'] }
    ]
  },
  {
    id: 23,
    family_ids: [5, 1],
    name: 'Spicy Amber Bloom',
    description: 'Amber, Cinnamon, and Rose, creating a warm floral touch',
    subcategories: [
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose'] },
      { family_id: 11, name: 'Warm Spicy', example_notes: ['Cinnamon'] }
    ]
  },
  {
    id: 24,
    family_ids: [5, 1],
    name: 'Balsamic Rosewood',
    description: 'Rosewood, Amber, and Vanilla creating a sweet, woody floral balance',
    subcategories: [
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber', 'Vanilla'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rosewood'] }
    ]
  },

  // Aquatic & Green (combining family_id 9 for Aquatic, and family_id 10 for Green)
  {
    id: 25,
    family_ids: [9, 10],
    name: 'Fresh Ocean Breeze',
    description: 'A refreshing combination of Sea Breeze, Moss, and Fern',
    subcategories: [
      { family_id: 9, name: 'Aquatic', example_notes: ['Sea Breeze'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Moss', 'Fern'] }
    ]
  },
  {
    id: 26,
    family_ids: [9, 10],
    name: 'Oceanic Greenery',
    description: 'A fresh aquatic and green blend of Seaweed, Green Leaves, and Marine Notes',
    subcategories: [
      { family_id: 9, name: 'Aquatic', example_notes: ['Seaweed'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Green Leaves'] }
    ]
  },
  {
    id: 27,
    family_ids: [9, 10],
    name: 'Citrus Herb Waters',
    description: 'A lively mix of Lime, Basil, and Sea Breeze',
    subcategories: [
      { family_id: 9, name: 'Aquatic', example_notes: ['Sea Breeze'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Basil'] },
      { family_id: 2, name: 'Citrus', example_notes: ['Lime'] }
    ]
  },
  {
    id: 28,
    family_ids: [9, 10],
    name: 'Green Sea Storm',
    description: 'A vibrant fusion of Seaweed, Fresh Grass, and Sage',
    subcategories: [
      { family_id: 9, name: 'Aquatic', example_notes: ['Seaweed'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Fresh Grass', 'Sage'] }
    ]
  },

  // Leather & Woody (combining family_id 8 for Leather, and family_id 4 for Woody)
  {
    id: 29,
    family_ids: [8, 4],
    name: 'Smoky Leather Woods',
    description: 'A deep and smoky mix of Leather, Birch Tar, and Cedarwood',
    subcategories: [
      { family_id: 8, name: 'Leather', example_notes: ['Leather'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Birch Tar', 'Cedarwood'] }
    ]
  },
  {
    id: 30,
    family_ids: [8, 4],
    name: 'Tobacco and Oak',
    description: 'A rich blend of Tobacco, Oak, and Patchouli',
    subcategories: [
      { family_id: 8, name: 'Leather', example_notes: ['Tobacco'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Oak', 'Patchouli'] }
    ]
  },
  {
    id: 31,
    family_ids: [8, 4],
    name: 'Woody Suede',
    description: 'Suede, Leather, and Vetiver, for a refined woody aroma',
    subcategories: [
      { family_id: 8, name: 'Leather', example_notes: ['Suede', 'Leather'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Vetiver'] }
    ]
  },
  {
    id: 32,
    family_ids: [8, 4],
    name: 'Rustic Leather',
    description: 'A bold combination of Leather, Amber, and Sandalwood',
    subcategories: [
      { family_id: 8, name: 'Leather', example_notes: ['Leather'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Sandalwood'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] }
    ]
  },
  {
    id: 33,
    family_ids: [1, 2],
    name: 'Citrus Blossom Bouquet',
    description: 'A lively fusion of Lemon, Orange Blossom, and Jasmine',
    subcategories: [
      { family_id: 2, name: 'Citrus', example_notes: ['Lemon', 'Orange'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Jasmine'] },
    ]
  },
  {
    id: 34,
    family_ids: [1, 2],
    name: 'Tropical Floral Medley',
    description: 'A warm blend of Mango, Rose, and Hibiscus',
    subcategories: [
      { family_id: 2, name: 'Tropical Fruits', example_notes: ['Mango'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Hibiscus'] }
    ]
  },
  {
    id: 35,
    family_ids: [4, 5],
    name: 'Amber Cedar Essence',
    description: 'A smooth blend of Amber, Cedarwood, and Tonka Bean',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Tonka Bean'] }
    ]
  },
  {
    id: 36,
    family_ids: [4, 5],
    name: 'Sandalwood Amber Bliss',
    description: 'A creamy and comforting mix of Sandalwood, Amber, and Vanilla',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Sandalwood'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber', 'Vanilla'] }
    ]
  },
  {
    id: 37,
    family_ids: [1, 5],
    name: 'Amber Rose Essence',
    description: 'A warm, floral composition of Amber and Rose',
    subcategories: [
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] },
      { family_id: 1, name: 'Floral (General)', example_notes: ['Rose'] }
    ]
  },
  {
    id: 38,
    family_ids: [1, 5],
    name: 'Jasmine Amber Glow',
    description: 'A luxurious blend of Jasmine, Amber, and Vanilla',
    subcategories: [
      { family_id: 1, name: 'Floral (General)', example_notes: ['Jasmine'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber', 'Vanilla'] }
    ]
  },
  {
    id: 39,
    family_ids: [4, 11],
    name: 'Spicy Oakwood',
    description: 'A bold fusion of Oak, Cinnamon, and Patchouli',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Oak'] },
      { family_id: 11, name: 'Warm Spicy', example_notes: ['Cinnamon'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Patchouli'] }
    ]
  },
  {
    id: 40,
    family_ids: [4, 11],
    name: 'Cedarwood Spice',
    description: 'A deep and aromatic mix of Cedarwood, Nutmeg, and Black Pepper',
    subcategories: [
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood'] },
      { family_id: 11, name: 'Warm Spicy', example_notes: ['Nutmeg'] },
      { family_id: 11, name: 'Piquant Spicy', example_notes: ['Black Pepper'] }
    ]
  },
  {
    id: 41,
    family_ids: [3, 5],
    name: 'Caramel Amber Dream',
    description: 'A rich blend of Caramel, Amber, and Vanilla',
    subcategories: [
      { family_id: 3, name: 'Gourmand', example_notes: ['Caramel'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber', 'Vanilla'] }
    ]
  },
  {
    id: 42,
    family_ids: [3, 5],
    name: 'Cinnamon Amber Delight',
    description: 'A sweet and spicy blend of Cinnamon, Amber, and Tonka Bean',
    subcategories: [
      { family_id: 3, name: 'Spicy Oriental', example_notes: ['Cinnamon'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] },
      { family_id: 5, name: 'Warm Amber', example_notes: ['Tonka Bean'] }
    ]
  },
  {
    id: 43,
    family_ids: [9, 10],
    name: 'Sea Breeze Meadow',
    description: 'A fresh and breezy combination of Sea Breeze, Mint, and Fresh Grass',
    subcategories: [
      { family_id: 9, name: 'Aquatic', example_notes: ['Sea Breeze'] },
      { family_id: 10, name: 'Herbaceous', example_notes: ['Mint'] },
      { family_id: 10, name: 'Grassy', example_notes: ['Fresh Cut Grass'] }
    ]
  },
  {
    id: 44,
    family_ids: [9, 10],
    name: 'Oceanic Green Harmony',
    description: 'A fresh aquatic and green blend of Saltwater, Green Leaves, and Fern',
    subcategories: [
      { family_id: 9, name: 'Aquatic', example_notes: ['Saltwater'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Green Leaves'] },
      { family_id: 10, name: 'Green Fougere', example_notes: ['Fern'] }
    ]
  },
  {
    id: 45,
    family_ids: [8, 4],
    name: 'Smoky Birch Leather',
    description: 'A smoky and earthy blend of Birch Tar, Leather, and Oakmoss',
    subcategories: [
      { family_id: 8, name: 'Classic Leather', example_notes: ['Leather'] },
      { family_id: 4, name: 'Dry Woody', example_notes: ['Birch'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Oakmoss'] }
    ]
  },
  {
    id: 46,
    family_ids: [8, 4],
    name: 'Leather Cedar Essence',
    description: 'A refined blend of Leather, Cedarwood, and Vetiver',
    subcategories: [
      { family_id: 8, name: 'Classic Leather', example_notes: ['Leather'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood'] },
      { family_id: 4, name: 'Woody (General)', example_notes: ['Vetiver'] }
    ]
  },  
    {
      id: 47,
      family_ids: [1, 2],
      name: 'Floral Citrus Bouquet',
      description: 'A zesty yet delicate mix of Rose, Lemon, and Jasmine',
      subcategories: [
        { family_id: 1, name: 'Floral (General)', example_notes: ['Rose', 'Jasmine'] },
        { family_id: 2, name: 'Citrus', example_notes: ['Lemon'] }
      ]
    },
    {
      id: 48,
      family_ids: [2, 1],
      name: 'Tropical Floral Medley',
      description: 'A vibrant blend of Mango, Rose, and Tuberose',
      subcategories: [
        { family_id: 2, name: 'Tropical Fruits', example_notes: ['Mango'] },
        { family_id: 1, name: 'Floral (General)', example_notes: ['Rose', 'Tuberose'] }
      ]
    },
    {
      id: 49,
      family_ids: [4, 5],
      name: 'Sandalwood Spice Dream',
      description: 'A spicy and creamy fusion of Sandalwood, Cinnamon, and Vanilla',
      subcategories: [
        { family_id: 4, name: 'Woody (General)', example_notes: ['Sandalwood'] },
        { family_id: 11, name: 'Warm Spicy', example_notes: ['Cinnamon'] },
        { family_id: 5, name: 'Warm Amber', example_notes: ['Vanilla'] }
      ]
    },
    {
      id: 50,
      family_ids: [4, 5],
      name: 'Amber Rose Bloom',
      description: 'A soothing and floral blend of Amber and Rose with a touch of Tonka Bean',
      subcategories: [
        { family_id: 5, name: 'Warm Amber', example_notes: ['Amber'] },
        { family_id: 1, name: 'Floral (General)', example_notes: ['Rose'] },
        { family_id: 5, name: 'Warm Amber', example_notes: ['Tonka Bean'] }
      ]
    },
    {
      id: 51,
      family_ids: [3, 11],
      name: 'Cinnamon Spice Amber',
      description: 'A rich and warming blend of Cinnamon, Amber, and Tonka Bean',
      subcategories: [
        { family_id: 3, name: 'Spicy Oriental', example_notes: ['Cinnamon'] },
        { family_id: 5, name: 'Warm Amber', example_notes: ['Amber', 'Tonka Bean'] }
      ]
    },
    {
      id: 52,
      family_ids: [2, 10],
      name: 'Green Citrus Breeze',
      description: 'A fresh and citrusy mix of Lime, Mint, and Fresh Grass',
      subcategories: [
        { family_id: 2, name: 'Citrus', example_notes: ['Lime'] },
        { family_id: 10, name: 'Herbaceous', example_notes: ['Mint'] },
        { family_id: 10, name: 'Grassy', example_notes: ['Fresh Cut Grass'] }
      ]
    },
    {
      id: 53,
      family_ids: [3, 5],
      name: 'Caramel Amber Delight',
      description: 'A sweet and decadent combination of Caramel, Amber, and Vanilla',
      subcategories: [
        { family_id: 3, name: 'Gourmand', example_notes: ['Caramel'] },
        { family_id: 5, name: 'Warm Amber', example_notes: ['Amber', 'Vanilla'] }
      ]
    },
    {
      id: 54,
      family_ids: [4, 8],
      name: 'Birch Leather Wood',
      description: 'A rugged mix of Birch Tar, Leather, and Oakmoss',
      subcategories: [
        { family_id: 8, name: 'Classic Leather', example_notes: ['Leather'] },
        { family_id: 4, name: 'Dry Woody', example_notes: ['Birch'] },
        { family_id: 4, name: 'Woody (General)', example_notes: ['Oakmoss'] }
      ]
    },
    {
      id: 55,
      family_ids: [9, 10],
      name: 'Oceanic Green Escape',
      description: 'A refreshing aquatic and green blend of Sea Breeze, Pine, and Fern',
      subcategories: [
        { family_id: 9, name: 'Aquatic', example_notes: ['Sea Breeze'] },
        { family_id: 10, name: 'Woody Green', example_notes: ['Pine'] },
        { family_id: 10, name: 'Green Fougere', example_notes: ['Fern'] }
      ]
    },
    {
      id: 56,
      family_ids: [7, 4],
      name: 'Woody Chypre',
      description: 'A complex and earthy blend of Oakmoss, Vetiver, and Patchouli',
      subcategories: [
        { family_id: 7, name: 'Woody Chypre', example_notes: ['Vetiver', 'Oakmoss'] },
        { family_id: 4, name: 'Woody (General)', example_notes: ['Patchouli'] }
      ]
    },
    {
      id: 57,
      family_ids: [2, 10],
      name: 'Fruity Green Serenity',
      description: 'A fresh and tangy fusion of Peach, Tomato Leaf, and Green Leaves',
      subcategories: [
        { family_id: 2, name: 'Stone Fruits', example_notes: ['Peach'] },
        { family_id: 10, name: 'Vegetal', example_notes: ['Tomato Leaf'] },
        { family_id: 10, name: 'Green Fougere', example_notes: ['Green Leaves'] }
      ]
    },
    {
      id: 58,
      family_ids: [12, 4],
      name: 'Powdery Woody Breeze',
      description: 'A delicate yet earthy mix of Iris, Violet, and Vetiver',
      subcategories: [
        { family_id: 12, name: 'Powdery', example_notes: ['Iris', 'Violet'] },
        { family_id: 4, name: 'Woody (General)', example_notes: ['Vetiver'] }
      ]
    },
    {
      id: 59,
      family_ids: [3, 4],
      name: 'Gourmand Woods',
      description: 'A sweet yet grounded blend of Vanilla, Tonka Bean, and Cedarwood',
      subcategories: [
        { family_id: 3, name: 'Gourmand', example_notes: ['Vanilla', 'Tonka Bean'] },
        { family_id: 4, name: 'Woody (General)', example_notes: ['Cedarwood'] }
      ]
    },
    {
      id: 60,
      family_ids: [8, 11],
      name: 'Tobacco Leather Spice',
      description: 'A smoky and spicy combination of Tobacco, Leather, and Black Pepper',
      subcategories: [
        { family_id: 8, name: 'Tobacco Leather', example_notes: ['Tobacco', 'Leather'] },
        { family_id: 11, name: 'Piquant Spicy', example_notes: ['Black Pepper'] }
      ]
    },
    {
      id: 61,
      family_ids: [12, 13],
      name: 'Balsamic Powdery Harmony',
      description: 'A smooth fusion of Benzoin, Tonka Bean, and Iris',
      subcategories: [
        { family_id: 13, name: 'Sweet Balsamic', example_notes: ['Benzoin', 'Tonka Bean'] },
        { family_id: 12, name: 'Powdery', example_notes: ['Iris'] }
      ]
    },
    {
      id: 62,
      family_ids: [6, 13],
      name: 'Spicy Balsamic Fusion',
      description: 'A deep and aromatic blend of Cinnamon, Myrrh, and Patchouli',
      subcategories: [
        { family_id: 11, name: 'Warm Spicy', example_notes: ['Cinnamon'] },
        { family_id: 13, name: 'Resinous Balsamic', example_notes: ['Myrrh'] },
        { family_id: 4, name: 'Woody (General)', example_notes: ['Patchouli'] }
      ]
    },
    {
      id: 63,
      family_ids: [1, 10],
      name: 'Floral Green Breeze',
      description: 'A fresh and vibrant fusion of Muguet, Freesia, and Fresh Grass',
      subcategories: [
        { family_id: 1, name: 'Green Floral', example_notes: ['Muguet', 'Freesia'] },
        { family_id: 10, name: 'Grassy', example_notes: ['Fresh Cut Grass'] }
      ]
    }
  ];
  
