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