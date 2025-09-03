import React from 'react';
import { ShoppingBag, Truck, Shield, Headphones, Star, Gift } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import GaneshChaturthi from '../components/GaneshChaturthi';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage: React.FC = () => {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const saleProducts = products.filter(product => product.on_sale).slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Welcome to Our Store
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Discover amazing products at unbeatable prices
            </p>
            <button className="bg-white text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Ganesh Chaturthi Special Section */}
      <GaneshChaturthi />

      {/* Features Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <Truck className="h-6 w-6 md:h-8 md:w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">🚚 Free Delivery</h3>
              <p className="text-gray-600 text-xs md:text-sm">On orders above ₹299</p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">🔒 Secure Payment</h3>
              <p className="text-gray-600 text-xs md:text-sm">100% secure transactions</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Headphones className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">📞 24/7 Support</h3>
              <p className="text-gray-600 text-xs md:text-sm">We'll call you before delivery</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                <Gift className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">🎁 Special Offers</h3>
              <p className="text-gray-600 text-xs md:text-sm">Exclusive deals daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                ⭐ Featured Products
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Hand-picked products just for you
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sale Products */}
      {saleProducts.length > 0 && (
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                🔥 Hot Deals
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Limited time offers - grab them now!
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              🛍️ Shop by Category
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Find exactly what you're looking for
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Groceries', icon: '🥬', color: 'bg-green-500' },
              { name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
              { name: 'Fashion', icon: '👕', color: 'bg-purple-500' },
              { name: 'Home & Garden', icon: '🏠', color: 'bg-orange-500' }
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-gray-100"
              >
                <div className={`${category.color} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl md:text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;