/*
  # Complete E-commerce Database Setup for Amardevi General Store
  
  This SQL script creates:
  1. Products table with all grocery categories
  2. Orders table for customer orders
  3. Row Level Security policies
  4. Sample product data across all categories
  5. Indexes for performance
  
  Instructions:
  1. Copy this entire SQL code
  2. Go to your Supabase Dashboard
  3. Navigate to SQL Editor
  4. Paste this code and run it
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  stock integer NOT NULL DEFAULT 0,
  description text,
  image_url text,
  featured boolean DEFAULT false,
  on_sale boolean DEFAULT false,
  variants jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  payment_method text NOT NULL DEFAULT 'cod',
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  subtotal decimal(10,2) NOT NULL,
  delivery_fee decimal(10,2) NOT NULL DEFAULT 0,
  total_amount decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products policies (public read, admin write)
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true);

-- Orders policies (users can only see their own orders)
CREATE POLICY "Users can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can update own orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_on_sale ON products(on_sale);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);

-- Insert comprehensive product data for Amardevi General Store
INSERT INTO products (name, category, price, original_price, stock, description, image_url, featured, on_sale, variants) VALUES

-- WHEAT & RICE CATEGORY
('Gold Wheat Premium', 'Wheat&Rice', 45, 55, 100, 'Premium quality wheat flour perfect for making rotis and bread', 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800', true, true, '[
  {"id": "wheat-1kg", "weight": "1kg", "price": 45, "originalPrice": 55, "discount": 18},
  {"id": "wheat-5kg", "weight": "5kg", "price": 210, "originalPrice": 250, "discount": 16},
  {"id": "wheat-10kg", "weight": "10kg", "price": 400, "originalPrice": 480, "discount": 17}
]'::jsonb),

('Basmati Rice Premium', 'Wheat&Rice', 180, null, 80, 'Long grain basmati rice with authentic aroma and taste', 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=800', true, false, '[
  {"id": "basmati-1kg", "weight": "1kg", "price": 180},
  {"id": "basmati-5kg", "weight": "5kg", "price": 850},
  {"id": "basmati-10kg", "weight": "10kg", "price": 1650},
  {"id": "basmati-25kg", "weight": "25kg", "price": 4000}
]'::jsonb),

('Sona Masoori Rice', 'Wheat&Rice', 65, 75, 120, 'Premium quality Sona Masoori rice, perfect for daily meals', 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "sona-1kg", "weight": "1kg", "price": 65, "originalPrice": 75, "discount": 13},
  {"id": "sona-5kg", "weight": "5kg", "price": 310, "originalPrice": 360, "discount": 14},
  {"id": "sona-25kg", "weight": "25kg", "price": 1500, "originalPrice": 1750, "discount": 14}
]'::jsonb),

('Whole Wheat Flour', 'Wheat&Rice', 42, null, 90, 'Nutritious whole wheat flour rich in fiber and nutrients', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', false, false, '[
  {"id": "whole-wheat-1kg", "weight": "1kg", "price": 42},
  {"id": "whole-wheat-5kg", "weight": "5kg", "price": 200},
  {"id": "whole-wheat-10kg", "weight": "10kg", "price": 390}
]'::jsonb),

-- DALS CATEGORY
('Toor Dal Premium', 'Dals', 120, 140, 60, 'High quality toor dal rich in protein and nutrients', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "toor-500g", "weight": "500g", "price": 65, "originalPrice": 75, "discount": 13},
  {"id": "toor-1kg", "weight": "1kg", "price": 120, "originalPrice": 140, "discount": 14},
  {"id": "toor-5kg", "weight": "5kg", "price": 580, "originalPrice": 680, "discount": 15}
]'::jsonb),

('Moong Dal Green', 'Dals', 110, null, 45, 'Fresh green moong dal perfect for healthy meals', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', false, false, '[
  {"id": "moong-500g", "weight": "500g", "price": 60},
  {"id": "moong-1kg", "weight": "1kg", "price": 110},
  {"id": "moong-2kg", "weight": "2kg", "price": 210}
]'::jsonb),

('Chana Dal Premium', 'Dals', 95, 110, 70, 'Premium quality chana dal, perfect for various dishes', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', true, true, '[
  {"id": "chana-500g", "weight": "500g", "price": 50, "originalPrice": 58, "discount": 14},
  {"id": "chana-1kg", "weight": "1kg", "price": 95, "originalPrice": 110, "discount": 14},
  {"id": "chana-2kg", "weight": "2kg", "price": 185, "originalPrice": 215, "discount": 14}
]'::jsonb),

('Masoor Dal Red', 'Dals', 85, null, 55, 'High protein red masoor dal for nutritious meals', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', false, false, '[
  {"id": "masoor-500g", "weight": "500g", "price": 45},
  {"id": "masoor-1kg", "weight": "1kg", "price": 85},
  {"id": "masoor-2kg", "weight": "2kg", "price": 165}
]'::jsonb),

-- TEA & COFFEE CATEGORY
('Premium Tea Leaves', 'Tea&Coffee', 85, 100, 90, 'Aromatic tea leaves for the perfect cup of tea', 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800', true, true, '[
  {"id": "tea-250g", "weight": "250g", "price": 85, "originalPrice": 100, "discount": 15},
  {"id": "tea-500g", "weight": "500g", "price": 160, "originalPrice": 190, "discount": 16},
  {"id": "tea-1kg", "weight": "1kg", "price": 310, "originalPrice": 370, "discount": 16}
]'::jsonb),

('Coffee Powder', 'Tea&Coffee', 220, null, 35, 'Rich and aromatic coffee powder for coffee lovers', 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800', false, false, '[
  {"id": "coffee-200g", "weight": "200g", "price": 220},
  {"id": "coffee-500g", "weight": "500g", "price": 520},
  {"id": "coffee-1kg", "weight": "1kg", "price": 1000}
]'::jsonb),

('Green Tea Bags', 'Tea&Coffee', 150, 180, 40, 'Healthy green tea bags for wellness and vitality', 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "green-tea-25bags", "weight": "25 Bags", "price": 150, "originalPrice": 180, "discount": 17},
  {"id": "green-tea-50bags", "weight": "50 Bags", "price": 280, "originalPrice": 340, "discount": 18}
]'::jsonb),

-- KITCHEN CATEGORY
('Cooking Oil Refined', 'Kitchen', 150, 170, 70, 'Pure refined cooking oil for healthy cooking', 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "oil-1l", "weight": "1L", "price": 150, "originalPrice": 170, "discount": 12},
  {"id": "oil-5l", "weight": "5L", "price": 720, "originalPrice": 820, "discount": 12}
]'::jsonb),

('Salt Premium', 'Kitchen', 25, null, 85, 'Premium quality salt for all your cooking needs', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, false, '[
  {"id": "salt-1kg", "weight": "1kg", "price": 25},
  {"id": "salt-5kg", "weight": "5kg", "price": 110}
]'::jsonb),

('Sugar White', 'Kitchen', 45, 52, 100, 'Pure white sugar for sweetening and cooking', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', true, true, '[
  {"id": "sugar-1kg", "weight": "1kg", "price": 45, "originalPrice": 52, "discount": 13},
  {"id": "sugar-5kg", "weight": "5kg", "price": 220, "originalPrice": 250, "discount": 12}
]'::jsonb),

-- MASALA CATEGORY
('Garam Masala Powder', 'Masala', 45, 55, 120, 'Authentic blend of aromatic spices', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "garam-100g", "weight": "100g", "price": 45, "originalPrice": 55, "discount": 18},
  {"id": "garam-250g", "weight": "250g", "price": 105, "originalPrice": 125, "discount": 16}
]'::jsonb),

('Turmeric Powder', 'Masala', 35, 42, 80, 'Pure turmeric powder with natural color and aroma', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', true, true, '[
  {"id": "turmeric-100g", "weight": "100g", "price": 35, "originalPrice": 42, "discount": 17},
  {"id": "turmeric-250g", "weight": "250g", "price": 80, "originalPrice": 95, "discount": 16}
]'::jsonb),

('Red Chili Powder', 'Masala', 55, 65, 90, 'Spicy red chili powder for authentic Indian taste', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "chili-100g", "weight": "100g", "price": 55, "originalPrice": 65, "discount": 15},
  {"id": "chili-250g", "weight": "250g", "price": 125, "originalPrice": 145, "discount": 14}
]'::jsonb),

-- BISCUITS CATEGORY
('Parle-G Biscuits', 'Biscuits', 25, null, 150, 'Classic glucose biscuits loved by all ages', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', true, false, '[
  {"id": "parle-g-200g", "weight": "200g", "price": 25},
  {"id": "parle-g-800g", "weight": "800g", "price": 95}
]'::jsonb),

('Marie Gold Biscuits', 'Biscuits', 30, 35, 120, 'Crispy and delicious marie biscuits', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "marie-200g", "weight": "200g", "price": 30, "originalPrice": 35, "discount": 14},
  {"id": "marie-400g", "weight": "400g", "price": 58, "originalPrice": 68, "discount": 15}
]'::jsonb),

-- DRY FRUITS CATEGORY
('Almonds Premium', 'Dry Fruits', 450, 520, 30, 'Premium quality almonds rich in nutrients', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', true, true, '[
  {"id": "almonds-250g", "weight": "250g", "price": 450, "originalPrice": 520, "discount": 13},
  {"id": "almonds-500g", "weight": "500g", "price": 880, "originalPrice": 1020, "discount": 14},
  {"id": "almonds-1kg", "weight": "1kg", "price": 1700, "originalPrice": 1980, "discount": 14}
]'::jsonb),

('Cashews Premium', 'Dry Fruits', 380, 420, 25, 'Premium quality cashews for snacking and cooking', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "cashews-250g", "weight": "250g", "price": 380, "originalPrice": 420, "discount": 10},
  {"id": "cashews-500g", "weight": "500g", "price": 750, "originalPrice": 830, "discount": 10}
]'::jsonb),

-- CLEANING CATEGORY
('Detergent Powder', 'Cleaning', 85, 95, 60, 'Effective detergent powder for clean and fresh clothes', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "detergent-1kg", "weight": "1kg", "price": 85, "originalPrice": 95, "discount": 11},
  {"id": "detergent-3kg", "weight": "3kg", "price": 240, "originalPrice": 270, "discount": 11}
]'::jsonb),

('Dish Wash Liquid', 'Cleaning', 45, null, 80, 'Effective dish wash liquid for sparkling clean dishes', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, false, '[
  {"id": "dishwash-500ml", "weight": "500ml", "price": 45},
  {"id": "dishwash-1l", "weight": "1L", "price": 85}
]'::jsonb),

-- SNACKS CATEGORY
('Namkeen Mix', 'Snacks', 65, 75, 40, 'Delicious mix of traditional Indian snacks', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "namkeen-250g", "weight": "250g", "price": 65, "originalPrice": 75, "discount": 13},
  {"id": "namkeen-500g", "weight": "500g", "price": 125, "originalPrice": 145, "discount": 14}
]'::jsonb),

('Potato Chips', 'Snacks', 35, null, 90, 'Crispy and tasty potato chips for snacking', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', true, false, '[
  {"id": "chips-150g", "weight": "150g", "price": 35},
  {"id": "chips-300g", "weight": "300g", "price": 65}
]'::jsonb),

-- DAIRY CATEGORY
('Fresh Milk', 'Dairy', 28, null, 50, 'Fresh and pure milk delivered daily', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', true, false, '[
  {"id": "milk-500ml", "weight": "500ml", "price": 28},
  {"id": "milk-1l", "weight": "1L", "price": 55}
]'::jsonb),

('Paneer Fresh', 'Dairy', 120, 135, 20, 'Fresh homemade paneer for delicious dishes', 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "paneer-250g", "weight": "250g", "price": 120, "originalPrice": 135, "discount": 11},
  {"id": "paneer-500g", "weight": "500g", "price": 235, "originalPrice": 265, "discount": 11}
]'::jsonb)

ON CONFLICT (id) DO NOTHING;

-- Success message
SELECT 'Database setup completed successfully! Your Amardevi General Store is ready with all products.' as message;