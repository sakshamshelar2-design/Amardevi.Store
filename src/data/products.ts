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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKO4wKOIWVNv01RJUIK8Ag-ryNY_T9wcfnYw&s?auto=compress&cs=tinysrgb&w=400',
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
    image: 'data:image/jpeg;base64,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?auto=compress&cs=tinysrgb&w=400',
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