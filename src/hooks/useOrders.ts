import { useState } from 'react';
import { orderAPI } from '../lib/supabase';
import { CartItem, Customer } from '../types';
import { useAuth } from '../context/AuthContext';

export const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const createOrder = async (
    items: CartItem[],
    customer: Customer,
    subtotal: number,
    deliveryFee: number,
    totalAmount: number
  ) => {
    try {
      setLoading(true);
      setError(null);

      const orderData = {
        user_id: user?.uid || null,
        customer_name: customer.name,
        customer_email: customer.email,
        customer_phone: customer.phone,
        customer_address: customer.address,
        payment_method: customer.paymentMethod,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          selectedVariant: item.selectedVariant,
          image: item.image,
          category: item.category
        })),
        subtotal,
        delivery_fee: deliveryFee,
        total_amount: totalAmount,
        status: 'pending'
      };

      const order = await orderAPI.create(orderData);
      return order;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create order';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getUserOrders = async () => {
    if (!user?.uid) {
      throw new Error('User not authenticated');
    }

    try {
      setLoading(true);
      setError(null);
      const orders = await orderAPI.getUserOrders(user.uid);
      return orders;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch orders';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    createOrder,
    getUserOrders,
    loading,
    error
  };
};