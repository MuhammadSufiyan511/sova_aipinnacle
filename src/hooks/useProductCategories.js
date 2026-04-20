import { useTranslation } from 'react-i18next'

export const translateNested = (t, item) => t(`admin.addProductOverview.nested.${item.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`, item)

export const buildCategoryConfig = (t) => ({
  clothing: {
    label: t('admin.addProductOverview.categories.clothing'),
    subcategories: [
      {
        value: 'menswear',
        label: t('admin.addProductOverview.subcategories.menswear'),
        nested: ['Formal Shirts', 'T-Shirts', 'Polos', 'Trousers', 'Jeans', 'Suits & Blazers', 'Nightwear'].map(i => translateNested(t, i))
      },
      {
        value: 'womenswear',
        label: t('admin.addProductOverview.subcategories.womenswear'),
        nested: ['Dresses', 'Tops & Blouses', 'Skirts', 'Ethnic Wear', 'Lingerie', 'Loungewear'].map(i => translateNested(t, i))
      },
      {
        value: 'kids-wear',
        label: t('admin.addProductOverview.subcategories.kids-wear'),
        nested: ['Infant (0-2y)', 'Toddler (2-5y)', 'Boys Fashion', 'Girls Fashion', 'School Uniforms'].map(i => translateNested(t, i))
      },
      {
        value: 'abayas',
        label: t('admin.addProductOverview.subcategories.abayas'),
        nested: ['Casual Abayas', 'Formal/Evening Abayas', 'Bridal Abayas', 'Butterfly Abayas', 'Bisht Abayas', 'Kimonos', 'Kaftans'].map(i => translateNested(t, i))
      },
      {
        value: 'traditional-wear',
        label: t('admin.addProductOverview.subcategories.traditional-wear'),
        nested: ['Shalwar Kameez', 'Kurta Pajama', 'Sherwani', 'Sarees', 'Lehengas'].map(i => translateNested(t, i))
      },
      {
        value: 'sportswear',
        label: t('admin.addProductOverview.subcategories.sportswear'),
        nested: ['Gym & Training', 'Running Gear', 'Football Kits', 'Cricket Gear', 'Yoga & Pilates'].map(i => translateNested(t, i))
      },
      {
        value: 'outerwear',
        label: t('admin.addProductOverview.subcategories.outerwear'),
        nested: ['Leather Jackets', 'Puffer Jackets', 'Trench Coats', 'Windbreakers', 'Hoodies'].map(i => translateNested(t, i))
      },
      {
        value: 'footwear',
        label: t('admin.addProductOverview.subcategories.footwear'),
        nested: ['Formal Shoes', 'Sneakers', 'Sandals & Flip-flops', 'Boots', 'Heels'].map(i => translateNested(t, i))
      },
      {
        value: 'accessories',
        label: t('admin.addProductOverview.subcategories.accessories'),
        nested: ['Belts', 'Hats & Caps', 'Ties & Bowties', 'Scarves', 'Gloves'].map(i => translateNested(t, i))
      },
    ],
    dynamicFields: {
      menswear: [{ key: 'size', type: 'select', options: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'] }, { key: 'color', type: 'text' }, { key: 'fabric', type: 'select', options: ['Cotton', 'Polyester', 'Wool', 'Linen', 'Custom'] }, { key: 'fit', type: 'select', options: ['Slim Fit', 'Regular Fit', 'Loose Fit'] }],
      womenswear: [{ key: 'size', type: 'select', options: ['XS', 'S', 'M', 'L', 'XL', 'Custom'] }, { key: 'color', type: 'text' }, { key: 'fabric', type: 'select', options: ['Silk', 'Cotton', 'Chiffon', 'Velvet', 'Custom'] }, { key: 'pattern', type: 'text' }],
      'kids-wear': [{ key: 'ageRange', type: 'select', options: ['0-12m', '1-3y', '4-7y', '8-12y'] }, { key: 'gender', type: 'select', options: ['Boy', 'Girl', 'Unisex'] }, { key: 'material', type: 'text' }],
      abayas: [{ key: 'size', type: 'select', options: ['50', '52', '54', '56', '58', '60', 'Custom'] }, { key: 'color', type: 'text' }, { key: 'material', type: 'select', options: ['Nidha', 'Linen', 'Cyrpe', 'Silk', 'Custom'] }, { key: 'workType', type: 'text', placeholder: 'e.g. Embroidery, Stone Work' }],
      custom: [{ key: 'size', type: 'text' }, { key: 'color', type: 'text' }, { key: 'material', type: 'text' }],
    },
  },
  jewellery: {
    label: t('admin.addProductOverview.categories.jewellery'),
    subcategories: [
      {
        value: 'gold-jewelry',
        label: t('admin.addProductOverview.subcategories.gold-jewelry'),
        nested: ['Engagement Rings', 'Necklaces', 'Bangles', 'Earrings', 'Gold Coins/Bars'].map(i => translateNested(t, i))
      },
      {
        value: 'silver-jewelry',
        label: t('admin.addProductOverview.subcategories.silver-jewelry'),
        nested: ['Rings', 'Chains', 'Bracelets', 'Anklets'].map(i => translateNested(t, i))
      },
      {
        value: 'diamond-precious',
        label: t('admin.addProductOverview.subcategories.diamond-precious'),
        nested: ['Solitaire Rings', 'Diamond Sets', 'Loose Gemstones', 'Birthstones'].map(i => translateNested(t, i))
      },
      {
        value: 'watches',
        label: t('admin.addProductOverview.subcategories.watches'),
        nested: ['Automatic Watches', 'Quartz Watches', 'Chrono Watches', 'Smart Luxury Watches'].map(i => translateNested(t, i))
      },
      {
        value: 'rings',
        label: t('admin.addProductOverview.subcategories.rings'),
        nested: ['Wedding Bands', 'Fashion Rings', 'Couple Rings'].map(i => translateNested(t, i))
      },
      {
        value: 'necklaces',
        label: t('admin.addProductOverview.subcategories.necklaces'),
        nested: ['Chokers', 'Long Chains', 'Lockets'].map(i => translateNested(t, i))
      },
      {
        value: 'bracelets',
        label: t('admin.addProductOverview.subcategories.bracelets'),
        nested: ['Cuffs', 'Charm Bracelets', 'Tennis Bracelets'].map(i => translateNested(t, i))
      },
      {
        value: 'earrings',
        label: t('admin.addProductOverview.subcategories.earrings'),
        nested: ['Studs', 'Hoops', 'Drops', 'Jhumkas'].map(i => translateNested(t, i))
      },
    ],
    dynamicFields: {
      'gold-jewelry': [{ key: 'karat', type: 'select', options: ['18K', '21K', '22K', '24K'] }, { key: 'weight', type: 'text', placeholder: 'e.g. 10g' }, { key: 'makingCharge', type: 'text' }],
      'diamond-precious': [{ key: 'clarity', type: 'select', options: ['VVS', 'VS', 'SI', 'I'] }, { key: 'colorGrade', type: 'select', options: ['D-F', 'G-J', 'K-M'] }, { key: 'caratWeight', type: 'text' }, { key: 'certification', type: 'text' }],
      watches: [{ key: 'movement', type: 'select', options: ['Automatic', 'Quartz', 'Manual'] }, { key: 'caseMaterial', type: 'text' }, { key: 'strapMaterial', type: 'text' }, { key: 'waterResistance', type: 'text' }],
      rings: [{ key: 'ringSize', type: 'select', options: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'Custom'] }, { key: 'metal', type: 'select', options: ['Gold', 'Silver', 'Platinum', 'Rose Gold'] }, { key: 'gemstone', type: 'text' }],
      custom: [{ key: 'material', type: 'text' }, { key: 'weight', type: 'text' }, { key: 'dimensions', type: 'text' }]
    },
  },
  electronics: {
    label: t('admin.addProductOverview.categories.electronics'),
    subcategories: [
      {
        value: 'mobile-phones',
        label: t('admin.addProductOverview.subcategories.mobile-phones'),
        nested: ['Smartphones', 'Feature Phones', 'Refurbished Phones', 'Mobile Accessories'].map(i => translateNested(t, i))
      },
      {
        value: 'computers-laptops',
        label: t('admin.addProductOverview.subcategories.computers-laptops'),
        nested: ['Laptops', 'Desktops', 'Monitors', 'PC Components', 'Networking Devices'].map(i => translateNested(t, i))
      },
      {
        value: 'audio-headphones',
        label: t('admin.addProductOverview.subcategories.audio-headphones'),
        nested: ['Wireless Earbuds', 'Over-Ear Headphones', 'Bluetooth Speakers', 'Home Theater'].map(i => translateNested(t, i))
      },
      {
        value: 'home-appliances',
        label: t('admin.addProductOverview.subcategories.home-appliances'),
        nested: ['Refrigerators', 'Washing Machines', 'Microwaves', 'Air Conditioners', 'Small Appliances'].map(i => translateNested(t, i))
      },
      {
        value: 'cameras',
        label: t('admin.addProductOverview.subcategories.cameras'),
        nested: ['DSLR/Mirrorless', 'Action Cameras', 'Security Cameras', 'Drones'].map(i => translateNested(t, i))
      },
      {
        value: 'gaming',
        label: t('admin.addProductOverview.subcategories.gaming'),
        nested: ['Consoles', 'Gaming PCs', 'Video Games', 'Gaming Accessories'].map(i => translateNested(t, i))
      },
      {
        value: 'wearables',
        label: t('admin.addProductOverview.subcategories.wearables'),
        nested: ['Smartwatches', 'Fitness Trackers', 'VR Headsets'].map(i => translateNested(t, i))
      },
    ],
    dynamicFields: {
      'mobile-phones': [{ key: 'brand', type: 'text' }, { key: 'storage', type: 'select', options: ['64GB', '128GB', '256GB', '512GB', '1TB'] }, { key: 'ram', type: 'select', options: ['4GB', '6GB', '8GB', '12GB', '16GB'] }, { key: 'color', type: 'text' }, { key: 'warranty', type: 'select', options: ['1 Year', '2 Years', 'None'] }],
      'computers-laptops': [{ key: 'processor', type: 'text' }, { key: 'ram', type: 'select', options: ['8GB', '16GB', '32GB', '64GB'] }, { key: 'storage', type: 'text', placeholder: 'e.g. 512GB SSD' }, { key: 'gpu', type: 'text' }],
      'audio-headphones': [{ key: 'connectivity', type: 'select', options: ['Bluetooth', 'Wired', 'Both'] }, { key: 'batteryLife', type: 'text', placeholder: 'e.g. 24 Hours' }, { key: 'noiseCancellation', type: 'select', options: ['Yes', 'No'] }],
      'home-appliances': [{ key: 'capacity', type: 'text', placeholder: 'e.g. 300 Liters, 7 KG' }, { key: 'energyRating', type: 'select', options: ['3 Star', '4 Star', '5 Star'] }, { key: 'powerConsumption', type: 'text' }, { key: 'warranty', type: 'text' }],
      custom: [{ key: 'brand', type: 'text' }, { key: 'model', type: 'text' }, { key: 'warranty', type: 'text' }]
    },
  },
  toys: {
    label: t('admin.addProductOverview.categories.toys'),
    subcategories: [
      {
        value: 'action-figures',
        label: t('admin.addProductOverview.subcategories.action-figures'),
        nested: ['Superheroes', 'Anime', 'Movie Characters', 'Playsets'].map(i => translateNested(t, i))
      },
      {
        value: 'educational',
        label: t('admin.addProductOverview.subcategories.educational'),
        nested: ['STEM Toys', 'Puzzles', 'Building Blocks', 'Learning Games'].map(i => translateNested(t, i))
      },
      {
        value: 'board-games',
        label: t('admin.addProductOverview.subcategories.board-games'),
        nested: ['Strategy Games', 'Family Games', 'Card Games', 'Party Games'].map(i => translateNested(t, i))
      },
      {
        value: 'outdoor-play',
        label: t('admin.addProductOverview.subcategories.outdoor-play'),
        nested: ['Ride-ons & Bikes', 'Sports Toys', 'Water Guns', 'Kites'].map(i => translateNested(t, i))
      },
      {
        value: 'dolls-soft-toys',
        label: t('admin.addProductOverview.subcategories.dolls-soft-toys'),
        nested: ['Fashion Dolls', 'Plush Animals', 'Dollhouses'].map(i => translateNested(t, i))
      },
    ],
    dynamicFields: {
      educational: [{ key: 'ageGroup', type: 'select', options: ['0-3y', '4-7y', '8-12y', '13+'] }, { key: 'skillType', type: 'select', options: ['Math', 'Science', 'Motor Skills', 'Logic'] }],
      'board-games': [{ key: 'players', type: 'text', placeholder: 'e.g. 2-4 Players' }, { key: 'playTime', type: 'text', placeholder: 'e.g. 30 mins' }, { key: 'ageGroup', type: 'select', options: ['Kids', 'Teens', 'Adults', 'Family'] }],
      custom: [{ key: 'ageGroup', type: 'select', options: ['0-3y', '4-7y', '8-12y', '13+'] }, { key: 'material', type: 'text' }, { key: 'safetyWarning', type: 'text' }]
    },
  },
  other: {
    label: t('admin.addProductOverview.categories.other'),
    subcategories: [{ value: 'custom', label: t('admin.addProductOverview.subcategories.custom'), nested: [] }],
    dynamicFields: {
      custom: [{ key: 'customAttribute1', type: 'text', placeholder: 'Attribute Name' }, { key: 'customAttribute2', type: 'text', placeholder: 'Attribute Name' }]
    }
  }
})

export function useProductCategories() {
  const { t } = useTranslation()
  return buildCategoryConfig(t)
}
