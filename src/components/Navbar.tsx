import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Store, User, Home, Grid3X3 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Offers', path: '/products?filter=sale' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/products?filter=sale') {
      return location.pathname === '/products' && location.search === '?filter=sale';
    }
    return location.pathname === path;
  };

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-500 p-1.5 md:p-2 rounded-lg group-hover:bg-emerald-600 transition-colors duration-200">
              <Store className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-bold text-gray-900">Amardevi</span>
              <span className="text-xs md:text-sm text-gray-600 block -mt-1">General Store</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-emerald-50 ${
                  isActive(item.path) ? 'text-emerald-600 bg-emerald-50' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-64 transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              <button type="submit" className="sr-only">Search</button>
            </form>
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                <div className="p-2">
                  <p className="text-sm text-gray-600 px-3 py-2">
                    Press Enter to search for "{searchQuery}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Mobile & Desktop Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* User Authentication */}
            {loading ? (
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ) : user ? (
              <UserMenu />
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">Sign In</span>
              </button>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-all duration-200 hover:bg-emerald-50 rounded-lg"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center animate-pulse font-bold shadow-lg">
                  {itemCount}
                </span>
              )}
            </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden border-t border-gray-200 p-4 bg-gray-50">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full bg-white"
                autoFocus
              />
              <button type="submit" className="sr-only">Search</button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {/* Mobile Quick Actions */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex flex-col items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/') ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Home</span>
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`flex flex-col items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/products') ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Grid3X3 className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Products</span>
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200 relative"
              >
                <ShoppingCart className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
              {user ? (
                <div className="flex flex-col items-center p-3">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/20'}
                    alt="Profile"
                    className="w-5 h-5 rounded-full mb-1"
                  />
                  <span className="text-xs font-medium text-gray-600">Profile</span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex flex-col items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  <User className="h-5 w-5 mb-1" />
                  <span className="text-xs font-medium">Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile Navigation Items */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 px-3">Navigation</h3>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-500' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;