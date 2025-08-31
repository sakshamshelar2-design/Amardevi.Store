import { Product } from '../types';

import { festiveProducts } from './festiveProducts';

export const products: Product[] = [
  // Wheat&Rice
  {
    id: 1,
    name: 'Gold wheat',
    price: 40,
    originalPrice: 55,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Wheat&Rice',
    description: 'Premium quality wheat flour for all your baking needs',
    inStock: true,
    featured: true,
    onSale: true,
    variants: [
      { id: '1-1kg', weight: '1 kg', price: 40, originalPrice: 55, discount: 15 },
      { id: '1-5kg', weight: '5 kg', price: 200, originalPrice: 230, discount: 30 },
      { id: '1-10kg', weight: '10 kg', price: 400, originalPrice: 450, discount: 50 }
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
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/534993827/HY/JP/NS/26757244/kushati-mini-mogra-basmati-rice-500x500.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/617iMYaN89L.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cleaning',
    description: 'Ariel liquid detergent - 1 liter',
    inStock: true
  },
  {
    id: 11,
    name: 'Tide Detergent Powder',
    price: 185,
    originalPrice: 205,
    image: 'https://kitchenclubindia.com/cdn/shop/files/tide_lemon_cef4368d-61d6-494b-9c16-39712b447f5a.jpg?v=1711096937?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Tide washing powder - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 12,
    name: 'Rin Detergent Bar',
    price: 45,
    image: 'https://m.media-amazon.com/images/I/71izyScfEiL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Rin detergent bar - 250g',
    inStock: true
  },
  
  // Pulses
  {
    id: 13,
    name: 'Toor Dal (Arhar)',
    price: 120,
    image: 'https://organofarmstore.co.in/wp-content/uploads/2023/09/toor-dal.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Premium quality Toor Dal - 1kg',
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Moong Dal',
    price: 135,
    image: 'https://zamaorganics.com/cdn/shop/files/WebsiteProductPhoto-SetMargins-2024-02-07T133451.393.png?v=1753422791?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Fresh Moong Dal - 1kg',
    inStock: true
  },
  {
    id: 15,
    name: 'Chana Dal',
    price: 95,
    originalPrice: 110,
    image: 'https://organofarmstore.co.in/wp-content/uploads/2023/09/rai-chana-daal.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Quality Chana Dal - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 16,
    name: 'Masoor Dal',
    price: 85,
    image: 'https://rexzeeimpex.com/wp-content/uploads/2024/02/masoor-dal-red-lentils.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Red lentils (Masoor Dal) - 1kg',
    inStock: true
  },
  {
    id: 17,
    name: 'Urad Dal',
    price: 145,
    image: 'https://zamaorganics.com/cdn/shop/files/WebsiteProductPhoto-SetMargins-2024-02-07T155151.458.png?v=1753180709?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://healthydig.in/wp-content/uploads/2020/10/Rajma-1.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Premium Rajma (Kidney Beans) - 1kg',
    inStock: true,
    onSale: true
  },
  {
    id: 19,
    name: 'Kabuli Chana',
    price: 125,
    image: 'https://thechakkico.com/cdn/shop/files/IMG_3874.jpg?v=1740166220?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'White chickpeas (Kabuli Chana) - 1kg',
    inStock: true
  },
  {
    id: 20,
    name: 'Black Chana',
    price: 95,
    image: 'https://5.imimg.com/data5/JD/BR/PT/SELLER-10619163/black-chana-dal-1000x1000.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Black chickpeas (Kala Chana) - 1kg',
    inStock: true
  },
  
  // Dairy (keeping existing)
  {
    id: 21,
    name: 'Gokul Milk',
    price: 29,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gokulmilk.coop%2Fproduct%2Fcow-milk-satvik-mumbai-and-pune-market&psig=AOvVaw3W5-I3ThTcoAng-sWH3Esb&ust=1756701906408000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLij_tGftI8DFQAAAAAdAAAAABAE?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Pure fresh milk - 500ml',
    inStock: true,
    featured: true
  },
  {
    id: 22,
    name: 'Gokul Milk',
    price: 37,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmydukaan.io%2Fanand110%2Fproducts%2Fgokul-buffalo-milk&psig=AOvVaw3C8tGtaodlEKzf8MYX8pGo&ust=1756702036039000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiV0YagtI8DFQAAAAAdAAAAABAL?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh MIlk- 500ml',
    inStock: true
  },
  {
    id: 23,
    name: 'Paneer',
    price: 280,
    image: 'https://etedge-insights.com/wp-content/uploads/2025/04/Paneer.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cottage cheese - 250g',
    inStock: true
  },
  {
    id: 24,
    name: 'Butter',
    price: 85,
    originalPrice: 95,
    image: 'https://maharajastoreus.com/wp-content/uploads/sites/9/2020/09/Amul.Butter.1.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Premium quality butter - 100g',
    inStock: true,
    onSale: true
  },
  {
    id: 25,
    name: 'Cheese cubes',
    price: 15,
    image: 'https://driftbasket.com/wp-content/uploads/2019/04/amul-cheese-2.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy',
    description: 'Fresh cheese- 30g',
    inStock: true
  },
  
  // Snacks (keeping existing)
 /* {
    id: 26,
    name: 'Mixed Nuts',
    price: 320,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Premium mixed nuts - 250g',
    inStock: true,
    featured: true
  },*/
  {
    id: 27,
    name: 'Potato Chips',
    price: 25,
    image: 'https://tiimg.tistatic.com/fp/1/007/475/classic-salted-handpicked-potatoes-chips-normally-mixed-with-masala-826.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Crispy potato chips',
    inStock: true
  },
 /* {
    id: 28,
    name: 'Parle Marie',
    price: 35,
    originalPrice: 45,
    image:'https://ik.imagekit.io/wlfr/wellness/images/products/340609-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Delicious cream biscuits',
    inStock: true,
    onSale: true
  },*/
  
  // Tea&Coffee (keeping existing)
  {
    id: 29,
    name: 'Red Label',
    price: 125,
    image: 'https://m.media-amazon.com/images/I/815gT66l2sL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Premium green tea - 100g',
    inStock: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  {
    id: 30,
    name: 'Society',
    price: 450,
    image: 'https://lh6.googleusercontent.com/proxy/4L4Da4C3e7WB8k9mJg5EXKXstMPxPb_5wOzpMj8BvK4hx-5iPhh21dY9c3WFwNcVK2Il8g0XhgkABcu3RXorS47ysXB9Cq9SeFae5oZrcYJ8L2g-p0OyWbfc9kpsWsrPsH5Iy6cSdDUi3g0?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  {
    id: 31,
    name: 'Lipton Green Tea',
    price: 75,
    originalPrice: 85,
    image: 'https://tiimg.tistatic.com/fp/1/007/963/freshly-lipton-pure-and-light-loose-green-tea-leaves-powder--229.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Fresh orange juice - 500ml',
    inStock: true,
    onSale: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  
  // Household (keeping existing)
 /* {
    id: 32,
    name: 'Cooking Oil',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Household',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/

  // Biscuits (keeping existing)
  {
    id: 33,
    name: 'Parle Marie',
    price: 145,
    originalPrice: 165,
    image: 'https://ik.imagekit.io/wlfr/wellness/images/products/340609-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://www.chai-masala.co.uk/wp-content/uploads/2021/12/paele-G-a-768x512.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://gpsretail.in/wp-content/uploads/2024/11/61kBRuYl3vL._AC_UF10001000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 36,
    name: 'Britannia Nutri Choice',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/71+kVe5LuiL.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/5/21/d7b08554-0580-42c1-a1d4-5bf90f84fd95_10595_1.png?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/41XPnuR-uJL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biscuits',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },   
  {
    id: 39,
    name: 'Bourbon',
    price: 145,
    originalPrice: 165,
    image: 'https://trustfamilyneeds.com/public/uploads/all/ABni7hDvtrnJkf22abcVPor2eJS7WrRvwn59PvBM.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/2/7/1063ebd7-d5ab-4254-9436-79c9a555f4d1_20691_1.png?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://cdn.shopaccino.com/edible-smart/products/britannia-50-50-sweet-amp-salty-biscuits-376979_l.jpg?v=589?param=1?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://gandhifood.com/cdn/shop/products/b5c22e_d82b2e9ee29640cf8985291058123b19_mv2_500x.jpg?v=1609651979?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/71Nh8WJmWNL._SL1500_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://storage.googleapis.com/shy-pub/408135/parle-20-20-rs-5-1731910085749_SKU-1559_0.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/81lRRRqzykL.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/61R96f7MhlL.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/41V-dhKC4eL._SY300_SX300_QL70_FMwebp_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/51PRk87+-bL._SY300_SX300_QL70_FMwebp_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://suhana.com/cdn/shop/files/AMB-TUR-100g-preview.png?v=1707833798?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  }, 
   {
    id: 50,
    name: 'Bedgi Mirchi Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://suhana.com/cdn/shop/files/Byadgi_Chilli_Regular.jpg?v=1711084714?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://assets.hyperpure.com/data/images/products/026b0092671ed0a06fc06a0b61a4caf2.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/9dc984fe-d387-4daa-b569-f5f20de34a8e.__CR0,0,300,300_PT0_SX300_V1___.png?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://file.hstatic.net/1000312435/file/1_3c2371bbd8754092bb6ea5fdccb7b100_grande.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/81xt1Y5COBL.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://i.ebayimg.com/images/g/6wEAAOSwZwNh83-z/s-l1200.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://www.suryamasale.com/product_images/uploaded_images/everest-sambhar-masala.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/71GZsVKyPwL.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://5.imimg.com/data5/ANDROID/Default/2024/3/402459562/HB/CB/BU/14029277/product-jpeg-500x500.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://suhana.com/cdn/shop/files/SUH-CM-200g-pouch-preview.png?v=1707833846?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv6ClkR1PNiQi5Aw5I9yrHwcUL5yeVSC4yQ&s?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/81aN-UDQL2L.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://suhana.com/cdn/shop/files/SUH-MM-50-box-1-e1681798292942.jpg?v=1707833881?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
 /* {
    id: 63,
    name: 'Biryani Masala Lucky  ',
    price: 145,
    originalPrice: 165,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JWn-mq8Y9OH28bh09aur-0eAxEwA6emXqw&s?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/
  /*{
    id: 64,
    name: 'Chicken Masala Everest   ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/
  {
    id: 65,
    name: 'Pani puri Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/81dRPmHKxyL.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/8e4b4f80-14d8-416a-938c-db14aa84dc4a.__CR0,0,1024,1024_PT0_SX300_V1___.png?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/71wK9rUJQCL._UF894,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://rukminim1.flixcart.com/image/300/300/xif0q/spice-masala/d/d/8/200-biryani-masala-100g-box-pack-of-2-pouch-2-suhana-powder-original-imaghgx2qdkj5gym.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JWn-mq8Y9OH28bh09aur-0eAxEwA6emXqw&?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  /* {
    id: 70,
    name: 'Kashmiri lal Masala   ',
    price: 145,
    originalPrice: 165,
    image: 'https://m.media-amazon.com/images/I/810TfyMSEFL._SX679_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/
   {
    id: 71,
    name: 'Garam Masala Everest  ',
    price: 145,
    originalPrice: 165,
    image: 'https://www.quickpantry.in/cdn/shop/products/everest-garam-masala-50-g-quick-pantry-1.jpg?v=1710537974?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/71DsmjB6-uL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/71hexcSRJFL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://cdn.grofers.com/da/cms-assets/cms/product/0403d492-6e67-4d04-a624-982558e59694.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://m.media-amazon.com/images/I/81cA6i92hIL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
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
    image: 'https://suhana.com/cdn/shop/files/SM-PT-1-preview_grande.png?v=1707833532?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 77,
    name: 'Matar Paneer Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://suhana.com/cdn/shop/files/SM-MP-1-1.jpg?v=1707833539?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   {
    id: 78,
    name: 'Baking Soda ',
    price: 145,
    originalPrice: 165,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/6/BI/RN/LF/146004054/sodamasala-1613020539111.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
   /*{
    id: 79,
    name: 'Baking Powder',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/
 /* {
    id: 80,
    name: 'Matter Paneer Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/
   {
    id: 81,
    name: 'Magic Masala',
    price: 145,
    originalPrice: 165,
    image: 'https://www.haridwarmart.com/wp-content/uploads/2020/12/haridwar-mart-maggi-masala.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },
  /* {
    id: 82,
    name: 'peri peri Masala ',
    price: 145,
    originalPrice: 165,
    image: 'https://www.jiomart.com/images/product/original/491598655/smith-jones-peri-peri-masala-72-g-product-images-o491598655-p491598655-0-202203170223.jpg?im=Resize=(1000,1000)?auto=compress&cs=tinysrgb&w=400',
    category: 'Masala',
    description: 'Pure cooking oil - 1 liter',
    inStock: true,
    onSale: true
  },*/

  // Cleaning 
   {
    id: 83,
    name: 'Vim Bar',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/61szrCRWOEL._SX569_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 84,
    name: 'Sargam Bar',
    price: 450,
    image: 'https://www.quickpantry.in/cdn/shop/products/saragm-plus-detergent-bar-200-g-quick-pantry.jpg?v=1710538674?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 85,
    name: 'Xpert Bar',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/41BiNkUT7nL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 86,
    name: 'Exo Bar',
    price: 450,
    image: 'https://www.jyothylabs.com/wp-content/uploads/2023/05/Exo-Bar-2023-02-1.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 87,
    name: 'Patanjali Super Bar',
    price: 450,
    image: 'https://patanjalinepal.org/wp-content/uploads/2022/02/Super-Dish-150g.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 88,
    name: 'Vim Liquid',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/41rNPhntiGL._SY300_SX300_QL70_FMwebp_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 89,
    name: 'Tide Bar',
    price: 450,
    image: 'https://eangadi.in/image/cache/catalog/Seller_10/eAngadi-LaundryandDetergents-TIDE-Detergent-BAR-350x350.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 90,
    name: 'Vanish',
    price: 450,
    image: 'https://www.vanish.co.in/static/feff9737370a5ab7a619d3d230801b5d/83d1b/vanish-oxi-action-liquid.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 91,
    name: 'Surf Excel Bar',
    price: 450,
    image: 'https://images.apollo247.in/pub/media/catalog/product/S/U/SUR0070_1-AUG23_1.jpg?tr=w-264,q-80,f-webp,dpr-1.25,c-at_max?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
  /*{
    id: 92,
    name: 'Vim Bar',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },*/
  /* {
    id: 93,
    name: 'Surf Excel',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },*/
   {
    id: 94,
    name: 'Wheel Powder',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/51Z7+v1MrUL._SY300_SX300_QL70_FMwebp_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 95,
    name: 'Nirma Powder',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/51r4BNYEEiL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 96,
    name: 'Ghadi Detergent',
    price: 450,
    image: 'https://5.imimg.com/data5/JX/CT/EV/SELLER-103215204/ghadi-detergent-powder-1kg-1000x1000.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
 /*  {
    id: 97,
    name: 'Rin Detergent',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },*/
   {
    id: 98,
    name: 'Santoor',
    price: 450,
    image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/soap/s/7/8/4-600-skin-moisturizing-sandal-turmeric-bathing-bar-soap-100gx2-original-imagxuysxhyzgp5z.jpeg?q=90&crop=false?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 99,
    name: 'Moti Sandal',
    price: 450,
    image: 'https://www.dawaiwala.com/pharmacy/img/60670939b4e46.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 100,
    name: 'Lifebuoy',
    price: 450,
    image: 'https://driftbasket.com/wp-content/uploads/2018/10/lifebuoy-soap.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 101,
    name: 'Dove',
    price: 450,
    image: 'https://static.wixstatic.com/media/6116de_59fb9393806c4c9eb8f5782aa469f0ae~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6116de_59fb9393806c4c9eb8f5782aa469f0ae~mv2.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 102,
    name: 'Medimix',
    price: 450,
    image: 'https://dayli.in/cdn/shop/files/Shop-Medimix-18-Herbs-Soap-Online-_-Ayurvedic-Soap-_-Bathing-Soap-edited_3_1.webp?v=1755888425&width=540?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 103,
    name: 'Lux Pink',
    price: 450,
    image: 'https://hbkirana.in/wp-content/uploads/2025/03/luxsoap-1738397960304.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 104,
    name: 'Lux Blue',
    price: 450,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJTqJ3up-pbaNl0X_YiHfPqIGiLoSKl-ZNQ&s?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 105,
    name: 'Lux White',
    price: 450,
    image: 'https://media.naheed.pk/catalog/product/cache/2f2d0cb0c5f92580479e8350be94f387/1/1/1198671-uni-rpl-1.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 106,
    name: 'Cinthol',
    price: 450,
    image: 'https://nmedicines.in/media/catalog/product/cache/11/image/586x/040ec09b1e35df139433887a97daa66f/7/1/71z_ta17nvl._sx355_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 107,
    name: 'Hamam',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/51vTy+8LuxL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 108,
    name: 'Liril',
    price: 450,
    image: 'https://cdn.grofers.com/da/cms-assets/cms/product/fc257532-6a1a-467a-a7ae-cb4c42e23562.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 109,
    name: 'Rexona',
    price: 450,
    image: 'https://dayli.in/cdn/shop/files/51WN3QnDeAL.jpg?v=1731063853?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 110,
    name: 'Colgate Toothpaste',
    price: 450,
    image: 'https://www.quickpantry.in/cdn/shop/files/Colgate_Strong_Teeth_Toothpaste_300_g_Quick_Pantry.jpg?v=1731146068&width=1214?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 111,
    name: 'Colgate Maxfresh Red',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/71cmWAJkH0L.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 112,
    name: 'Colgate Maxfresh Blue',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/61aPreWIR6L._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 113,
    name: 'Colgate Herbal',
    price: 450,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgM62_wcgkglrUP-L_qLSMe833g7687FN0AQ&s?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 114,
    name: 'Closeup',
    price: 450,
    image: 'https://www.quickpantry.in/cdn/shop/files/Close_Up_Everfresh_Anti-Germ_Gel_Toothpaste_-_Red_Hot.jpg?v=1738006096?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 115,
    name: 'Dabur Meswak',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/71JdxSoiNnL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 116,
    name: 'Pepsodent',
    price: 450,
    image: 'https://gandhifood.com/cdn/shop/files/Pepsodent-Toothpaste-Whitening-Cavity-Protection-150-g_dcd4bf3f-7b60-4138-9c85-8c3cc6570f24.e8da060b0c33c81b866122ceb1841627_1024x.jpg?v=1705175698?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 117,
    name: 'Patanjali Dant kanti',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/71gmZKTUXnL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 118,
    name: 'Sensodyne',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/41-ItCiVphL._SY300_SX300_QL70_FMwebp_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 119,
    name: 'Dabar Red,Babool',
    price: 450,
    image: 'https://tiimg.tistatic.com/fp/1/008/333/100-grams-provide-oral-complete-care-mint-and-clove-flavor-regular-toothpaste--710.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
 /*  {
    id: 120,
    name: 'Colgate Maxfresh',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },*/
 {
    id: 121,
    name: 'Colgate Toothbrush',
    price: 450,
    image: 'https://pxmshare.colgatepalmolive.com/JPEG_1500/43F3MbRhhVTyTgj4_ul_B.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
   {
    id: 122,
    name: 'OralB Toothbrush',
    price: 450,
    image: 'https://www.quickpantry.in/cdn/shop/products/oral-b-shiny-clean-toothbrush-1-pc-quick-pantry.jpg?v=1710538852?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },
 /*  {
    id: 123,
    name: 'Colgate Maxfresh',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Cleaning',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
     variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
  },*/

  //Snacks
  {   
    id: 124,
    name: 'VijayLaxmi Green Farsan',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/51IggS0CvcL.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
  
   {   
    id: 125,
    name: 'VijayLaxmi Blue Farsan',
    price: 450,
    image: 'https://images-eu.ssl-images-amazon.com/images/I/41V8TeolnnL._AC_UL600_SR600,600_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
    {   
    id: 126,
    name: 'VijayLaxmi Dryfruit Farsan',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/41+28JChy-L._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
  {   
    id: 127,
    name: 'VijayLaxmi Red Farsan',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/41vsNGajE0L.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
    {   
    id: 128,
    name: 'VijayLaxmi yellow Farsan',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
  {   
    id: 129,
    name: 'Apna Farsan',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
     {   
    id: 130,
    name: 'Apna Waffers',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
      {   
    id: 131,
    name: 'Apna Gathi Shev',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
  {   
    id: 132,
    name: 'Apan shev ',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
     {   
    id: 133,
    name: 'Haldiram Aalu bhujiya',
    price: 450,
    image: 'https://shopdesi.shop/cdn/shop/files/IMG_3698.webp?v=1733517525?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
     {   
    id: 134,
    name: 'Bhudhani Waffers',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/613YsD3NWfL._UF1000,1000_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
      {   
    id: 135,
    name: 'Soya sticks',
    price: 450,
    image: 'https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/s/o/soya_sticks200_1.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Snacks',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
   },
  //Dal
    {   
    id: 136,
    name: 'Sabudane',
    price: 450,
    image: 'https://nuttyyogi.com/cdn/shop/products/CrunchyChatpataCashews_5.png?v=1680770153?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   {   
    id: 137,
    name: 'Penuts',
    price: 450,
    image: 'https://images.timesnownews.com/thumb/msid-95253806,thumbsize-40916,width-1280,height-720,resizemode-75/95253806.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Premium Qality penuts',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   {   
    id: 138,
    name: 'Harbara Dal',
    price: 450,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/449076072/DU/DU/PM/14349033/yellow-split-gram-dal-500x500.png?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
    {   
    id: 139,
    name: 'Sugar',
    price: 450,
    image: 'https://foodbeverageasia.com/wp-content/uploads/2022/03/resized_Sugar-Bag.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'High Qality Sugar',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   {   
    id: 140,
    name: 'Akha Masoor',
    price: 450,
    image: 'https://images.slurrp.com/webstories/wp-content/uploads/2023/07/14124349/shutterstock_2208744843.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   {   
    id: 141,
    name: 'Dhane',
    price: 450,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYtF6vDVlmHelMtJLKYcuV1qBvFKy3kLWfQ&s?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   {   
    id: 142,
    name: 'Matki',
    price: 450,
    image: 'https://image1.jdomni.in/product/13042024/01/15/77/2D713D293498EB8F87FC54B614_1713018477676.jpg?fit=around|500:500?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   {   
    id: 143,
    name: 'Akha Moong',
    price: 450,
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/whole-green-moong-dal-500-gm-2228324596-m8c3nlfa.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dals',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
  //dryfruits
   {   
    id: 144,
    name: 'Badam',
    price: 450,
    image: 'https://i0.wp.com/rqn.com.au/wp-content/uploads/2016/12/Salted-Roasted-Australian-Almonds-compress.jpg?fit=600%2C600&ssl=1?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
   /*  {   
    id: 145,
    name: 'Badam',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },*/
     {   
    id: 146,
    name: 'Kaju',
    price: 450,
    image: 'https://www.thegreenfuels.com/cdn/shop/files/CashewGoan-Big.jpg?v=1741668007&width=1445?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
     {   
    id: 147,
    name: 'Dates(Dry)',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/71s4g4SHLrL._UF350,350_QL80_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
     {   
    id: 148,
    name: 'Dates(wet)',
    price: 450,
    image: 'https://safadryfruitsandspices.com/wp-content/uploads/2024/01/Untitled-design-32-430x484.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
     {   
    id: 149,
    name: 'Black Manuke',
    price: 450,
    image: 'https://image1.jdomni.in/product/13042024/C1/3F/22/144D9268CC05CC8FF760B93F10_1712996066657.webp?fit=around|500:500?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
     {   
    id: 150,
    name: 'Manuke(kishmish)',
    price: 450,
    image: 'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/0512886e-729d-47c8-8503-65abf6dc3de1/1676702265909.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dry Fruits',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
   },
  //kitchen
    {   
    id: 151,
    name: 'Gemini Sunflower',
    price: 450,
    image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/edible-oil/v/6/d/-original-imahcarehgzpfwtg.jpeg?q=90&crop=false?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
      variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
      {   
    id: 153,
    name: 'Sunny Sunflower Oil',
    price: 450,
    image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/edible-oil/w/2/x/-original-imahd86wdfuuqgyk.jpeg?q=90&crop=false?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
        variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
      },
      {   
    id: 154,
    name: 'Sunny Soyabean Oil',
    price: 450,
    image: 'https://img.cdnx.in/390585/Sunnysoyabean1lit-1729063347908.png?width=600&format=webp?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
        variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
      },
    {   
    id: 155,
    name: 'Sunny Groundnut Oil',
    price: 450,
    image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/edible-oil/u/o/v/-original-imahdwzymm3jrghf.jpeg?q=90&crop=false?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
    }, 
   {   
    id: 156,
    name: 'Til Oil (Devacha Tel)',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
    }, 
   {   
    id: 157,
    name: 'Samrat Besan ',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/511vTTmO7hL._AC_SY350_QL15_.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 158,
    name: 'Heera Besan ',
    price: 450,
    image: 'https://img.thecdn.in/408135/hira-besan-1731910069954_SKU-1523_0.png?format=webp?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
   {   
    id: 159,
    name: 'Samrat Maida ',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
   {   
    id: 160,
    name: 'Samrat Rava ',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
   {   
    id: 161,
    name: 'Samrat Suji ',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 162,
    name: 'Heera Besan',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Kitchen',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 163,
    name: 'Nescafe',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
   {   
    id: 164,
    name: 'Bru',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 165,
    name: 'Wagh Bakri',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 166,
    name: 'Taj Mahal',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
   {   
    id: 167,
    name: 'Vikram Dust',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 168,
    name: 'Vikram Gold',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    }, 
   {   
    id: 169,
    name: '',
    price: 450,
    image: 'https://sfbaycoffee.com/cdn/shop/articles/SFB_LFS_BeansVsGrounds_blog.jpg?v=1686342662?auto=compress&cs=tinysrgb&w=400',
    category: 'Tea&Coffee',
    description: 'Aromatic coffee beans - 500g',
    inStock: true,
    featured: true,
       variants: [
      { id: '2-1kg', weight: '1 kg', price: 52 },
      { id: '2-5kg', weight: '5 kg', price: 245 },
      { id: '2-10kg', weight: '10 kg', price: 470 }
    ]
    },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
].concat(festiveProducts.map(product => ({ ...product, featured: true })));

export const categories = [
  'All',
  'Wheat&Rice',
  'Dals',
  'Kitchen',
  'Masala',
  'Tea&Coffee',
  'Biscuits',
  'Dry Fruits',
  'Cleaning',
  'Snacks',
  'Dairy'
];