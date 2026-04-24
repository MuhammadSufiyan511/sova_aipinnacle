import { useMemo, useRef, useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ChevronRight,
  FileText,
  PlayCircle,
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
  Settings,
  ChevronLeft,
  Eye,
  Activity,
  Award,
  BookOpen,
  AlertCircle,
  Cpu,
  Feather,
  Hammer,
  Heart,
  Home,
  Laptop,
  Monitor,
  Music,
  Printer,
  Shield,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  Thermometer,
  Truck,
  Watch,
  Wind,
  Zap
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
      {Icon && <Icon className="h-3.5 w-3.5 text-[#10B981]/50 group-focus-within:text-[#10B981] transition-colors" />}
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

const TagInput = ({ value = [], onChange, placeholder, icon: Icon, isColor = false }) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')

  const isValidColor = (str) => {
    if (typeof window === 'undefined') return false
    const s = new Option().style
    s.color = str
    return s.color !== ''
  }

  const addTag = (tag) => {
    const trimmed = tag.trim()
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed])
      setInputValue('')
    }
  }

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag))
  }

  return (
    <div className="space-y-3">
      <div className="admin-tag-input-container relative flex min-h-[52px] w-full flex-wrap gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/30 px-3 py-2 transition-all hover:border-emerald-200 focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/5">
        <AnimatePresence>
          {value.map((tag) => {
            const displayColor = isColor && isValidColor(tag) ? tag : null

            return (
              <Motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`admin-tag-chip flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.76rem] font-bold shadow-sm ${displayColor
                  ? 'border border-black/5'
                  : (isColor ? 'border-2 border-dashed border-emerald-200 bg-emerald-50 text-emerald-900/40' : 'bg-emerald-900 text-white')
                  }`}
                style={displayColor ? {
                  backgroundColor: displayColor,
                  color: ['white', 'yellow', 'lime', 'cyan', 'pink'].some(c => tag.toLowerCase().includes(c)) ? '#064E3B' : 'white',
                  textShadow: 'none',
                  border: '1px solid rgba(0,0,0,0.1)'
                } : {}}
              >
                {displayColor && (
                  <span
                    className="h-2 w-2 rounded-full border border-white/20 bg-white"
                    style={{ backgroundColor: tag }}
                  />
                )}
                {isColor && !displayColor && <AlertCircle className="h-3 w-3 text-red-400" />}
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className={`hover:shadow-lg transition-all opacity-70 hover:opacity-100 ${isColor && !displayColor ? 'text-red-400' : ''}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Motion.span>
            )
          })}
        </AnimatePresence>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addTag(inputValue)
            }
          }}
          placeholder={value.length === 0 ? placeholder : ''}
          className={`admin-tag-input-field flex-1 min-w-[120px] bg-transparent text-[0.9rem] text-emerald-950 outline-none placeholder:text-emerald-900/30 font-medium ${isColor && inputValue && !isValidColor(inputValue) ? 'text-red-500' : ''}`}
        />
        {inputValue && (
          <div className="flex items-center gap-2 ltr:ml-auto rtl:mr-auto">
            {isColor && isValidColor(inputValue) && (
              <Motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-4 w-4 rounded-full border-2 border-emerald-500 bg-white"
                style={{ backgroundColor: inputValue }}
              />
            )}
            <button
              type="button"
              onClick={() => addTag(inputValue)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all ${isColor && !isValidColor(inputValue) ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'}`}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      {isColor && inputValue && !isValidColor(inputValue) && (
        <Motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[0.65rem] font-bold text-red-500 ltr:pl-2 rtl:pr-2"
        >
          {t('admin.addProductOverview.sections.fields.colorNotFound', { defaultValue: 'Color not recognized. It will be added as a label.' })}
        </Motion.p>
      )}
    </div>
  )
}

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



export function AddProductOverview({ isOnboarding = false, onSave, onCancel, fixedIndustry: fixedIndustryProp }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { businessProfile, products, addProduct, updateProduct } = useApp()
  const fileInputRef = useRef(null)

  const initialProduct = useMemo(() => {
    if (!id) return null
    // Ensure string-safe comparison as ID from useParams is always a string 
    // while stored numeric IDs might otherwise fail strict equality
    return products.find((p) => String(p.id) === String(id)) || null
  }, [id, products])

  const isEditMode = Boolean(initialProduct)
  const categoryConfig = useMemo(() => buildCategoryConfig(t), [t])

  const [currentStep, setCurrentStep] = useState('basics')

  const fixedIndustry = fixedIndustryProp || businessProfile?.type || 'clothing'

  const [formData, setFormData] = useState({
    name: initialProduct?.name || '',
    description: initialProduct?.description || '',
    industry: initialProduct?.industry || fixedIndustry,
    category: initialProduct?.categoryAt || '',
    subCategory: initialProduct?.subCategoryAt || '',
    customCategory: initialProduct?.customCategory || '',
    customSubCategory: initialProduct?.customSubCategory || '',
    customFields: initialProduct?.customFields || [],
    price: initialProduct?.price || '',
    salePrice: initialProduct?.salePrice || '',
    stock: initialProduct?.stock || '',
    minStock: initialProduct?.minStock || '',
    sku: initialProduct?.sku || '',
    minOrder: initialProduct?.minOrder || '1',
    discount: initialProduct?.discount || '0%',
    brand: initialProduct?.brand || '',
    specs: initialProduct?.specs || {},
    variantGroups: initialProduct?.variantGroups || [{
      id: Math.random().toString(36).slice(2, 11),
      attributes: {}
    }],
    gallery: initialProduct?.gallery || (initialProduct?.imagePreview ? [{
      id: 'legacy',
      preview: initialProduct.imagePreview,
      type: initialProduct.mediaType || 'image',
      name: initialProduct.mediaName || 'Primary',
      isPrimary: true,
    }] : []),
  })

  const [expandedGroups, setExpandedGroups] = useState([formData.variantGroups[0]?.id].filter(Boolean))

  const toggleGroup = (id) => {
    setExpandedGroups(prev => prev.includes(id) ? prev.filter(gid => gid !== id) : [...prev, id])
  }

  const expandAll = () => setExpandedGroups(formData.variantGroups.map(g => g.id))
  const collapseAll = () => setExpandedGroups([])

  const addVariantGroup = () => {
    const newId = Math.random().toString(36).slice(2, 11)
    setFormData(prev => ({
      ...prev,
      variantGroups: [...prev.variantGroups, { id: newId, attributes: {} }]
    }))
    setExpandedGroups(prev => [...prev, newId])
  }

  useEffect(() => {
    if (initialProduct) {
      setFormData({
        name: initialProduct.name || '',
        description: initialProduct.description || '',
        industry: initialProduct.industry || fixedIndustry,
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
        variantGroups: initialProduct.variantGroups || [{
          id: Math.random().toString(36).slice(2, 11),
          attributes: {}
        }],
        gallery: initialProduct.gallery || (initialProduct.imagePreview ? [{
          id: 'legacy',
          preview: initialProduct.imagePreview,
          type: initialProduct.mediaType || 'image',
          name: initialProduct.mediaName || 'Primary',
          isPrimary: true,
        }] : []),
      })
    }
  }, [initialProduct, fixedIndustry])

  const currentIndustryConfig = categoryConfig[formData.industry] || categoryConfig['clothing']
  const industryCategories = useMemo(() => currentIndustryConfig?.subcategories || [], [currentIndustryConfig])

  const selectedCategoryItem = useMemo(() => {
    return industryCategories.find(c => c.value === formData.category)
  }, [industryCategories, formData.category])

  const nestedOptions = useMemo(() => {
    return selectedCategoryItem?.nested || []
  }, [selectedCategoryItem])

  const categorySpecs = useMemo(() => {
    if (!formData.category || formData.category === 'custom' || !currentIndustryConfig) return []
    return currentIndustryConfig.dynamicFields[formData.category] || currentIndustryConfig.dynamicFields['custom'] || []
  }, [formData.category, currentIndustryConfig])

  const VARIANT_KEYS = useMemo(() => ['size', 'color', 'material', 'ageRange', 'storage', 'ram', 'weight', 'purity', 'strapMaterial', 'steelGrade', 'grade', 'fabric'], [])

  const currentDynamicFields = useMemo(() => {
    return categorySpecs.map((def) => ({
      ...def,
      label: t(`admin.addProductOverview.fields.${def.key}.label`, def.key.charAt(0).toUpperCase() + def.key.slice(1).replace(/([A-Z])/g, ' $1')),
      placeholder: t(`admin.addProductOverview.fields.${def.key}.placeholder`, `Enter ${def.key}`),
    }))
  }, [categorySpecs, t])

  const variantFields = useMemo(() => currentDynamicFields.filter(f => VARIANT_KEYS.includes(f.key)), [currentDynamicFields, VARIANT_KEYS])
  const nonVariantFields = useMemo(() => currentDynamicFields.filter(f => !VARIANT_KEYS.includes(f.key)), [currentDynamicFields, VARIANT_KEYS])

  const set = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }))

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    const allValid = files.every((f) => f.type.startsWith('image/') || f.type.startsWith('video/') || f.type === 'application/pdf')
    if (!allValid) { toast.error(t('onboarding.products.modal.invalidMediaType')); e.target.value = ''; return }
    const newMedia = files.map((file) => ({
      id: Math.random().toString(36).slice(2, 11),
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : 'file',
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
      id: initialProduct?.id || Date.now().toString(),
      industry: formData.industry,
      categoryAt: formData.category,
      subCategoryAt: formData.subCategory,
      // For legacy/list view compatibility
      category: formData.industry,
      subCategory: formData.category === 'custom' ? formData.customCategory : `${formData.category}${formData.subCategory && formData.subCategory !== 'custom' ? ` - ${formData.subCategory}` : ''}`,
      variantGroups: formData.variantGroups,
      specs: finalSpecs,
      imagePreview: primary?.preview || null,
      mediaType: primary?.type || null,
      mediaName: primary?.name || '',
    }

    if (isEditMode) {
      updateProduct(payload)
      toast.success(t('admin.addProductOverview.validation.updateSuccess'))
    } else {
      addProduct(payload)
      toast.success(t('admin.addProductOverview.validation.createSuccess'))
    }

    if (isOnboarding && onSave) {
      onSave(payload)
    } else {
      navigate(ROUTES.adminProducts)
    }
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

  return (
    <div className="admin-product-wizard min-h-screen bg-white md:bg-emerald-50/40">
      <main className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 md:py-10">
        <Motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => isOnboarding && onCancel ? onCancel() : navigate(ROUTES.adminProducts)}
          className="group mb-6 md:mb-8 flex items-center gap-2 text-[0.78rem] md:text-[0.82rem] font-bold text-[#1E293B]/80 transition-all hover:text-[#1E293B]/80"
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
                <h1 className="text-xl font-black tracking-tight text-[#1E293B] md:text-3xl">
                  {isEditMode ? formData.name || t('admin.addProductOverview.titleEdit') : t('admin.addProductOverview.titleAdd')}
                </h1>
                <p className="mt-1 text-[0.82rem] md:text-[0.9rem] font-medium text-[#1E293B]/80">
                  {isEditMode ? t('admin.addProductOverview.subtitleEdit') : t('admin.addProductOverview.subtitleAdd')}
                </p>
              </div>

              <nav className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth no-scrollbar md:pb-0">
                {STEPS.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`admin-wizard-step flex shrink-0 items-center gap-2 rounded-xl md:rounded-2xl px-4 py-2.5 md:px-5 md:py-3 text-[0.75rem] md:text-[0.82rem] font-bold transition-all ${currentStep === step.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 is-active'
                      : 'bg-white text-[#1E293B]/75 hover:text-[#1E293B]/90 ring-1 ring-emerald-100/80 shadow-sm'
                      }`}
                  >
                    <span className={`flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-lg ${currentStep === step.id ? 'bg-white/20' : 'bg-emerald-50'}`}>
                      {idx + 1}
                    </span>
                    {t(step.title)}
                  </button>
                ))}
              </nav>
            </div>

            <AnimatePresence mode="wait">
              {currentStep === 'basics' && (
                <SectionCard
                  key="basics"
                  title={t('admin.addProductOverview.sections.basics.title')}
                  subtitle={t('admin.addProductOverview.sections.basics.subtitle')}
                  icon={Info}
                >
                  <Field label={t('admin.addProductOverview.sections.basics.nameLabel')} icon={Tag}>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder={t('admin.addProductOverview.sections.basics.namePlaceholder')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label={t('admin.addProductOverview.sections.basics.descriptionLabel')} icon={FileText}>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => set('description', e.target.value)}
                      placeholder={t('admin.addProductOverview.sections.basics.descriptionPlaceholder')}
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label={t('admin.addProductOverview.sections.basics.brandLabel')} icon={Star}>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => set('brand', e.target.value)}
                        placeholder={t('admin.addProductOverview.sections.basics.brandPlaceholder')}
                        className={inputCls}
                      />
                    </Field>
                    <Field label={t('admin.addProductOverview.sections.summary.industryLabel', { defaultValue: 'Business Category' })} icon={Layers}>
                      <div className="flex h-[52px] items-center gap-3 rounded-2xl bg-emerald-50/50 px-5 ring-1 ring-emerald-100/50 admin-business-category-box transition-colors">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-[#1E293B]/80 admin-business-category-icon transition-colors">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[0.9rem] font-bold capitalize text-[#1E293B]/90 truncate admin-business-category-text transition-colors">
                          {t(`onboarding.business.categories.${formData.industry}.label`, formData.industry.replace('-', ' '))}
                        </span>
                      </div>
                    </Field>
                  </div>
                </SectionCard>
              )}

              {currentStep === 'classification' && (
                <SectionCard
                  key="classification"
                  title={t('admin.addProductOverview.sections.category.title')}
                  subtitle={t('admin.addProductOverview.sections.category.subtitle')}
                  icon={Layers}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label={t('admin.addProductOverview.sections.category.categoryLabel')} icon={Package}>
                      <div className="relative">
                        <select
                          value={formData.category}
                          onChange={(e) => {
                            const nextVal = e.target.value
                            setFormData((prev) => ({
                              ...prev,
                              category: nextVal,
                              subCategory: '',
                              customCategory: '',
                              customSubCategory: '',
                              specs: {},
                            }))
                          }}
                          className={selectCls}
                        >
                          <option value="">{t('admin.addProductOverview.sections.category.categoryPlaceholder')}</option>
                          {industryCategories.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                          ))}
                          <option value="custom" className="text-[#1E293B]/80 font-bold">+ {t('admin.addProductOverview.sections.category.categoryLabel')}</option>
                        </select>
                        <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
                      </div>
                    </Field>

                    <AnimatePresence>
                      {(formData.category && formData.category !== 'custom') && (
                        <Motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <Field label={t('admin.addProductOverview.sections.category.subCategoryLabel')} icon={Tag}>
                            <div className="relative">
                              <select
                                value={formData.subCategory}
                                onChange={(e) => {
                                  setFormData(prev => ({ ...prev, subCategory: e.target.value, customSubCategory: '' }))
                                }}
                                className={selectCls}
                              >
                                <option value="">{t('admin.addProductOverview.sections.category.subCategoryPlaceholder')}</option>
                                {nestedOptions.map((opt) => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                                <option value="custom" className="text-[#1E293B]/80 font-bold">+ {t('admin.addProductOverview.sections.category.newSubCategory')}</option>
                              </select>
                              <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />
                            </div>
                          </Field>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {formData.category === 'custom' && (
                      <Motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-2">
                        <Field label={t('admin.addProductOverview.sections.category.customCategoryLabel')}>
                          <input
                            type="text"
                            value={formData.customCategory}
                            onChange={(e) => set('customCategory', e.target.value)}
                            placeholder={t('admin.addProductOverview.sections.category.customCategoryPlaceholder')}
                            className={inputCls}
                          />
                        </Field>
                      </Motion.div>
                    )}

                    {formData.subCategory === 'custom' && (
                      <Motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-2">
                        <Field label={t('admin.addProductOverview.sections.category.customSubCategoryLabel')}>
                          <input
                            type="text"
                            value={formData.customSubCategory}
                            onChange={(e) => set('customSubCategory', e.target.value)}
                            placeholder={t('admin.addProductOverview.sections.category.customSubCategoryPlaceholder')}
                            className={inputCls}
                          />
                        </Field>
                      </Motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {nonVariantFields.length > 0 && (
                      <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl bg-emerald-50/50 p-4 md:p-6 ring-1 ring-emerald-100"
                      >
                        {nonVariantFields.map((field) => {
                          const value = formData.specs[field.key] || ''
                          const isCustomVal = field.type === 'select' && value && !field.options.includes(value)
                          const selectValue = isCustomVal ? 'Custom' : value

                          return (
                            <Field key={field.key} label={field.label}>
                              {field.type === 'select' ? (
                                <div className="relative">
                                  <select
                                    value={selectValue}
                                    onChange={(e) => {
                                      const val = e.target.value
                                      setFormData((prev) => ({
                                        ...prev,
                                        specs: { ...prev.specs, [field.key]: val === 'Custom' ? '' : val },
                                      }))
                                    }}
                                    className={selectCls}
                                  >
                                    <option value="">{field.placeholder || t('admin.addProductOverview.fields.selectOption')}</option>
                                    {field.options.map((opt) => (
                                      <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                    <option value="Custom">{t('admin.addProductOverview.fields.customValue')}</option>
                                  </select>
                                  <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-[#1E293B]/50" />

                                  {selectValue === 'Custom' && (
                                    <Motion.input
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      type="text"
                                      autoFocus
                                      className={`${inputCls} mt-2 border-emerald-200 bg-white shadow-sm ring-1 ring-emerald-50`}
                                      placeholder={t('admin.addProductOverview.fields.customValuePlaceholder')}
                                      onChange={(e) => setFormData(prev => ({ ...prev, specs: { ...prev.specs, [field.key]: e.target.value } }))}
                                      value={value}
                                    />
                                  )}
                                </div>
                              ) : (
                                <input
                                  type="text"
                                  value={value}
                                  onChange={(e) => setFormData((prev) => ({ ...prev, specs: { ...prev.specs, [field.key]: e.target.value } }))}
                                  placeholder={field.placeholder}
                                  className={inputCls}
                                />
                              )}
                            </Field>
                          )
                        })}
                      </Motion.div>
                    )}
                  </AnimatePresence>

                  {/* Variant Groups Development Section */}
                  {variantFields.length > 0 ? (
                    <div className="space-y-6 pt-6">
                      <div className="flex flex-col gap-4 border-b border-emerald-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="admin-variant-main-title text-[1rem] font-black uppercase tracking-[0.2em] text-emerald-900">Product Variations</h3>
                          <p className="admin-variant-sub-title mt-1 text-[0.85rem] font-medium text-emerald-800/70 italic">Define multiple sets of sizes, colors, and materials</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {formData.variantGroups.length > 2 && (
                            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50/80 p-1.5 ltr:mr-2 rtl:ml-2 border border-emerald-100/50">
                              <button
                                type="button"
                                onClick={expandAll}
                                className="px-4 py-1.5 text-[0.7rem] font-black text-emerald-700 hover:text-emerald-900 transition-colors"
                              >
                                Expand All
                              </button>
                              <div className="h-4 w-[1px] bg-emerald-200" />
                              <button
                                type="button"
                                onClick={collapseAll}
                                className="px-4 py-1.5 text-[0.7rem] font-black text-emerald-700 hover:text-emerald-900 transition-colors"
                              >
                                Collapse All
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <AnimatePresence initial={false}>
                          {formData.variantGroups.map((group, groupIdx) => {
                            const isExpanded = expandedGroups.includes(group.id)
                            const sizeVal = group.attributes.size
                            const colorVals = group.attributes.color || []
                            const summaryText = [
                              sizeVal && `Size: ${sizeVal}`,
                              colorVals.length > 0 && `${colorVals.length} Color${colorVals.length > 1 ? 's' : ''}`
                            ].filter(Boolean).join(' | ')

                            return (
                              <Motion.div
                                key={group.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="admin-variant-card relative overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-sm transition-all hover:shadow-md"
                              >
                                <div
                                  className={`flex cursor-pointer items-center justify-between p-5 transition-colors ${isExpanded ? 'border-b border-emerald-100 bg-emerald-50/30' : 'hover:bg-emerald-50/10'}`}
                                  onClick={() => toggleGroup(group.id)}
                                >
                                  <div className="flex items-center gap-4">
                                    <span className="admin-variant-badge flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-[0.8rem] font-black text-emerald-900 shadow-sm border border-emerald-200">
                                      {groupIdx + 1}
                                    </span>
                                    {!isExpanded && summaryText && (
                                      <Motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="admin-variant-summary-text text-[0.95rem] font-black text-emerald-900"
                                      >
                                        {summaryText}
                                      </Motion.p>
                                    )}
                                    {!isExpanded && !summaryText && (
                                      <p className="admin-variant-new-label text-[0.95rem] text-emerald-900/40 italic font-bold">New Variation Group</p>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-3">
                                    {formData.variantGroups.length > 1 && (
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setFormData(prev => ({
                                            ...prev,
                                            variantGroups: prev.variantGroups.filter((_, i) => i !== groupIdx)
                                          }))
                                        }}
                                        className="admin-variant-delete-btn rounded-xl p-2.5 text-red-500/80 transition-colors hover:bg-red-50 hover:text-red-600"
                                      >
                                        <Trash2 className="h-6 w-6" />
                                      </button>
                                    )}
                                    <div className={`admin-variant-chevron-wrapper flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${isExpanded ? 'rotate-180 bg-emerald-600 text-white shadow-lg' : 'bg-emerald-100 text-emerald-900 font-bold'}`}>
                                      <ChevronRight className="h-6 w-6 rotate-90" />
                                    </div>
                                  </div>
                                </div>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <Motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                                      className="overflow-hidden"
                                    >
                                      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
                                        {variantFields.map((field) => {
                                          const isMulti = ['color', 'material', 'fabric', 'strapMaterial', 'steelGrade'].includes(field.key)
                                          const value = group.attributes[field.key] || (isMulti ? [] : '')

                                          return (
                                            <Field key={field.key} label={field.label}>
                                              {isMulti ? (
                                                <TagInput
                                                  value={value}
                                                  isColor={field.key === 'color'}
                                                  onChange={(newVal) => {
                                                    const newGroups = [...formData.variantGroups]
                                                    newGroups[groupIdx].attributes[field.key] = newVal
                                                    setFormData(prev => ({ ...prev, variantGroups: newGroups }))
                                                  }}
                                                  placeholder={field.placeholder}
                                                />
                                              ) : (
                                                <div className="relative">
                                                  {field.type === 'select' ? (
                                                    <>
                                                      <select
                                                        value={value}
                                                        onChange={(e) => {
                                                          const newGroups = [...formData.variantGroups]
                                                          newGroups[groupIdx].attributes[field.key] = e.target.value
                                                          setFormData(prev => ({ ...prev, variantGroups: newGroups }))
                                                        }}
                                                        className={selectCls}
                                                      >
                                                        <option value="">{field.placeholder || t('admin.addProductOverview.fields.selectOption')}</option>
                                                        {field.options.map((opt) => (
                                                          <option key={opt} value={opt}>{opt}</option>
                                                        ))}
                                                      </select>
                                                      <ChevronRight className="pointer-events-none absolute ltr:right-4 rtl:left-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-emerald-900/40" />
                                                    </>
                                                  ) : (
                                                    <input
                                                      type="text"
                                                      value={value}
                                                      onChange={(e) => {
                                                        const newGroups = [...formData.variantGroups]
                                                        newGroups[groupIdx].attributes[field.key] = e.target.value
                                                        setFormData(prev => ({ ...prev, variantGroups: newGroups }))
                                                      }}
                                                      placeholder={field.placeholder}
                                                      className={inputCls}
                                                    />
                                                  )}
                                                </div>
                                              )}
                                            </Field>
                                          )
                                        })}
                                      </div>
                                      <div className="flex justify-end px-5 pb-5">
                                        <button
                                          type="button"
                                          onClick={() => toggleGroup(group.id)}
                                          className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-[0.8rem] font-bold text-white shadow-sm transition-all hover:bg-emerald-600"
                                        >
                                          <Check className="h-4 w-4" />
                                          {t('admin.addProductOverview.sections.variants.saveVariant')}
                                        </button>
                                      </div>
                                    </Motion.div>
                                  )}
                                </AnimatePresence>
                              </Motion.div>
                            )
                          })}
                        </AnimatePresence>
                      </div>

                      <button
                        type="button"
                        onClick={addVariantGroup}
                        className="admin-add-variant-group-btn mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-3.5 text-[0.9rem] font-bold text-emerald-700 transition-all hover:border-emerald-400 hover:bg-emerald-100 hover:text-emerald-900"
                      >
                        <Plus className="h-5 w-5" />
                        {t('admin.addProductOverview.sections.variants.addGroup')}
                      </button>
                    </div>
                  ) : (
                    <div className="admin-no-variants-message rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 md:p-8 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <Info className="h-7 w-7" />
                        </div>
                        <p className="text-[0.9rem] md:text-[1rem] font-bold text-emerald-900">
                          {t('admin.addProductOverview.sections.variants.noVariantFields')}
                        </p>
                        <p className="text-[0.8rem] md:text-[0.85rem] text-emerald-800/70">
                          {t('admin.addProductOverview.sections.variants.noVariantFieldsSubtitle')}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#1E293B]/50">{t('admin.addProductOverview.sections.category.customFieldsTitle')}</h3>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          customFields: [...prev.customFields, { id: Date.now(), label: '', value: '' }]
                        }))}
                        className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-black text-[#1E293B]/80 transition-all hover:bg-emerald-100"
                      >
                        <Plus className="h-3 w-3" />
                        {t('admin.addProductOverview.sections.category.addFieldBtn')}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <AnimatePresence>
                        {formData.customFields.map((field, idx) => (
                          <Motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={field.id}
                            className="group flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-emerald-50 p-3 transition-all hover:bg-emerald-50/30"
                          >
                            <input
                              type="text"
                              value={field.label}
                              onChange={(e) => {
                                const newFields = [...formData.customFields]
                                newFields[idx].label = e.target.value
                                setFormData(prev => ({ ...prev, customFields: newFields }))
                              }}
                              placeholder={t('admin.addProductOverview.sections.category.fieldLabelPlaceholder')}
                              className="w-full sm:w-1/3 bg-transparent px-3 py-1 text-[0.88rem] font-bold text-[#1E293B]/90 outline-none placeholder:text-[#1E293B]/40"
                            />
                            <div className="hidden sm:block h-6 w-[2px] bg-emerald-200" />
                            <input
                              type="text"
                              value={field.value}
                              onChange={(e) => {
                                const newFields = [...formData.customFields]
                                newFields[idx].value = e.target.value
                                setFormData(prev => ({ ...prev, customFields: newFields }))
                              }}
                              placeholder={t('admin.addProductOverview.sections.category.fieldValuePlaceholder')}
                              className="flex-1 bg-transparent px-3 py-1 text-[0.88rem] text-[#1E293B]/80 outline-none placeholder:text-[#1E293B]/40"
                            />
                            <button
                              onClick={() => setFormData(prev => ({ ...prev, customFields: prev.customFields.filter((_, i) => i !== idx) }))}
                              className="self-end sm:self-center h-8 w-8 items-center justify-center rounded-xl bg-white text-[#1E293B]/40 transition-all hover:text-red-500 flex shadow-sm sm:opacity-0 group-hover:opacity-100"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </Motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </SectionCard>
              )}

              {currentStep === 'pricing' && (
                <SectionCard
                  key="pricing"
                  title={t('admin.addProductOverview.sections.pricing.title')}
                  subtitle={t('admin.addProductOverview.sections.pricing.subtitle')}
                  icon={DollarSign}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Field label={t('admin.addProductOverview.sections.pricing.priceLabel')} icon={DollarSign}>
                      <div className="relative">
                        <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 font-bold text-[#1E293B]/40">{t('admin.common.currencySymbol', '$')}</span>
                        <input type="number" value={formData.price} onChange={(e) => set('price', e.target.value)} className={`${inputCls} ltr:pl-8 rtl:pr-8 rtl:text-left`} placeholder="0.00" />
                      </div>
                    </Field>
                    <Field label={t('admin.addProductOverview.sections.pricing.salePriceLabel')} icon={Tag}>
                      <div className="relative">
                        <span className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 font-bold text-[#1E293B]/40">{t('admin.common.currencySymbol', '$')}</span>
                        <input type="number" value={formData.salePrice} onChange={(e) => set('salePrice', e.target.value)} className={`${inputCls} ltr:pl-8 rtl:pr-8 rtl:text-left`} placeholder="0.00" />
                      </div>
                    </Field>
                    <Field label={t('admin.addProductOverview.sections.pricing.stockLabel')} icon={Package}>
                      <input type="number" value={formData.stock} onChange={(e) => set('stock', e.target.value)} className={`${inputCls} rtl:text-left`} placeholder={t('admin.addProductOverview.sections.pricing.stockPlaceholder')} />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
                    <Field label={t('admin.addProductOverview.sections.pricing.skuLabel')} icon={Info} helpText={t('admin.addProductOverview.sections.pricing.skuHelp')}>
                      <input type="text" value={formData.sku} onChange={(e) => set('sku', e.target.value)} className={inputCls} placeholder={t('admin.addProductOverview.sections.pricing.skuPlaceholder')} />
                    </Field>
                    <Field label={t('admin.addProductOverview.sections.pricing.minOrderLabel')} icon={Package}>
                      <input type="number" value={formData.minOrder} onChange={(e) => set('minOrder', e.target.value)} className={`${inputCls} rtl:text-left`} placeholder="1" />
                    </Field>
                  </div>
                </SectionCard>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStep(STEPS[currentStepIndex - 1].id)}
                className="admin-cta-secondary flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 font-bold text-[#1E293B]/50 transition-all hover:text-[#1E293B]/80 disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" /> {t('common.previous')}
              </button>
              <div className="flex w-full sm:w-auto gap-4">
                {!isLastStep ? (
                  <button
                    onClick={handleNextStep}
                    className="admin-cta-premium flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-10 py-4 font-bold text-white shadow-xl transition-all sm:flex-none"
                  >
                    {t('common.next')} <ChevronRight className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="admin-cta-premium flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-10 py-4 font-bold text-white shadow-xl shadow-emerald-500/20 transition-all sm:flex-none"
                  >
                    <Check className="h-5 w-5" />
                    {isEditMode ? t('admin.addProductOverview.sections.actions.submitEdit') : t('admin.addProductOverview.sections.actions.submitAdd')}
                  </button>
                )}
              </div>
            </div>
          </div>

          <aside className="admin-media-sidebar space-y-6 md:space-y-8">
            <div className="lg:sticky lg:top-10 space-y-6 md:space-y-8">
              <section className="rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-6 shadow-sm ring-1 ring-emerald-100/50">
                <div className="relative mb-6 h-40 md:h-48 w-full overflow-hidden rounded-2xl md:rounded-3xl bg-emerald-50">
                  {formData.gallery.length > 0 ? (
                    <img
                      src={formData.gallery.find(i => i.isPrimary)?.preview || formData.gallery[0].preview}
                      className="h-full w-full object-cover"
                      alt="Preview"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ImageIcon className="h-8 w-8 md:h-10 md:w-10 text-[#1E293B]/30" />
                    </div>
                  )}
                  <div className="absolute left-3 top-3 md:left-4 md:top-4 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] md:text-[0.65rem] font-black uppercase tracking-widest text-[#1E293B]/80 backdrop-blur-sm">
                    {t('admin.common.preview')}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="line-clamp-2 text-lg md:text-xl font-black leading-tight text-[#1E293B]">
                    {formData.name || t('admin.addProductOverview.sections.summary.untitled', { defaultValue: 'Untitled Item' })}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-xl md:text-2xl font-black text-[#1E293B]/80">
                      {t('admin.common.currencySymbol', '$')}{formData.price || '0.00'}
                    </p>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`rounded-lg px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-widest ${formData.stock > 0 ? 'bg-emerald-50 text-[#1E293B]/80' : 'bg-red-50 text-red-600'}`}>
                        {formData.stock > 0
                          ? t('admin.addProductOverview.sections.summary.statusReady', { defaultValue: 'Ready in Stock' })
                          : t('admin.addProductOverview.sections.summary.statusOutOfStock', { defaultValue: 'No Stock Left' })}
                      </span>
                      <div className="flex items-center gap-1.5 px-1">
                        <div className={`h-1.5 w-1.5 rounded-full ${formData.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-300'}`} />
                        <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#1E293B]/50">
                          {t('admin.addProductOverview.sections.summary.listingHealth', { defaultValue: 'Listing Status' })}: {formData.status === 'active' ? t('admin.common.active') : t('admin.common.inactive')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-emerald-100" />
                  <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-bold text-[#1E293B]/50">
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
              </section>

              <section className="rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-[0.65rem] md:text-[0.7rem] font-black uppercase tracking-[0.2em] text-[#1E293B]">
                    {t('admin.addProductOverview.sections.media.title')}
                  </h3>
                  <span className="text-[0.65rem] font-bold text-[#1E293B]">{formData.gallery.length} / 10</span>
                </div>

                <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-100 bg-emerald-50/10 text-[#1E293B]/80 transition-all hover:bg-emerald-50 hover:border-emerald-300"
                  >
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <Plus className="h-4 w-4" />
                    </div>
                    <span className="text-[0.55rem] font-black uppercase tracking-widest">
                      {t('admin.addProductOverview.sections.media.upload')}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {formData.gallery.map((item) => (
                      <Motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={item.id}
                        className="group relative aspect-square overflow-hidden rounded-2xl bg-emerald-100"
                      >
                        {item.type === 'image' ? (
                          <img src={item.preview} className="h-full w-full object-cover transition-transform group-hover:scale-110" alt={item.name} />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-emerald-900">
                            <PlayCircle className="h-7 w-7 text-white" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-emerald-900/40 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            onClick={() => removeMedia(item.id)}
                            className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-md hover:bg-red-500"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => setPrimaryMedia(item.id)}
                            className={`w-full py-1 rounded-lg text-[0.5rem] md:text-[0.55rem] font-black uppercase tracking-widest backdrop-blur-md ${item.isPrimary ? 'bg-emerald-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
                          >
                            {item.isPrimary ? t('admin.addProductOverview.sections.media.primary') : t('admin.addProductOverview.sections.media.makePrimary')}
                          </button>
                        </div>
                        {item.isPrimary && (
                          <div className="absolute right-2 top-2 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-lg">
                            <Star className="h-2 w-2 md:h-2.5 md:w-2.5 fill-current" />
                          </div>
                        )}
                      </Motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <input ref={fileInputRef} type="file" multiple accept="image/*,video/*,application/pdf" className="hidden" onChange={handleMediaUpload} />
              </section>
            </div>
          </aside>
        </div>
      </main >
    </div >
  )
}
