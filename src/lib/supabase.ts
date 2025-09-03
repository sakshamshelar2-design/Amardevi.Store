import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface DatabaseProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  original_price?: number;
  stock: number;
  description: string;
  image_url: string;
  featured: boolean;
  on_sale: boolean;
  variants: any[];
  created_at: string;
  updated_at: string;
}

export interface DatabaseOrder {
  id: string;
  user_id?: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  payment_method: string;
  items: any[];
  subtotal: number;
  delivery_fee: number;
  total_amount: number;
  status: string;
  created_at: string;
  updated_at: string;
}

// API Functions
export const productAPI = {
  // Get all products
  async getAll() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data;
  },

  // Get products by category
  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('name');
    
    if (error) throw error;
    return data;
  },

  // Get featured products
  async getFeatured() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .order('name');
    
    if (error) throw error;
    return data;
  },

  // Get sale products
  async getOnSale() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('on_sale', true)
      .order('name');
    
    if (error) throw error;
    return data;
  },

  // Search products
  async search(query: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
      .order('name');
    
    if (error) throw error;
    return data;
  },

  // Add new product (admin only)
  async create(product: Omit<DatabaseProduct, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update product (admin only)
  async update(id: string, updates: Partial<DatabaseProduct>) {
    const { data, error } = await supabase
      .from('products')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete product (admin only)
  async delete(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

export const orderAPI = {
  // Create new order
  async create(orderData: Omit<DatabaseOrder, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Get user orders
  async getUserOrders(userId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get order by ID
  async getById(orderId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update order status
  async updateStatus(orderId: string, status: string) {
    const { data, error } = await supabase
      .from('orders')
      .update({ 
        status, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', orderId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Get all orders (admin only)
  async getAll() {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};

// Utility function to convert database product to frontend format
export const convertDatabaseProduct = (dbProduct: DatabaseProduct) => ({
  id: parseInt(dbProduct.id.replace(/-/g, '').slice(0, 8), 16), // Convert UUID to number for compatibility
  name: dbProduct.name,
  category: dbProduct.category,
  price: dbProduct.price,
  originalPrice: dbProduct.original_price,
  stock: dbProduct.stock,
  description: dbProduct.description,
  image: dbProduct.image_url,
  featured: dbProduct.featured,
  onSale: dbProduct.on_sale,
  inStock: dbProduct.stock > 0,
  variants: dbProduct.variants || []
});