import { useMemo, useRef, useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ChevronRight,
  FileText,
  Star,
  Tag,
  Trash2,
  Upload,
  X,
  ArrowLeft,
  Plus,
  Info,
  Layers,
  Image as ImageIcon,
  DollarSign,
  Package,
  ChevronLeft,
  Eye,
  Activity,
  Award,
  BookOpen,
  Cpu,
  Hammer,
  Heart,
  Home,
  Monitor,
  Shield,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  Truck,
  Zap,
  Save,
  RotateCcw,
  Box,
  TrendingUp,
  BadgeCheck
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useApp } from '../../../context/AppProvider'
import { ROUTES } from '../../../utils/routes'

const translateNested = (t, item) => t(`admin.addProductOverview.nested.${item.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`, item)

const buildCategoryConfig = (t) => ({
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
      { value: 'diagnostics', label: t('admin.addProductOverview.subcategories.diagnostics'), nested: ['Blood Pressure Monitors', 'Digital Thermometers', 'Stethoscopes', 'Glucometers'].map(i => translateNested(t, i)) },
      { value: 'monitoring', label: t('admin.addProductOverview.subcategories.monitoring'), nested: ['Pulse Oximeters', 'ECG Machines', 'Heart Monitors'].map(i => translateNested(t, i)) },
      { value: 'rehab-mobility', label: t('admin.addProductOverview.subcategories.rehab-mobility'), nested: ['Wheelchairs', 'Walkers', 'Crutches', 'Support Belts'].map(i => translateNested(t, i)) },
      { value: 'respiratory', label: t('admin.addProductOverview.subcategories.respiratory'), nested: ['Nebulizers', 'Oxygen Concentrators', 'CPAP Machines'].map(i => translateNested(t, i)) },
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

const Field = ({ label, icon: Icon, children, error, helpText }) => (
  <div className="group space-y-2">
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-3.5 w-3.5 text-[#10B981]/80 group-focus-within:text-[#10B981] transition-colors" />}
      <label className="block text-[0.68rem] font-bold uppercase tracking-widest text-[#1E293B]/80 group-focus-within:text-[#10B981]/80 transition-colors md:text-[0.7rem]">
        {label}
      </label>
    </div>
    <div className="relative">
      {children}
    </div>
    {error && <p className="text-[0.65rem] font-semibold text-red-500">{error}</p>}
    {helpText && !error && <p className="text-[0.65rem] text-[#1E293B]/50">{helpText}</p>}
  </div>
)

const inputCls =
  'admin-pro-input w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3.5 text-[0.92rem] text-[#1E293B] outline-none transition-all placeholder:text-[#1E293B]/40 hover:border-emerald-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5'

const selectCls =
  'admin-pro-input w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 h-[52px] text-[0.92rem] text-[#1E293B] outline-none transition-all hover:border-emerald-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 cursor-pointer appearance-none'

const SectionCard = ({ title, subtitle, icon: Icon, children, className = "" }) => (
  <Motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`admin-section-card relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-200/40 ${className}`}
  >
    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-emerald-50/30 blur-3xl opacity-50 md:opacity-100" />
    <div className="relative z-10">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-emerald-50 text-[#1E293B]/80">
              {Icon && <Icon className="h-4 w-4 md:h-5 md:w-5" />}
            </div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-[#1E293B]">{title}</h2>
          </div>
          {subtitle && <p className="text-[0.82rem] md:text-[0.88rem] leading-relaxed text-[#1E293B]/80">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  </Motion.section>
)

const STEPS = [
  { id: 'basics', title: 'admin.addProductOverview.steps.basics', icon: Info },
  { id: 'classification', title: 'admin.addProductOverview.steps.category', icon: Layers },
  { id: 'pricing', title: 'admin.addProductOverview.steps.pricing', icon: DollarSign }
]

export function EditProductOverview({ id: propId }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const params = useParams()
  const id = propId || params.id
  const { businessProfile, products, updateProduct } = useApp()
  const fileInputRef = useRef(null)
  const categoryConfig = useMemo(() => buildCategoryConfig(t), [t])

  const initialProduct = useMemo(() => {
    if (!id) return null
    return products.find((p) => String(p.id) === String(id)) || null
  }, [id, products])

  const [currentStep, setCurrentStep] = useState('basics')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    industry: businessProfile?.type || 'clothing',
    category: '',
    subCategory: '',
    customCategory: '',
    customSubCategory: '',
    customFields: [],
    price: '',
    salePrice: '',
    stock: '',
    minStock: '',
    sku: '',
    minOrder: '1',
    discount: '0%',
    brand: '',
    specs: {},
    gallery: [],
  })

  useEffect(() => {
    if (initialProduct) {
      setFormData({
        name: initialProduct.name || '',
        description: initialProduct.description || '',
        industry: initialProduct.industry || businessProfile?.type || 'clothing',
        category: initialProduct.categoryAt || '',
        subCategory: initialProduct.subCategoryAt || '',
        customCategory: initialProduct.customCategory || '',
        customSubCategory: initialProduct.customSubCategory || '',
        customFields: initialProduct.customFields || [],
        price: initialProduct.price || '',
        salePrice: initialProduct.salePrice || '',
        stock: initialProduct.stock || '',
        minStock: initialProduct.minStock || '',
        sku: initialProduct.sku || '',
        minOrder: initialProduct.minOrder || '1',
        discount: initialProduct.discount || '0%',
        brand: initialProduct.brand || '',
        specs: initialProduct.specs || {},
        gallery: initialProduct.gallery || (initialProduct.imagePreview ? [{
          id: 'legacy',
          preview: initialProduct.imagePreview,
          type: initialProduct.mediaType || 'image',
          name: initialProduct.mediaName || 'Primary',
          isPrimary: true,
        }] : []),
      })
    }
  }, [initialProduct, businessProfile])

  const currentIndustryConfig = categoryConfig[formData.industry] || categoryConfig['clothing']
  const industryCategories = useMemo(() => currentIndustryConfig?.subcategories || [], [currentIndustryConfig])
  const selectedCategoryItem = useMemo(() => industryCategories.find(c => c.value === formData.category), [industryCategories, formData.category])
  const nestedOptions = useMemo(() => selectedCategoryItem?.nested || [], [selectedCategoryItem])
  const categorySpecs = useMemo(() => {
    if (!formData.category || formData.category === 'custom' || !currentIndustryConfig) return []
    return currentIndustryConfig.dynamicFields[formData.category] || currentIndustryConfig.dynamicFields['custom'] || []
  }, [formData.category, currentIndustryConfig])

  const currentDynamicFields = useMemo(() => {
    return categorySpecs.map((def) => ({
      ...def,
      label: t(`admin.addProductOverview.fields.${def.key}.label`, def.key.charAt(0).toUpperCase() + def.key.slice(1).replace(/([A-Z])/g, ' $1')),
      placeholder: t(`admin.addProductOverview.fields.${def.key}.placeholder`, `Enter ${def.key}`),
    }))
  }, [categorySpecs, t])

  const set = (key, value) => setFormData(prev => ({ ...prev, [key]: value }))

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    const allValid = files.every((f) => f.type.startsWith('image/') || f.type.startsWith('video/'))
    if (!allValid) { toast.error("Invalid media type"); return }
    const newMedia = files.map((file) => ({
      id: Math.random().toString(36).slice(2, 11),
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'video',
      name: file.name,
      isPrimary: formData.gallery.length === 0,
    }))
    setFormData((prev) => ({ ...prev, gallery: [...prev.gallery, ...newMedia] }))
    e.target.value = ''
  }

  const setPrimaryMedia = (id) => setFormData((prev) => ({
    ...prev,
    gallery: prev.gallery.map((item) => ({ ...item, isPrimary: item.id === id })),
  }))

  const removeMedia = (id) => setFormData((prev) => {
    const next = prev.gallery.filter((item) => item.id !== id)
    if (next.length && !next.some((i) => i.isPrimary)) next[0] = { ...next[0], isPrimary: true }
    return { ...prev, gallery: next }
  })

  const handleSubmit = () => {
    // Step 1 – Basics
    if (!formData.name.trim()) {
      setCurrentStep('basics')
      toast.error(t('admin.addProductOverview.validation.nameRequired'))
      return
    }
    if (!formData.description.trim()) {
      setCurrentStep('basics')
      toast.error(t('admin.addProductOverview.validation.descriptionRequired'))
      return
    }
    if (formData.gallery.length === 0) {
      setCurrentStep('basics')
      toast.error(t('admin.addProductOverview.validation.mediaRequired'))
      return
    }
    // Step 2 – Category
    if (!formData.category) {
      setCurrentStep('classification')
      toast.error(t('admin.addProductOverview.validation.categoryRequired'))
      return
    }
    if (nestedOptions.length > 0 && !formData.subCategory) {
      setCurrentStep('classification')
      toast.error(t('admin.addProductOverview.validation.subCategoryRequired'))
      return
    }
    // Step 3 – Pricing
    if (!formData.price || isNaN(parseFloat(formData.price)) || parseFloat(formData.price) < 0) {
      setCurrentStep('pricing')
      toast.error(t('admin.addProductOverview.validation.priceRequired'))
      return
    }
    if (formData.stock === '' || formData.stock === null || formData.stock === undefined) {
      setCurrentStep('pricing')
      toast.error(t('admin.addProductOverview.validation.stockRequired'))
      return
    }

    const finalSpecs = { ...formData.specs }
    formData.customFields.forEach(field => {
      if (field.label.trim() && field.value.trim()) {
        finalSpecs[field.label] = field.value
      }
    })

    const primary = formData.gallery.find((i) => i.isPrimary) || formData.gallery[0]
    const payload = {
      ...formData,
      id: initialProduct?.id || id,
      categoryAt: formData.category,
      subCategoryAt: formData.subCategory,
      // Compatibility
      category: formData.industry,
      subCategory: formData.category === 'custom' ? formData.customCategory : `${formData.category}${formData.subCategory && formData.subCategory !== 'custom' ? ` - ${formData.subCategory}` : ''}`,
      specs: finalSpecs,
      imagePreview: primary?.preview || null,
      mediaType: primary?.type || null,
      mediaName: primary?.name || '',
    }

    updateProduct(payload)
    toast.success(t('admin.addProductOverview.validation.updateSuccess'))
    navigate(ROUTES.adminProducts)
  }

  const handleNextStep = () => {
    if (currentStep === 'basics') {
      if (!formData.name.trim()) {
        toast.error(t('admin.addProductOverview.validation.nameRequired'))
        return
      }
      if (!formData.description.trim()) {
        toast.error(t('admin.addProductOverview.validation.descriptionRequired'))
        return
      }
      if (formData.gallery.length === 0) {
        toast.error(t('admin.addProductOverview.validation.mediaRequired'))
        return
      }
    }
    if (currentStep === 'classification') {
      if (!formData.category) {
        toast.error(t('admin.addProductOverview.validation.categoryRequired'))
        return
      }
      if (nestedOptions.length > 0 && !formData.subCategory) {
        toast.error(t('admin.addProductOverview.validation.subCategoryRequired'))
        return
      }
    }
    setCurrentStep(STEPS[currentStepIndex + 1].id)
  }

  const currentStepIndex = STEPS.findIndex(s => s.id === currentStep)
  const isLastStep = currentStepIndex === STEPS.length - 1

  if (!initialProduct) return (
    <div className="flex min-h-screen items-center justify-center bg-white md:bg-emerald-50/40">
      <div className="text-center">
        <div className="mb-4 inline-flex h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        <p className="text-sm font-bold text-[#1E293B]/60 uppercase tracking-widest">{t('admin.addProductOverview.editorInitialising')}</p>
      </div>
    </div>
  )

  return (
    <div className="admin-product-wizard min-h-screen bg-white md:bg-emerald-50/40">
      <main className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 md:py-10">
        <Motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(ROUTES.adminProducts)}
          className="group mb-6 md:mb-8 flex items-center gap-2 text-[0.78rem] md:text-[0.82rem] font-bold text-[#1E293B]/  80 transition-all hover:text-[#1E293B]/80"
        >
          <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-xl bg-white text-[#1E293B] shadow-sm ring-1 ring-emerald-100 transition-all group-hover:bg-emerald-50 group-hover:ring-emerald-200">
            <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </div>
          {t('admin.addProductOverview.backToCatalog')}
        </Motion.button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-xl font-black tracking-tight text-[#1E293B] md:text-3xl line-clamp-1">
                  {t('admin.addProductOverview.titleEdit')}: {formData.name || initialProduct.name}
                </h1>
                <p className="mt-1 text-[0.82rem] md:text-[0.9rem] font-medium text-[#1E293B]/80 text-ellipsis overflow-hidden">
                  {t('admin.addProductOverview.subtitleEdit')}
                </p>
              </div>

              <nav className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth no-scrollbar md:pb-0">
                {STEPS.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`admin-wizard-step flex shrink-0 items-center gap-2 rounded-xl md:rounded-2xl px-4 py-2.5 md:px-5 md:py-3 text-[0.75rem] md:text-[0.82rem] font-bold transition-all ${currentStep === step.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 is-active'
                      : 'bg-white text-[#1E293B]/80 hover:text-[#1E293B]/80 ring-1 ring-emerald-100/80 shadow-sm'
                      }`}
                  >
                    <step.icon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${currentStep === step.id ? 'text-white' : 'text-[#1E293B]/80'}`} />
                    {t(step.title)}
                  </button>
                ))}
              </nav>
            </div>

            <AnimatePresence mode="wait">
              {currentStep === 'basics' && (
                <Motion.div key="basics" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 md:space-y-8">
                  <SectionCard
                    title={t('admin.addProductOverview.sections.basics.title')}
                    subtitle={t('admin.addProductOverview.sections.basics.subtitle')}
                    icon={Info}
                  >
                    <Field label={t('admin.addProductOverview.sections.basics.nameLabel')} icon={Tag}>
                      <input type="text" value={formData.name} onChange={(e) => set('name', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.basics.namePlaceholder')} />
                    </Field>
                    <Field label={t('admin.addProductOverview.sections.basics.descriptionLabel')} icon={FileText}>
                      <textarea rows={4} value={formData.description} onChange={(e) => set('description', e.target.value)} className={`${inputCls} resize-none`} placeholder={t('admin.addProductOverview.sections.basics.descriptionPlaceholder')} />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label={t('admin.addProductOverview.sections.basics.brandLabel')} icon={Award}>
                        <input type="text" value={formData.brand} onChange={(e) => set('brand', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.basics.brandPlaceholder')} />
                      </Field>
                      <Field label={t('admin.addProductOverview.summary.industryLabel')} icon={Layers}>
                        <div className="flex xl:h-[52px] h-[3.8rem] w-full items-center gap-3 rounded-2xl bg-emerald-50/50 px-5 ring-1 ring-emerald-100/50 admin-business-category-box transition-colors">
                          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#1E293B]/80 admin-business-category-icon transition-colors">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-[0.9rem] font-bold capitalize text-[#1E293B]/90 truncate admin-business-category-text transition-colors">
                            {t(`admin.addProductOverview.categories.${formData.industry}`, formData.industry)}
                          </span>
                        </div>
                      </Field>
                    </div>
                  </SectionCard>
                </Motion.div>
              )}

              {currentStep === 'classification' && (
                <Motion.div key="classification" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 md:space-y-8">
                  <SectionCard
                    title={t('admin.addProductOverview.sections.category.title')}
                    subtitle={t('admin.addProductOverview.sections.category.subtitle')}
                    icon={Layers}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label={t('admin.addProductOverview.sections.category.categoryLabel')}>
                        <div className="relative">
                          <select
                            value={formData.category}
                            onChange={(e) => {
                              const val = e.target.value
                              setFormData(prev => ({ ...prev, category: val, subCategory: '', specs: {} }))
                            }}
                            className={selectCls}
                          >
                            <option value="">{t('admin.addProductOverview.sections.category.categoryPlaceholder')}</option>
                            {industryCategories.map((item) => (
                              <option key={item.value} value={item.value}>{item.label}</option>
                            ))}
                            <option value="custom" className="font-bold text-[#1E293B]/80">+ {t('admin.addProductOverview.sections.category.categoryLabel')}</option>
                          </select>
                          <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
                        </div>
                      </Field>

                      <AnimatePresence>
                        {formData.category && formData.category !== 'custom' && (
                          <Motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <Field label={t('admin.addProductOverview.sections.category.subCategoryLabel')}>
                              <div className="relative">
                                <select value={formData.subCategory} onChange={(e) => set('subCategory', e.target.value)} className={selectCls}>
                                  <option value="">{t('admin.addProductOverview.sections.category.subCategoryPlaceholder')}</option>
                                  {nestedOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                  ))}
                                  <option value="custom" className="font-bold text-[#1E293B]/80">+ {t('admin.addProductOverview.sections.category.newSubCategory')}</option>
                                </select>
                                <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
                              </div>
                            </Field>
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {currentDynamicFields.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 rounded-3xl bg-emerald-50/80 p-6 md:p-8 ring-1 ring-emerald-100">
                        {currentDynamicFields.map((field) => (
                          <Field key={field.key} label={field.label}>
                            {field.type === 'select' ? (
                              <div className="relative">
                                <select
                                  value={formData.specs[field.key] || ''}
                                  onChange={(e) => setFormData(prev => ({ ...prev, specs: { ...prev.specs, [field.key]: e.target.value } }))}
                                  className={selectCls}
                                >
                                  <option value="">{t('admin.addProductOverview.fields.selectOption')}</option>
                                  {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                                <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
                              </div>
                            ) : (
                              <input
                                type="text"
                                value={formData.specs[field.key] || ''}
                                onChange={(e) => setFormData(prev => ({ ...prev, specs: { ...prev.specs, [field.key]: e.target.value } }))}
                                className={inputCls}
                                placeholder={field.placeholder}
                              />
                            )}
                          </Field>
                        ))}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">{t('admin.addProductOverview.sections.category.customFieldsTitle')}</h3>
                        <button
                          onClick={() => setFormData(p => ({ ...p, customFields: [...p.customFields, { id: Date.now(), label: '', value: '' }] }))}
                          className="flex h-8 items-center gap-1.5 rounded-full bg-emerald-50 px-3 text-[0.7rem] font-black text-[#1E293B]/80 transition hover:bg-emerald-100"
                        >
                          <Plus className="h-3 w-3" />
                          {t('admin.addProductOverview.sections.category.addFieldBtn')}
                        </button>
                      </div>
                      <div className="space-y-3">
                        {formData.customFields.map((field, idx) => (
                          <div key={field.id} className="flex items-center gap-3">
                            <input type="text" placeholder={t('admin.addProductOverview.sections.category.fieldLabelPlaceholder')} value={field.label} onChange={(e) => { const next = [...formData.customFields]; next[idx].label = e.target.value; set('customFields', next) }} className={`${inputCls} !py-3`} />
                            <input type="text" placeholder={t('admin.addProductOverview.sections.category.fieldValuePlaceholder')} value={field.value} onChange={(e) => { const next = [...formData.customFields]; next[idx].value = e.target.value; set('customFields', next) }} className={`${inputCls} !py-3`} />
                            <button onClick={() => set('customFields', formData.customFields.filter(f => f.id !== field.id))} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition hover:bg-red-100 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                </Motion.div>
              )}

              {currentStep === 'pricing' && (
                <Motion.div key="pricing" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 md:space-y-8">
                  <SectionCard
                    title={t('admin.addProductOverview.sections.pricing.title')}
                    subtitle={t('admin.addProductOverview.sections.pricing.subtitle')}
                    icon={DollarSign}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label={t('admin.addProductOverview.sections.pricing.priceLabel')} icon={DollarSign}>
                        <div className="relative">
                          <input type="text" value={formData.price} onChange={(e) => set('price', e.target.value)} className={inputCls} placeholder="0.00" />
                          <div className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 text-[0.85rem] font-bold text-[#1E293B]/40">{t('admin.common.currencyCode', 'USD')}</div>
                        </div>
                      </Field>
                      <Field label={t('admin.addProductOverview.sections.pricing.salePriceLabel')} icon={Sparkles}>
                        <div className="relative">
                          <input type="text" value={formData.salePrice} onChange={(e) => set('salePrice', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.pricing.salePricePlaceholder')} />
                          <div className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 text-[0.85rem] font-bold text-[#1E293B]/40">{t('admin.common.currencyCode', 'USD')}</div>
                        </div>
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label={t('admin.addProductOverview.sections.pricing.stockLabel')} icon={Package}>
                        <input type="text" value={formData.stock} onChange={(e) => set('stock', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.pricing.stockPlaceholder')} />
                      </Field>
                      <Field label={t('admin.addProductOverview.sections.pricing.skuLabel')} icon={BadgeCheck}>
                        <input type="text" value={formData.sku} onChange={(e) => set('sku', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.pricing.skuPlaceholder')} />
                      </Field>
                    </div>
                  </SectionCard>
                </Motion.div>
              )}
            </AnimatePresence>

            <div className="admin-footer-actions flex items-center justify-between rounded-[28px] bg-white p-5 md:p-6 shadow-sm ring-1 ring-emerald-100">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStep(STEPS[currentStepIndex - 1].id)}
                className="admin-cta-secondary flex h-12 items-center gap-2 rounded-2xl px-6 text-[0.88rem] font-bold text-[#1E293B]/50 transition hover:bg-emerald-50 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
                {t('admin.common.previous')}
              </button>
              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={isLastStep ? handleSubmit : handleNextStep}
                className="admin-cta-premium flex h-12 items-center gap-2 rounded-2xl bg-emerald-900 px-8 text-[0.88rem] font-black text-white shadow-xl shadow-emerald-900/10 transition"
              >
                {isLastStep ? <Save className="h-4 w-4" /> : null}
                {isLastStep ? t('admin.addProductOverview.sections.actions.submitEdit') : t('admin.common.next')}
                {!isLastStep ? <ChevronRight className="h-4 w-4" /> : null}
              </Motion.button>
            </div>
          </div>

          <aside className="admin-media-sidebar space-y-8">
            <div className="sticky top-10 space-y-8">
              <SectionCard title={t('admin.addProductOverview.sections.media.title')} icon={ImageIcon}>
                <div className="space-y-6">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-emerald-100/50 ring-1 ring-emerald-100">
                    {formData.gallery.length > 0 ? (
                      <Motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={formData.gallery.find(i => i.isPrimary)?.preview || formData.gallery[0].preview} className="h-full w-full object-cover" alt="Primary" />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center text-[#1E293B]/40">
                        <ImageIcon className="mb-2 h-10 w-10 opacity-20" />
                        <span className="text-[0.65rem] font-bold uppercase tracking-widest opacity-40">{t('admin.addProductOverview.sections.media.noMediaAttached')}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {formData.gallery.map((item) => (
                      <div key={item.id} className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl ring-2 ring-inset transition-all" style={{ ringColor: item.isPrimary ? '#10b981' : 'transparent' }}>
                        <img src={item.preview} onClick={() => setPrimaryMedia(item.id)} className="h-full w-full object-cover" />
                        <button onClick={(e) => { e.stopPropagation(); removeMedia(item.id) }} className="absolute -right-1 -top-1 rounded-bl-xl bg-red-500 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"><X className="h-3 w-3" /></button>
                      </div>
                    ))}
                    <button onClick={() => fileInputRef.current?.click()} className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50 text-[#1E293B]/50 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-[#1E293B]/80"><Plus className="h-5 w-5" /></button>
                  </div>
                  <input ref={fileInputRef} type="file" multiple accept="image/*,video/*" onChange={handleMediaUpload} className="hidden" />
                </div>
              </SectionCard>

              <div className="rounded-[32px] border border-[#1E293B] bg-[#1E293B] p-8 text-white shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-200 animate-pulse" />
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-white">{t('admin.addProductOverview.summary.listingHealth')}</span>
                  </div>
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-bold text-white">
                    <Tag className="h-3 w-3 shrink-0" />
                    <span className="truncate max-w-full">
                      {formData.category ? (
                        <>
                          {t(`admin.addProductOverview.categories.${formData.category}`, formData.category)}
                          {formData.subCategory && <span className="text-[#1E293B]/40 mx-1">/</span>}
                          {formData.subCategory && <span className="text-[#1E293B]/60">{t(`admin.addProductOverview.subcategories.${formData.subCategory}`, formData.subCategory)}</span>}
                        </>
                      ) : (
                        t(`admin.addProductOverview.categories.${formData.industry}`, formData.industry)
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
