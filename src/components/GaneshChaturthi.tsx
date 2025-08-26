import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, Sparkles, Gift } from 'lucide-react';
import ProductCard from './ProductCard';
import { festiveProducts } from '../data/festiveProducts';

const GaneshChaturthi = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set offer end date (7 days from now for demo)
    const offerEndDate = new Date();
    offerEndDate.setDate(offerEndDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🪔</div>
        <div className="absolute top-20 right-20 text-5xl">🌺</div>
        <div className="absolute bottom-20 left-20 text-4xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🪔</div>
        <div className="absolute top-1/2 left-1/4 text-3xl">🌸</div>
        <div className="absolute top-1/3 right-1/3 text-4xl">🌺</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Festive Banner */}
        <div className="text-center mb-12">
          <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-yellow-300 mr-3" />
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                  गणेश चतुर्थी विशेष
                </h1>
                <Sparkles className="h-8 w-8 text-yellow-300 ml-3" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-100 mb-4">
                Ganesh Chaturthi Special
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                🙏 Celebrate with exclusive offers on festive essentials 🙏
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="text-yellow-200 font-semibold">✨ Up to 25% OFF ✨</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="text-yellow-200 font-semibold">🎁 Free Delivery 🎁</span>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-4 border-orange-200">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Offer Ends Soon!</h3>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-gradient-to-b from-red-500 to-red-600 text-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 text-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-gradient-to-b from-red-500 to-red-600 text-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Banner */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🍯</div>
            <h3 className="font-bold text-lg">Festive Sweets</h3>
            <p className="text-sm opacity-90">Modak & More</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🛕</div>
            <h3 className="font-bold text-lg">Puja Items</h3>
            <p className="text-sm opacity-90">Complete Set</p>
          </div>
          <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🌺</div>
            <h3 className="font-bold text-lg">Decorations</h3>
            <p className="text-sm opacity-90">Flowers & Diyas</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-red-500 text-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🎨</div>
            <h3 className="font-bold text-lg">Rangoli</h3>
            <p className="text-sm opacity-90">Colors & Designs</p>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-8">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Festive Products</h2>
            <Star className="h-6 w-6 text-yellow-500 ml-2" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {festiveProducts.map((product) => (
              <div key={product.id} className="relative">
                {/* Special Festive Badge */}
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🎉 FESTIVE
                  </div>
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl p-8 text-center text-white mb-8 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <Gift className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">Special Festival Offers</h2>
            <Gift className="h-8 w-8 ml-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <div className="text-2xl mb-2">🛍️</div>
              <h3 className="font-bold text-lg mb-2">Buy 2 Get 1 Free</h3>
              <p className="text-sm opacity-90">On selected puja items</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-bold text-lg mb-2">Free Home Delivery</h3>
              <p className="text-sm opacity-90">On orders above ₹299</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-lg mb-2">Cashback Offers</h3>
              <p className="text-sm opacity-90">Up to ₹100 cashback</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Shop All Festive Products
            <Sparkles className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-gray-600 mt-4 text-sm">
            🙏 Ganpati Bappa Morya! Celebrate with joy and devotion 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default GaneshChaturthi;