import React, { useState } from 'react';
import { ShoppingCart, Star, ChevronDown, Heart } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants?.[0] || {
      id: `${product.id}-default`,
      weight: 'Default',
      price: product.price,
      originalPrice: product.originalPrice
    }
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    // Add visual feedback
    const button = document.activeElement;
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => button.classList.remove('animate-pulse'), 300);
    }
    
    const productToAdd = {
      ...product,
      price: selectedVariant.price,
      originalPrice: selectedVariant.originalPrice
    };
    dispatch({ 
      type: 'ADD_TO_CART', 
      product: productToAdd,
      selectedVariant 
    });
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setIsDropdownOpen(false);
  };

  const currentDiscount = selectedVariant.discount || 
    (selectedVariant.originalPrice && selectedVariant.originalPrice > selectedVariant.price 
      ? Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)
      : null);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-52 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.onSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full shadow-lg">
              SALE
            </span>
          )}
          {currentDiscount && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-bold rounded-full shadow-lg">
              {currentDiscount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist & Featured */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {product.featured && (
            <div className="bg-yellow-400 p-1.5 rounded-full shadow-lg">
              <Star className="h-4 w-4 text-white fill-current" />
            </div>
          )}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white bg-opacity-90 p-1.5 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200"
          >
            <Heart className={`h-4 w-4 transition-colors duration-200 ${
              isLiked ? 'text-red-500 fill-current' : 'text-gray-400'
            }`} />
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-white text-emerald-600 px-4 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-50"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 text-base mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        {/* Category */}
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Weight/Size Dropdown */}
        {product.variants && product.variants.length > 1 && (
          <div className="mb-3">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-sm"
              >
                <span className="font-medium text-gray-700">
                  {selectedVariant.weight}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantSelect(variant)}
                      className={`w-full text-left p-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                        selectedVariant.id === variant.id ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{variant.weight}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-emerald-600">
                            ₹{variant.price}
                          </span>
                          {variant.originalPrice && variant.originalPrice > variant.price && (
                            <span className="text-xs text-gray-500 line-through">
                              ₹{variant.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Price Display */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-emerald-600">
              ₹{selectedVariant.price}
            </span>
            {selectedVariant.originalPrice && selectedVariant.originalPrice > selectedVariant.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{selectedVariant.originalPrice}
              </span>
            )}
          </div>
          {currentDiscount && (
            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">
              {currentDiscount}% OFF
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 font-semibold text-sm transform hover:scale-105"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;