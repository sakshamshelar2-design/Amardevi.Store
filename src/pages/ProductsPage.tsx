import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, SortAsc, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';
import { useSearch } from '../context/SearchContext';

const PRODUCTS_PER_PAGE = 12;

const ProductsPage = () => {
  const { products: allProducts, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useSearch();

  const categories = ['All', 'Wheat&Rice', 'Dals', 'Kitchen', 'Masala', 'Tea&Coffee', 'Biscuits', 'Dry Fruits', 'Cleaning', 'Snacks', 'Dairy', 'Sale'];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const filterParam = searchParams.get('filter');
    const searchParam = searchParams.get('search');

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else if (filterParam === 'sale') {
      setSelectedCategory('Sale');
    }

    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search, setSearchQuery]);

  useEffect(() => {
    let filtered = [...allProducts];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory === 'Sale' && !searchQuery.trim()) {
      filtered = filtered.filter(product => product.onSale);
    } else if (selectedCategory !== 'All' && !searchQuery.trim()) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, sortBy, searchQuery, allProducts]);

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">Error loading products: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {searchQuery.trim() ? `Search Results` :
               selectedCategory === 'All' ? 'All Products' : 
               selectedCategory === 'Sale' ? 'Special Offers' : 
               selectedCategory}
            </h1>
            {searchQuery.trim() && (
              <button
                onClick={clearSearch}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            )}
          </div>
          
          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-600">
              {searchQuery.trim() && (
                <span>Showing results for "<span className="font-semibold">{searchQuery}</span>" • </span>
              )}
              <span className="font-semibold">{filteredProducts.length}</span> products found
            </p>
            <p className="text-emerald-600 font-medium">
              {filteredProducts.filter(p => p.inStock).length} in stock
            </p>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          {/* Mobile Filters */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
            
            {!searchQuery.trim() && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex justify-between items-center">
            {!searchQuery.trim() ? (
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-emerald-500 text-white shadow-md transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Search className="h-4 w-4" />
                <span>Search results are shown below</span>
              </div>
            )}

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SortAsc className="h-5 w-5 text-gray-500" />
                <label className="text-sm font-medium text-gray-700">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <>
            {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-8">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          currentPage === pageNum
                            ? 'bg-emerald-500 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Page Info */}
            <div className="text-center mt-4 text-sm text-gray-500">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {searchQuery.trim() ? (
                <Search className="h-12 w-12 mx-auto" />
              ) : (
                <Filter className="h-12 w-12 mx-auto" />
              )}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchQuery.trim() ? 'No products found for your search' : 'No products found'}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery.trim() 
                ? 'Try searching with different keywords or browse all products.'
                : 'Try adjusting your filters or browse all products.'
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('name');
              }}
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
            >
              {searchQuery.trim() ? 'Clear Search & Browse All' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;