import { Product } from '../types';

export const products: Product[] = [
  // Wheat
  {
    id: 1,
    name: 'Gold wheat',
    price: 45,
    originalPrice: 55,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat',
    description: 'Premium quality wheat flour for all your baking needs',
    inStock: true,
    featured: true,
    onSale: true
  },
  {
    id: 2,
    name: 'Rajwadi wheat',
    price: 52,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat',
    description: 'Nutritious whole wheat flour rich in fiber',
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Organic Wheat Flour',
    price: 68,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat',
    description: 'Certified organic wheat flour - 1kg',
    inStock: true
  },
  {
    id: 4,
    name: 'Multi-Grain Flour',
    price: 75,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat',
    description: 'Healthy multi-grain flour blend',
    inStock: true,
    onSale: true
  },
  
  // Rice
  {
    id: 5,
    name: 'Basmati Rice Premium',
    price: 180,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Rice',
    description: 'Premium quality Basmati rice - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Jasmine Rice',
    price: 160,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Rice',
    description: 'Fragrant Jasmine rice - 1kg',
    inStock: true
  },
  {
    id: 7,
    name: 'Brown Rice',
    price: 120,
    originalPrice: 140,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Rice',
    description: 'Healthy brown rice rich in nutrients - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 8,
    name: 'Sona Masoori Rice',
    price: 95,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Rice',
    description: 'Premium Sona Masoori rice - 1kg',
    inStock: true,
    featured: true
  },
  
  // Detergent
  {
    id: 9,
    name: 'Surf Excel Detergent',
    price: 155,
    image: 'https://m.media-amazon.com/images/I/619HRPW3elL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Detergent',
    description: 'Surf Excel washing powder - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Ariel Liquid Detergent',
    price: 280,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Detergent',
    description: 'Ariel liquid detergent - 1 liter',
    inStock: true
  },
  {
    id: 11,
    name: 'Tide Detergent Powder',
    price: 185,
    originalPrice: 205,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Detergent',
    description: 'Tide washing powder - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 12,
    name: 'Rin Detergent Bar',
    price: 45,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Detergent',
    description: 'Rin detergent bar - 250g',
    inStock: true
  },
  
  // Pulses
  {
    id: 13,
    name: 'Toor Dal (Arhar)',
    price: 120,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Premium quality Toor Dal - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Moong Dal',
    price: 135,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Fresh Moong Dal - 1kg',
    inStock: true
  },
  {
    id: 15,
    name: 'Chana Dal',
    price: 95,
    originalPrice: 110,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Quality Chana Dal - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 16,
    name: 'Masoor Dal',
    price: 85,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Red lentils (Masoor Dal) - 1kg',
    inStock: true
  },
  {
    id: 17,
    name: 'Urad Dal',
    price: 145,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Black gram (Urad Dal) - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 18,
    name: 'Rajma (Kidney Beans)',
    price: 165,
    originalPrice: 185,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Premium Rajma (Kidney Beans) - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 19,
    name: 'Kabuli Chana',
    price: 125,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'White chickpeas (Kabuli Chana) - 1kg',
    inStock: true
  },
  {
    id: 20,
    name: 'Black Chana',
    price: 95,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pulses',
    description: 'Black chickpeas (Kala Chana) - 1kg',
    inStock: true
  },
  
  // Dairy (keeping existing)
  {
    id: 21,
    name: 'Gokul MIlk',
    price: 29,
    image: 'https://www.google.com/imgres?q=gokul%20milk%20images&imgurl=https%3A%2F%2Fwww.bbassets.com%2Fmedia%2Fuploads%2Fp%2Fl%2F40141618_2-gokul-buffalo-milk.jpg&imgrefurl=https%3A%2F%2Fwww.bigbasket.com%2Fpd%2F40141618%2Fgokul-buffalo-milk-500-ml-pouch%2F&docid=SPQKPHL3KJAZrM&tbnid=UAFdd01D3_CexM&vet=12ahUKEwiboazj2p2PAxVuxTgGHYUOMZEQM3oECBgQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiboazj2p2PAxVuxTgGHYUOMZEQM3oECBgQAA',
    category: 'Dairy',
    description: 'Pure fresh milk - 500ml',
    inStock: true,
    featured: true
  },
  {
    id: 22,
    name: 'Gokul milk',
    price: 37,
    image: 'https://images.pexels.com/photos/6824540/pexels-photo-6824540.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh MIlk- 500ml',
    inStock: true
  },
  {
    id: 23,
    name: 'Paneer',
    price: 280,
    image: 'https://images.pexels.com/photos/6824540/pexels-photo-6824540.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cottage cheese - 250g',
    inStock: true
  },
  {
    id: 24,
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
    id: 25,
    name: 'Cheese cubes',
    price: 15,
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cheese- 30g',
    inStock: true
  },
  
  // Snacks (keeping existing)
  {
    id: 26,
    name: 'Mixed Nuts',
    price: 320,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Premium mixed nuts - 250g',
    inStock: true,
    featured: true
  },
  {
    id: 27,
    name: 'Potato Chips',
    price: 25,
    image: 'https://images.pexels.com/photos/4274468/pexels-photo-4274468.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Crispy potato chips',
    inStock: true
  },
  {
    id: 28,
    name: 'Parle Marie',
    price: 35,
    originalPrice: 45,
    image:'https://m.media-amazon.com/images/I/81sxxaCw35L.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Delicious cream biscuits',
    inStock: true,
    onSale: true
  },
  
  // Beverages (keeping existing)
  {
    id: 29,
    name: 'Green Tea',
    price: 125,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    description: 'Premium green tea - 100g',
    inStock: true
  },
  {
    id: 30,
    name: 'Coffee Beans',
    price: 450,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true
  },
  {
    id: 31,
    name: 'Fresh Juice',
    price: 75,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    description: 'Fresh orange juice - 500ml',
    inStock: true,
    onSale: true
  },
  
  // Household (keeping existing)
  {
    id: 32,
    name: 'Cooking Oil',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Household',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },

  // Biscuits (keeping existing)
  {
    id: 33,
    name: 'Parle Marie',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 34,
    name: 'Parle G',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Best biscuits - 100g',
    inStock: true,
    onSale: true
  },   
  {
    id: 35,
    name: 'Good day',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 36,
    name: 'Britannia Nutri CHoice',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 37,
    name: 'Oreo chocolate',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 38,
    name: 'Oreo cream',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 39,
    name: 'Borboun',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 40,
    name: 'Hide&Seek',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 41,
    name: 'Parle 50-50',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 42,
    name: 'Parle krackjack',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 43,
    name: 'Parle Monaco',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
   {
    id: 44,
    name: 'Parle 20-20',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
   {
    id: 45,
    name: 'Dark Fantasy',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 46,
    name: 'nice Time',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },  

   // Masala (keeping existing)  
   
   {
    id: 47,
    name: 'Kanda Lasun Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },    
  
  {
    id: 48,
    name: 'Mirchi Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },    
  {
    id: 49,
    name: 'Halad Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
   {
    id: 50,
    name: 'Badgi Mirchi Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
  {
    id: 51,
    name: 'Dhana Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 52,
    name: 'Pav bhaji Masala Everst',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
  {
    id: 53,
    name: 'Shahi Paneer Masala Everst',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 54,
    name: 'Chole Masala Everst',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 55,
    name: 'Misal Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 56,
    name: 'Samber Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 57,
    name: 'Sabji Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },

  
  
];

export const categories = [
  'All',
  'Wheat',
  'Rice',
  'Detergent',
  'Pulses',
  'Dairy',
  'Snacks',
  'Beverages',
  'Household'
];