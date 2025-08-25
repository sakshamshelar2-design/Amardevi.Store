import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, ProductVariant } from '../types';

interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}

interface CartState {
  items: CartItem[];
  total: number;
  pendingItem: { product: Product; selectedVariant?: ProductVariant } | null;
}

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product; selectedVariant?: ProductVariant }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_PENDING_ITEM'; product: Product; selectedVariant?: ProductVariant }
  | { type: 'CLEAR_PENDING_ITEM' }
  | { type: 'ADD_PENDING_TO_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => 
        item.id === action.product.id && 
        item.selectedVariant?.id === action.selectedVariant?.id
      );
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.product.id && item.selectedVariant?.id === action.selectedVariant?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
      } else {
        const updatedItems = [...state.items, { ...action.product, quantity: 1, selectedVariant: action.selectedVariant }];
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(item => item.id !== action.productId);
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.quantity === 0) {
        const updatedItems = state.items.filter(item => item.id !== action.productId);
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
      }
      
      const updatedItems = state.items.map(item =>
        item.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 };
    
    case 'SET_PENDING_ITEM':
      return {
        ...state,
        pendingItem: { product: action.product, selectedVariant: action.selectedVariant }
      };
    
    case 'CLEAR_PENDING_ITEM':
      return {
        ...state,
        pendingItem: null
      };
    
    case 'ADD_PENDING_TO_CART': {
      if (!state.pendingItem) return state;
      
      const { product, selectedVariant } = state.pendingItem;
      const existingItem = state.items.find(item => 
        item.id === product.id && 
        item.selectedVariant?.id === selectedVariant?.id
      );
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === product.id && item.selectedVariant?.id === selectedVariant?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          pendingItem: null
        };
      } else {
        const updatedItems = [...state.items, { ...product, quantity: 1, selectedVariant }];
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          pendingItem: null
        };
      }
    }
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0, pendingItem: null });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};