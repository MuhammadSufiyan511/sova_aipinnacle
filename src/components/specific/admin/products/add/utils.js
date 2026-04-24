import { Info, Layers, DollarSign } from 'lucide-react'

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
      {
        value: 'costume-jewelry',
        label: t('admin.addProductOverview.subcategories.costume-jewelry'),
        nested: ['Bohemian', 'Antique Style', 'Modern Minimalist'].map(i => translateNested(t, i))
      },
    ],
    dynamicFields: {
      'gold-jewelry': [{ key: 'purity', type: 'select', options: ['24K', '22K', '21K', '18K'] }, { key: 'weight', type: 'text' }, { key: 'hallmark', type: 'select', options: ['Yes', 'No'] }],
      watches: [{ key: 'brand', type: 'text' }, { key: 'movement', type: 'select', options: ['Automatic', 'Quartz', 'Manual', 'Solar'] }, { key: 'strapMaterial', type: 'select', options: ['Leather', 'Steel', 'Rubber', 'Gold'] }],
      custom: [{ key: 'purity', type: 'text' }, { key: 'weight', type: 'text' }],
    },
  },
  electronics: {
    label: t('admin.addProductOverview.categories.electronics'),
    subcategories: [
      {
        value: 'smartphones',
        label: t('admin.addProductOverview.subcategories.smartphones'),
        nested: ['Android Phones', 'iPhones', 'Budget Phones', 'Tablets', 'Foldables'].map(i => translateNested(t, i))
      },
      {
        value: 'laptops-pc',
        label: t('admin.addProductOverview.subcategories.laptops-pc'),
        nested: ['Gaming Laptops', 'Ultrabooks', 'Business Laptops', 'Desktops', 'Workstations'].map(i => translateNested(t, i))
      },
      {
        value: 'audio-video',
        label: t('admin.addProductOverview.subcategories.audio-video'),
        nested: ['Wireless Earbuds', 'Over-ear Headphones', 'Bluetooth Speakers', 'Home Theater', 'Microphones'].map(i => translateNested(t, i))
      },
      {
        value: 'photography',
        label: t('admin.addProductOverview.subcategories.photography'),
        nested: ['DSLRs', 'Mirrorless', 'Action Cameras', 'Drones', 'Lenses'].map(i => translateNested(t, i))
      },
      {
        value: 'gaming',
        label: t('admin.addProductOverview.subcategories.gaming'),
        nested: ['Consoles', 'PC Components', 'Gaming Keyboards', 'Gaming Mice', 'Monitors'].map(i => translateNested(t, i))
      },
      {
        value: 'smart-home',
        label: t('admin.addProductOverview.subcategories.smart-home'),
        nested: ['Smart Lighting', 'Security Cameras', 'Smart Locks', 'Smart Speakers'].map(i => translateNested(t, i))
      },
      {
        value: 'wearables',
        label: t('admin.addProductOverview.subcategories.wearables'),
        nested: ['Fitness Trackers', 'Smartwatches', 'VR Headsets'].map(i => translateNested(t, i))
      },
      {
        value: 'accessories',
        label: t('admin.addProductOverview.subcategories.accessories'),
        nested: ['Power Banks', 'USB Cables', 'Laptop Chargers', 'Memory Cards'].map(i => translateNested(t, i))
      },
    ],
    dynamicFields: {
      smartphones: [{ key: 'brand', type: 'text' }, { key: 'storage', type: 'select', options: ['64GB', '128GB', '256GB', '512GB', '1TB'] }, { key: 'ram', type: 'select', options: ['4GB', '6GB', '8GB', '12GB', '16GB'] }],
      'laptops-pc': [{ key: 'processor', type: 'text' }, { key: 'ram', type: 'text' }, { key: 'gpu', type: 'text' }],
      custom: [{ key: 'brand', type: 'text' }, { key: 'specs', type: 'text' }],
    },
  },
  toys: {
    label: t('admin.addProductOverview.categories.toys'),
    subcategories: [
      { value: 'educational', label: t('admin.addProductOverview.subcategories.educational'), nested: ['Science Kits', 'Coding Toys', 'Math Puzzles', 'Language Learning'].map(i => translateNested(t, i)) },
      { value: 'board-games', label: t('admin.addProductOverview.subcategories.board-games'), nested: ['Family Games', 'Strategy Games', 'Card Games', 'Puzzles'].map(i => translateNested(t, i)) },
      { value: 'outdoor-toys', label: t('admin.addProductOverview.subcategories.outdoor-toys'), nested: ['Bicycles', 'Scooters', 'Trampolines', 'Pool Toys'].map(i => translateNested(t, i)) },
      { value: 'remote-control', label: t('admin.addProductOverview.subcategories.remote-control'), nested: ['RC Cars', 'Drones', 'RC Boats', 'RC Helicopters'].map(i => translateNested(t, i)) },
      { value: 'action-figures', label: t('admin.addProductOverview.subcategories.action-figures'), nested: ['Superheroes', 'Anime Figures', 'Legacy Collectibles'].map(i => translateNested(t, i)) },
      { value: 'dolls-plush', label: t('admin.addProductOverview.subcategories.dolls-plush'), nested: ['Dolls', 'Teddy Bears', 'Animated Plush'].map(i => translateNested(t, i)) },
      { value: 'crafts', label: t('admin.addProductOverview.subcategories.crafts'), nested: ['Painting', 'Slime Kits', 'Pottery', 'Jewelry Making'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      educational: [{ key: 'subject', type: 'select', options: ['Science', 'Coding', 'Math', 'Language'] }, { key: 'ageRange', type: 'select', options: ['3-5y', '6-8y', '9-12y'] }],
      custom: [{ key: 'ageGroup', type: 'text' }],
    },
  },
  'dry-fruits': {
    label: t('admin.addProductOverview.categories.dry_fruits'),
    subcategories: [
      { value: 'roasted-nuts', label: t('admin.addProductOverview.subcategories.roasted-nuts'), nested: ['Roasted Almonds', 'Salted Cashews', 'Pistachios', 'Walnuts'].map(i => translateNested(t, i)) },
      { value: 'raw-nuts', label: t('admin.addProductOverview.subcategories.raw-nuts'), nested: ['Raw Almonds', 'Pecans', 'Hazelnuts', 'Pine Nuts'].map(i => translateNested(t, i)) },
      { value: 'dried-berries', label: t('admin.addProductOverview.subcategories.dried-berries'), nested: ['Cranberries', 'Blueberries', 'Apricots', 'Figs'].map(i => translateNested(t, i)) },
      { value: 'dates-varieties', label: t('admin.addProductOverview.subcategories.dates-varieties'), nested: ['Ajwa', 'Medjool', 'Mabroom', 'Amber', 'Sukkari'].map(i => translateNested(t, i)) },
      { value: 'seeds-mix', label: t('admin.addProductOverview.subcategories.seeds-mix'), nested: ['Chia Seeds', 'Pumpkin Seeds', 'Trail Mix', 'Sunflower Seeds'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      'dates-varieties': [{ key: 'origin', type: 'text' }, { key: 'weight', type: 'select', options: ['250g', '500g', '1kg', '5kg'] }],
      custom: [{ key: 'grade', type: 'text' }],
    },
  },
  decoration: {
    label: t('admin.addProductOverview.categories.decoration'),
    subcategories: [
      { value: 'home-decor', label: t('admin.addProductOverview.subcategories.home-decor'), nested: ['Vases', 'Cushions', 'Candles', 'Statues'].map(i => translateNested(t, i)) },
      { value: 'wall-art', label: t('admin.addProductOverview.subcategories.wall-art'), nested: ['Canvas Paintings', 'Wall Mirrors', 'Photo Frames'].map(i => translateNested(t, i)) },
      { value: 'lighting', label: t('admin.addProductOverview.subcategories.lighting'), nested: ['Chandeliers', 'Table Lamps', 'Floor Lamps', 'LED Strips'].map(i => translateNested(t, i)) },
      { value: 'event-decor', label: t('admin.addProductOverview.subcategories.event-decor'), nested: ['Balloons', 'Backdrops', 'Wedding Decor'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      'home-decor': [{ key: 'material', type: 'text' }, { key: 'style', type: 'select', options: ['Modern', 'Vintage', 'Minimalist'] }],
      custom: [{ key: 'material', type: 'text' }],
    },
  },
  'books-stationary': {
    label: t('admin.addProductOverview.categories.books_stationary'),
    subcategories: [
      { value: 'academic-books', label: t('admin.addProductOverview.subcategories.academic-books'), nested: ['Medical', 'Engineering', 'Commerce', 'School Books'].map(i => translateNested(t, i)) },
      { value: 'fiction-nonfiction', label: t('admin.addProductOverview.subcategories.fiction-nonfiction'), nested: ['Sci-Fi', 'Mystery', 'Biography', 'Self-Help'].map(i => translateNested(t, i)) },
      { value: 'stationary-office', label: t('admin.addProductOverview.subcategories.stationary-office'), nested: ['Paper', 'Files', 'Staplers', 'Calculators'].map(i => translateNested(t, i)) },
      { value: 'art-supplies', label: t('admin.addProductOverview.subcategories.art-supplies'), nested: ['Canvases', 'Acrylic Paints', 'Brushes', 'Sketchbooks'].map(i => translateNested(t, i)) },
      { value: 'writing-instruments', label: t('admin.addProductOverview.subcategories.writing-instruments'), nested: ['Fountain Pens', 'Ballpoint Pens', 'Gift Sets'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      'fiction-nonfiction': [{ key: 'author', type: 'text' }, { key: 'genre', type: 'text' }],
      custom: [{ key: 'author', type: 'text' }],
    },
  },
  'medical-instruments': {
    label: t('admin.addProductOverview.categories.medical_instruments'),
    subcategories: [
      { value: 'diagnostics', label: t('admin.addProductOverview.categories.diagnostics'), nested: ['Blood Pressure Monitors', 'Digital Thermometers', 'Stethoscopes', 'Glucometers'].map(i => translateNested(t, i)) },
      { value: 'monitoring', label: t('admin.addProductOverview.categories.monitoring'), nested: ['Pulse Oximeters', 'ECG Machines', 'Heart Monitors'].map(i => translateNested(t, i)) },
      { value: 'rehab-mobility', label: t('admin.addProductOverview.categories.rehab-mobility'), nested: ['Wheelchairs', 'Walkers', 'Crutches', 'Support Belts'].map(i => translateNested(t, i)) },
      { value: 'respiratory', label: t('admin.addProductOverview.categories.respiratory'), nested: ['Nebulizers', 'Oxygen Concentrators', 'CPAP Machines'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      diagnostics: [{ key: 'certification', type: 'select', options: ['FDA', 'CE', 'ISO'] }],
      custom: [{ key: 'techSpecs', type: 'text' }],
    },
  },
  'surgical-instruments': {
    label: t('admin.addProductOverview.categories.surgical_instruments'),
    subcategories: [
      { value: 'general-surgery', label: t('admin.addProductOverview.subcategories.general-surgery'), nested: ['Forceps', 'Scissors', 'Scalpels', 'Retractors', 'Needle Holders'].map(i => translateNested(t, i)) },
      { value: 'dental-instruments', label: t('admin.addProductOverview.subcategories.dental-instruments'), nested: ['Extractors', 'Probes', 'Dental Mirrors', 'Elevators'].map(i => translateNested(t, i)) },
      { value: 'orthopedic-surgery', label: t('admin.addProductOverview.subcategories.orthopedic-surgery'), nested: ['Bone Drills', 'Screws & Plates', 'Bone Saws'].map(i => translateNested(t, i)) },
      { value: 'ophthalmic-surgery', label: t('admin.addProductOverview.subcategories.ophthalmic-surgery'), nested: ['Eye Speculums', 'Microsurgical Scissors'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      'general-surgery': [{ key: 'steelGrade', type: 'select', options: ['410 Stainless', '420 Stainless', 'Titanium'] }, { key: 'finish', type: 'select', options: ['Satin', 'Mirror'] }],
      custom: [{ key: 'material', type: 'text' }],
    },
  },
  hardware: {
    label: t('admin.addProductOverview.categories.hardware'),
    subcategories: [
      { value: 'power-tools', label: t('admin.addProductOverview.subcategories.power-tools'), nested: ['Drills', 'Angle Grinders', 'Electric Saws', 'Rotary Hammers'].map(i => translateNested(t, i)) },
      { value: 'hand-tools', label: t('admin.addProductOverview.subcategories.hand-tools'), nested: ['Wrenches', 'Screwdrivers', 'Pliers', 'Hammers'].map(i => translateNested(t, i)) },
      { value: 'plumbing-hardware', label: t('admin.addProductOverview.subcategories.plumbing-hardware'), nested: ['Pipe Fittings', 'Faucets', 'Valves', 'Pumps'].map(i => translateNested(t, i)) },
      { value: 'electrical-hardware', label: t('admin.addProductOverview.subcategories.electrical-hardware'), nested: ['Circuit Breakers', 'Cables & Wires', 'Switches', 'Inverters'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      'power-tools': [{ key: 'brand', type: 'text' }, { key: 'voltage', type: 'text' }],
      custom: [{ key: 'brand', type: 'text' }],
    },
  },
  fireworks: {
    label: t('admin.addProductOverview.categories.fireworks'),
    subcategories: [
      { value: 'aerial-rockets', label: t('admin.addProductOverview.subcategories.aerial-rockets'), nested: ['Big Burst Rockets', 'Double Burst', 'Signal Rockets'].map(i => translateNested(t, i)) },
      { value: 'multi-shot-cakes', label: t('admin.addProductOverview.subcategories.multi-shot-cakes'), nested: ['25 Shots', '50 Shots', '100 Shots', 'Fan Cakes'].map(i => translateNested(t, i)) },
      { value: 'fountains-wheels', label: t('admin.addProductOverview.subcategories.fountains-wheels'), nested: ['Glittering Fountains', 'Color Wheels', 'Cone Fountains'].map(i => translateNested(t, i)) },
      { value: 'ground-fireworks', label: t('admin.addProductOverview.subcategories.ground-fireworks'), nested: ['Sparklers', 'Ground Spinners', 'Cracklers'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      'aerial-rockets': [{ key: 'hazardClass', type: 'select', options: ['1.4G', '1.3G'] }],
      custom: [{ key: 'noiseLevel', type: 'text' }],
    },
  },
  other: {
    label: t('admin.addProductOverview.categories.other'),
    subcategories: [
      { value: 'general-merchandise', label: t('admin.addProductOverview.subcategories.general-merchandise'), nested: ['Stationery', 'Household Items', 'Groceries'].map(i => translateNested(t, i)) },
      { value: 'gift-items', label: t('admin.addProductOverview.subcategories.gift-items'), nested: ['Gift Cards', 'Occasional Gifts'].map(i => translateNested(t, i)) },
    ],
    dynamicFields: {
      custom: [{ key: 'description', type: 'text' }],
    },
  },
})

export const VARIANT_KEYS = ['size', 'color', 'material', 'ageRange', 'storage', 'ram', 'weight', 'purity', 'strapMaterial', 'steelGrade', 'grade', 'fabric']

export const inputCls = 'admin-pro-input w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3.5 text-[0.92rem] text-[#1E293B] outline-none transition-all placeholder:text-[#1E293B]/40 hover:border-emerald-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5'

export const selectCls = 'admin-pro-input w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 h-[52px] text-[0.92rem] text-[#1E293B] outline-none transition-all hover:border-emerald-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 cursor-pointer appearance-none'

export const STEPS = [
  { id: 'basics', title: 'admin.addProductOverview.steps.basics', icon: Info },
  { id: 'classification', title: 'admin.addProductOverview.steps.category', icon: Layers },
  { id: 'pricing', title: 'admin.addProductOverview.steps.pricing', icon: DollarSign }
]
