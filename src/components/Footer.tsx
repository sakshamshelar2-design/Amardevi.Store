import React from 'react';
import { Store, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp, Shield, Truck, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Badges */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-emerald-500 p-2 rounded-full">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Free Delivery</p>
                <p className="text-xs text-gray-400">Orders above ₹400</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Secure Payment</p>
                <p className="text-xs text-gray-400">100% Safe & Secure</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Quick Delivery</p>
                <p className="text-xs text-gray-400">5-10 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Amardevi</span>
                <span className="text-sm text-gray-400 block -mt-1">General Store</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted neighborhood supermarket providing fresh groceries, 
              quality products, and exceptional service since 1995. 
              Freshness delivered daily to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm">All Products</a></li>
              <li><a href="/products?filter=sale" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm">Special Offers</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm">Contact</a></li>
            </ul>
            
            <h4 className="text-md font-semibold mt-6 mb-3">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/products?category=Wheat%26Rice" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Wheat & Rice</a></li>
              <li><a href="/products?category=Dals" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Dals & Pulses</a></li>
              <li><a href="/products?category=Kitchen" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Kitchen Items</a></li>
              <li><a href="/products?category=Masala" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">Spices & Masala</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Store Address:</p>
                  <p>Talegaon Dabhade, 410507</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Call Us:</p>
                  <p>+91 9767010787</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Email:</p>
                  <p>info@amardevisupermarket.com</p>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 text-sm font-medium"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Amardevi General Store. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Terms of Service</a>
              <a href="/refund" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Refund Policy</a>
              <a href="/shipping" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;