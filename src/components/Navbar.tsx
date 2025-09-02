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
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: Grid3X3 },
    { name: 'Offers', path: '/products?filter=sale', icon: Store },
    { name: 'About Us', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: User }
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
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-emerald-500 p-2 rounded-lg group-hover:bg-emerald-600 transition-colors duration-200">
                <Store className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">Amardevi</span>
                <span className="text-sm text-gray-600 block -mt-1">General Store</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
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
            <div className="hidden lg:flex items-center relative flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full transition-all duration-200 bg-gray-50 focus:bg-white shadow-sm"
                />
                <button type="submit" className="sr-only">Search</button>
              </form>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* User Authentication */}
              {loading ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              ) : user ? (
                <UserMenu />
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">Sign In</span>
                </button>
              )}

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-3 text-gray-700 hover:text-emerald-600 transition-all duration-200 hover:bg-emerald-50 rounded-lg"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce font-bold shadow-lg">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-emerald-600 transition-all duration-200 hover:bg-emerald-50 rounded-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce font-bold shadow-lg">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 hover:bg-gray-100 rounded-lg"
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
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full bg-white shadow-sm"
                  autoFocus
                />
                <button type="submit" className="sr-only">Search</button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
          <div className="grid grid-cols-5 h-16">
            {navItems.slice(0, 4).map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                    isActive(item.path) 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            {/* Profile/Auth in Bottom Nav */}
            {user ? (
              <div className="flex flex-col items-center justify-center space-y-1 text-gray-600">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/20'}
                  alt="Profile"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-xs font-medium">Profile</span>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                <User className="h-5 w-5" />
                <span className="text-xs font-medium">Sign In</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Slide-out Menu */}
            <div className="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300">
              <div className="p-6">
                {/* Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-emerald-500 p-2 rounded-lg">
                      <Store className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">Amardevi</span>
                      <span className="text-sm text-gray-600 block -mt-1">General Store</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* User Section */}
                {user ? (
                  <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.photoURL || 'https://via.placeholder.com/40'}
                        alt={user.displayName || 'User'}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{user.displayName}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold mb-6 hover:bg-emerald-600 transition-colors duration-200"
                  >
                    Sign In to Your Account
                  </button>
                )}

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                          isActive(item.path) 
                            ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-500' 
                            : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Cart Summary in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <ShoppingCart className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Shopping Cart</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {itemCount > 0 && (
                        <>
                          <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                            {itemCount}
                          </span>
                          <span className="text-sm font-semibold text-emerald-600">
                            ₹{state.total.toFixed(2)}
                          </span>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;