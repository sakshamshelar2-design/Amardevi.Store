import { Product } from '../types';

export const products: Product[] = [
  // Wheat&Rice
  {
    id: 1,
    name: 'Gold wheat',
    price: 45,
    originalPrice: 55,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium quality wheat flour for all your baking needs',
    inStock: true,
    featured: true,
    onSale: true,
    variants: [
      { id: '1-1kg', weight: '1 kg', price: 45, originalPrice: 55, discount: 18 },
      { id: '1-5kg', weight: '5 kg', price: 210, originalPrice: 250, discount: 16 },
      { id: '1-10kg', weight: '10 kg', price: 400, originalPrice: 480, discount: 17 }
    ]
  },
  {
    id: 2,
    name: 'Rajwadi wheat',
    price: 52,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Nutritious whole wheat flour rich in fiber',
    inStock: true,
    featured: true,
    variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  {
    id: 3,
    name: 'Organic Wheat Flour',
    price: 68,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Certified organic wheat flour - 1kg',
    inStock: true,
    variants: [
      { id: '3-500g', weight: '500 g', price: 38 },
      { id: '3-1kg', weight: '1 kg', price: 68 },
      { id: '3-2kg', weight: '2 kg', price: 130 }
    ]
  },
  {
    id: 4,
    name: 'Multi-Grain Flour',
    price: 75,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Healthy multi-grain flour blend',
    inStock: true,
    onSale: true,
    variants: [
      { id: '4-1kg', weight: '1 kg', price: 75, originalPrice: 85, discount: 12 },
      { id: '4-5kg', weight: '5 kg', price: 360, originalPrice: 400, discount: 10 }
    ]
  },
  
  {
    id: 5,
    name: 'Basmati Rice Premium',
    price: 180,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium quality Basmati rice - 1kg',
    inStock: true,
    featured: true,
    variants: [
      { id: '5-1kg', weight: '1 kg', price: 180 },
      { id: '5-5kg', weight: '5 kg', price: 850 },
      { id: '5-10kg', weight: '10 kg', price: 1650 },
      { id: '5-25kg', weight: '25 kg', price: 4000 }
    ]
  },
  {
    id: 6,
    name: 'Jasmine Rice',
    price: 160,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Fragrant Jasmine rice - 1kg',
    inStock: true,
    variants: [
      { id: '6-1kg', weight: '1 kg', price: 160 },
      { id: '6-5kg', weight: '5 kg', price: 750 },
      { id: '6-10kg', weight: '10 kg', price: 1450 }
    ]
  },
  {
    id: 7,
    name: 'Brown Rice',
    price: 120,
    originalPrice: 140,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Healthy brown rice rich in nutrients - 1kg',
    inStock: true,
    onSale: true,
    variants: [
      { id: '7-1kg', weight: '1 kg', price: 120, originalPrice: 140, discount: 14 },
      { id: '7-5kg', weight: '5 kg', price: 580, originalPrice: 650, discount: 11 }
    ]
  },
  {
    id: 8,
    name: 'Sona Masoori Rice',
    price: 95,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium Sona Masoori rice - 1kg',
    inStock: true,
    featured: true,
    variants: [
      { id: '8-1kg', weight: '1 kg', price: 95 },
      { id: '8-5kg', weight: '5 kg', price: 450 },
      { id: '8-10kg', weight: '10 kg', price: 880 },
      { id: '8-25kg', weight: '25 kg', price: 2100 }
    ]
  },
  
  // Detergent
  {
    id: 9,
    name: 'Surf Excel Detergent',
    price: 155,
    image: 'https://m.media-amazon.com/images/I/619HRPW3elL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Surf Excel washing powder - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Ariel Liquid Detergent',
    price: 280,
    image: 'data:image/jpeg;base64,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?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Ariel liquid detergent - 1 liter',
    inStock: true
  },
  {
    id: 11,
    name: 'Tide Detergent Powder',
    price: 185,
    originalPrice: 205,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Tide washing powder - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 12,
    name: 'Rin Detergent Bar',
    price: 45,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Rin detergent bar - 250g',
    inStock: true
  },
  
  // Pulses
  {
    id: 13,
    name: 'Toor Dal (Arhar)',
    price: 120,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Premium quality Toor Dal - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Moong Dal',
    price: 135,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Fresh Moong Dal - 1kg',
    inStock: true
  },
  {
    id: 15,
    name: 'Chana Dal',
    price: 95,
    originalPrice: 110,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Quality Chana Dal - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 16,
    name: 'Masoor Dal',
    price: 85,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Red lentils (Masoor Dal) - 1kg',
    inStock: true
  },
  {
    id: 17,
    name: 'Urad Dal',
    price: 145,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
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
    category: 'Dals',
    description: 'Premium Rajma (Kidney Beans) - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 19,
    name: 'Kabuli Chana',
    price: 125,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'White chickpeas (Kabuli Chana) - 1kg',
    inStock: true
  },
  {
    id: 20,
    name: 'Black Chana',
    price: 95,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
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
    name: 'Pav bhaji Masala Everest',
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
    name: 'Shahi Paneer Masala Everest',
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
    name: 'Chole Masala Everest',
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
    name: 'Sambhar Masala',
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
  {
    id: 58,
    name: 'Chicken Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 59,
    name: 'Chicken Masala Suhana   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 60,
    name: 'Chicken Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 61,
    name: 'Mutton Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 62,
    name: 'Mutton Masala Suhana   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 63,
    name: 'Mutton Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 64,
    name: 'Chicken Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 65,
    name: 'Pani puri Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 66,
    name: 'Kasturi Mathi',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 67,
    name: 'Biryani Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 68,
    name: 'Biryani Masala Suhana  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  {
    id: 69,
    name: 'Biryani Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 70,
    name: 'Kashmiri lal Masala   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 71,
    name: 'Garam Masala Everest  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 72,
    name: 'Kitchen King Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 73,
    name: 'Chaat Masala  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 74,
    name: 'Egg Curry Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 75,
    name: 'Paneer Butter Masala  ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 76,
    name: 'Paneer Tikka Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 77,
    name: 'Mutter Paneer Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 78,
    name: ' Soda ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 79,
    name: 'Baking Soda ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, {
    id: 80,
    name: 'Mutter Paneer Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 81,
    name: 'Magic Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 82,
    name: 'peri peri Masala ',
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