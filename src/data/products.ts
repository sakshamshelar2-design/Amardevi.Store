import { Product } from '../types';

export const products: Product[] = [
  // Vegetables
  {
    id: 1,
    name: 'Fresh Tomatoes',
    price: 45,
    originalPrice: 55,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Vegetables',
    description: 'Fresh, juicy tomatoes perfect for cooking and salads',
    inStock: true,
    featured: true,
    onSale: true
  },
  {
    id: 2,
    name: 'Organic Onions',
    price: 35,
    image: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Vegetables',
    description: 'Premium quality organic onions',
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Fresh Potatoes',
    price: 25,
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Vegetables',
    description: 'High-quality potatoes for all your cooking needs',
    inStock: true
  },
  {
    id: 4,
    name: 'Green Capsicum',
    price: 65,
    originalPrice: 75,
    image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Vegetables',
    description: 'Fresh green bell peppers',
    inStock: true,
    onSale: true
  },
  
  // Fruits
  {
    id: 5,
    name: 'Fresh Apples',
    price: 180,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fruits',
    description: 'Crisp and sweet red apples',
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Bananas',
    price: 60,
    image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fruits',
    description: 'Fresh ripe bananas',
    inStock: true
  },
  {
    id: 7,
    name: 'Orange',
    price: 120,
    originalPrice: 140,
    image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fruits',
    description: 'Juicy oranges rich in Vitamin C',
    inStock: true,
    onSale: true
  },
  {
    id: 8,
    name: 'Grapes',
    price: 95,
    image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fruits',
    description: 'Sweet and fresh grapes',
    inStock: true,
    featured: true
  },
  
  // Dairy
  {
    id: 9,
    name: 'Fresh Milk',
    price: 55,
    image: 'https://images.pexels.com/photos/416830/pexels-photo-416830.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Pure fresh milk - 1 liter',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Paneer',
    price: 280,
    image: 'https://images.pexels.com/photos/6824540/pexels-photo-6824540.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cottage cheese - 250g',
    inStock: true
  },
  {
    id: 11,
    name: 'Butter',
    price: 85,
    originalPrice: 95,
    image: 'https://images.pexels.com/photos/5946088/pexels-photo-5946088.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Premium quality butter - 100g',
    inStock: true,
    onSale: true
  },
  {
    id: 12,
    name: 'Yogurt',
    price: 45,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh yogurt - 400g',
    inStock: true
  },
  
  // Snacks
  {
    id: 13,
    name: 'Mixed Nuts',
    price: 320,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Premium mixed nuts - 250g',
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Potato Chips',
    price: 25,
    image: 'https://images.pexels.com/photos/4274468/pexels-photo-4274468.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Crispy potato chips',
    inStock: true
  },
  {
    id: 15,
    name: 'Biscuits',
    price: 35,
    originalPrice: 45,
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Delicious cream biscuits',
    inStock: true,
    onSale: true
  },
  
  // Beverages
  {
    id: 16,
    name: 'Green Tea',
    price: 125,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    description: 'Premium green tea - 100g',
    inStock: true
  },
  {
    id: 17,
    name: 'Coffee Beans',
    price: 450,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true
  },
  {
    id: 18,
    name: 'Fresh Juice',
    price: 75,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    description: 'Fresh orange juice - 500ml',
    inStock: true,
    onSale: true
  },
  
  // Household
  {
    id: 19,
    name: 'Basmati Rice',
    price: 180,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Household',
    description: 'Premium Basmati rice - 1kg',
    inStock: true
  },
  {
    id: 20,
    name: 'Cooking Oil',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Household',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }
];

export const categories = [
  'All',
  'Vegetables',
  'Fruits',
  'Dairy',
  'Snacks',
  'Beverages',
  'Household'
];