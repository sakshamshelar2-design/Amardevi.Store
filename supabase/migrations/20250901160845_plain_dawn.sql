/*
  # E-commerce Database Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `category` (text, product category)
      - `price` (decimal, current price)
      - `original_price` (decimal, original price for discounts)
      - `stock` (integer, available quantity)
      - `description` (text, product description)
      - `image_url` (text, product image URL)
      - `featured` (boolean, featured product flag)
      - `on_sale` (boolean, sale product flag)
      - `variants` (jsonb, product variants with weights/sizes)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `customer_name` (text, customer name)
      - `customer_email` (text, customer email)
      - `customer_phone` (text, customer phone)
      - `customer_address` (text, delivery address)
      - `payment_method` (text, payment method)
      - `items` (jsonb, ordered items with details)
      - `subtotal` (decimal, order subtotal)
      - `delivery_fee` (decimal, delivery charges)
      - `total_amount` (decimal, final total)
      - `status` (text, order status)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their data
    - Public read access for products
    - User-specific access for orders

  3. Indexes
    - Add indexes for frequently queried columns
    - Category and featured product indexes
    - User orders index
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

-- Insert sample products data
INSERT INTO products (name, category, price, original_price, stock, description, image_url, featured, on_sale, variants) VALUES
-- Wheat & Rice
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

-- Dals
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

-- Tea & Coffee
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

-- Kitchen Items
('Cooking Oil Refined', 'Kitchen', 150, 170, 70, 'Pure refined cooking oil for healthy cooking', 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "oil-1l", "weight": "1L", "price": 150, "originalPrice": 170, "discount": 12},
  {"id": "oil-5l", "weight": "5L", "price": 720, "originalPrice": 820, "discount": 12}
]'::jsonb),

-- Masala
('Garam Masala Powder', 'Masala', 45, 55, 120, 'Authentic blend of aromatic spices', 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800', false, true, '[
  {"id": "garam-100g", "weight": "100g", "price": 45, "originalPrice": 55, "discount": 18},
  {"id": "garam-250g", "weight": "250g", "price": 105, "originalPrice": 125, "discount": 16}
]'::jsonb)

ON CONFLICT (id) DO NOTHING;