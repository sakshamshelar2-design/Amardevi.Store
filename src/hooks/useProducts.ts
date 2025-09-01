import { useState, useEffect } from 'react';
import { Product } from '../types';
import { productAPI, convertDatabaseProduct } from '../lib/supabase';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productAPI.getAll();
      const convertedProducts = data.map(convertDatabaseProduct);
      setProducts(convertedProducts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts
  };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productAPI.getFeatured();
        const convertedProducts = data.map(convertDatabaseProduct);
        setProducts(convertedProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch featured products');
        console.error('Error fetching featured products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return { products, loading, error };
};

export const useSaleProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productAPI.getOnSale();
        const convertedProducts = data.map(convertDatabaseProduct);
        setProducts(convertedProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch sale products');
        console.error('Error fetching sale products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSaleProducts();
  }, []);

  return { products, loading, error };
};