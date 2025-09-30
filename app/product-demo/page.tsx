"use client"
import { useState, useMemo } from 'react';
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Check, Menu, X, Search } from 'lucide-react';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('red');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const product = {
    id: 1,
    name: "Elegant Summer Dress",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 234,
    description: "This stunning summer dress combines elegance with comfort. Made from premium breathable fabric, perfect for any occasion.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&h=1000&fit=crop"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'red', hex: '#DC2626' },
      { name: 'blue', hex: '#2563EB' },
      { name: 'black', hex: '#1F2937' }
    ],
    category: 'dresses'
  };

  const allProducts = [
    product,
    {
      id: 2,
      name: "Floral Midi Dress",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 189,
      description: "Beautiful floral pattern midi dress with comfortable fit and elegant design.",
      images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop"],
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'pink', hex: '#EC4899' },
        { name: 'blue', hex: '#2563EB' }
      ],
      category: 'dresses'
    },
    {
      id: 3,
      name: "Classic Evening Gown",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 312,
      description: "Stunning evening gown for special occasions, featuring elegant design and premium fabric.",
      images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop"],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'black', hex: '#1F2937' },
        { name: 'navy', hex: '#1E40AF' }
      ],
      category: 'evening-wear'
    },
    {
      id: 4,
      name: "Casual Summer Dress",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 267,
      description: "Light and comfortable casual dress perfect for everyday summer wear.",
      images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop"],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'white', hex: '#F3F4F6' },
        { name: 'yellow', hex: '#FBBF24' }
      ],
      category: 'dresses'
    },
    {
      id: 5,
      name: "Bohemian Maxi Dress",
      price: 94.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 178,
      description: "Flowy bohemian style maxi dress with unique patterns and comfortable fit.",
      images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop"],
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'green', hex: '#10B981' },
        { name: 'orange', hex: '#F59E0B' }
      ],
      category: 'dresses'
    },
    {
      id: 6,
      name: "Designer Handbag",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 421,
      description: "Luxurious designer handbag made from genuine leather with multiple compartments.",
      images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"],
      sizes: ['One Size'],
      colors: [
        { name: 'brown', hex: '#92400E' },
        { name: 'black', hex: '#1F2937' }
      ],
      category: 'accessories'
    },
    {
      id: 7,
      name: "Summer Sandals",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.4,
      reviews: 156,
      description: "Comfortable and stylish sandals perfect for summer outings and beach days.",
      images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop"],
      sizes: ['6', '7', '8', '9', '10'],
      colors: [
        { name: 'tan', hex: '#D97706' },
        { name: 'white', hex: '#F3F4F6' }
      ],
      category: 'shoes'
    },
    {
      id: 8,
      name: "Slim Fit Jeans",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.3,
      reviews: 298,
      description: "Classic slim fit jeans made from premium denim with comfortable stretch.",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop"],
      sizes: ['28', '30', '32', '34', '36'],
      colors: [
        { name: 'blue', hex: '#2563EB' },
        { name: 'black', hex: '#1F2937' }
      ],
      category: 'pants'
    },
    {
      id: 9,
      name: "Casual T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.2,
      reviews: 512,
      description: "Soft and comfortable cotton t-shirt available in multiple colors.",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'white', hex: '#F3F4F6' },
        { name: 'gray', hex: '#6B7280' },
        { name: 'navy', hex: '#1E40AF' }
      ],
      category: 'tops'
    },
    {
      id: 10,
      name: "Winter Jacket",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.7,
      reviews: 189,
      description: "Warm and stylish winter jacket with waterproof coating and insulated lining.",
      images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'black', hex: '#1F2937' },
        { name: 'green', hex: '#065F46' }
      ],
      category: 'outerwear'
    }
  ];

  const relatedProducts = allProducts.slice(1, 5);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allProducts]);

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    setAddedToCart(true);
    setShowSuggestions(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      // In a real app, you would navigate to search results
      console.log('Search for:', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              ELEGANCE
            </h1>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4 sm:mx-8 relative">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className={`relative transition-all duration-300 ${
                  isSearchFocused ? 'scale-105' : ''
                }`}>
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="w-full px-4 text-black pl-11 py-2.5 sm:py-3 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base placeholder-gray-500"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                {/* Search Results Dropdown */}
                {searchQuery && filteredProducts.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto animate-fadeIn">
                    <div className="p-4">
                      <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                        Search Results ({filteredProducts.length})
                      </p>
                      <div className="space-y-3">
                        {filteredProducts.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group"
                            onClick={() => {
                              setSearchQuery(item.name);
                              setIsSearchFocused(false);
                            }}
                          >
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-rose-600 transition-colors truncate">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-rose-600 font-bold text-sm">${item.price}</span>
                                {item.originalPrice > item.price && (
                                  <span className="text-gray-400 line-through text-xs">
                                    ${item.originalPrice}
                                  </span>
                                )}
                                <span className="text-xs text-gray-500 capitalize">{item.category}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-xs text-gray-600">{item.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* No Results */}
                {searchQuery && filteredProducts.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 z-50 p-6 text-center animate-fadeIn">
                    <p className="text-gray-600 mb-2">No products found for</p>
                    <p className="font-semibold text-gray-900">{searchQuery}</p>
                    <p className="text-sm text-gray-500 mt-2">Try different keywords or browse categories</p>
                  </div>
                )}
              </form>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <button className="hidden sm:block text-gray-700 hover:text-rose-600 transition-colors text-sm font-medium">
                Shop
              </button>
              <button className="hidden sm:block text-gray-700 hover:text-rose-600 transition-colors text-sm font-medium">
                Collections
              </button>
              <button className="relative p-2">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-rose-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>
              <button className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all group">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:fill-rose-600 group-hover:text-rose-600 transition-colors" />
              </button>
            </div>
            <div className="flex gap-2 sm:gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`flex-1 aspect-square rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${
                    currentImage === idx ? 'border-rose-600 shadow-lg scale-105' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-2xl sm:text-3xl font-bold text-rose-600">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Color: <span className="font-normal text-gray-600 capitalize">{selectedColor}</span>
              </label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-gray-900 shadow-lg scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Size: <span className="font-normal text-gray-600">{selectedSize}</span>
              </label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart with Quantity Controls */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Add to Cart</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-md bg-white hover:bg-gray-50 text-black font-bold text-lg transition-colors flex items-center justify-center shadow-sm"
                  >
                    −
                  </button>
                  <span className="text-base font-semibold w-8 text-center text-black">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-md bg-white text-black hover:bg-gray-50 font-bold text-lg transition-colors flex items-center justify-center shadow-sm"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 rounded-lg font-bold text-base transition-all shadow-lg ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-rose-600 to-amber-600 text-white hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  {addedToCart ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" />
                      Added!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Premium breathable fabric</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Free shipping & easy returns</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Sustainably sourced materials</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products - Only shown after adding to cart */}
        {showSuggestions && (
          <section className="mt-12 sm:mt-16 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">You May Also Like</h3>
              <button className="text-rose-600 font-semibold hover:text-rose-700 transition-colors text-sm sm:text-base">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(item.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                      <span className="text-xs sm:text-sm text-gray-600 ml-1">{item.rating}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-lg sm:text-xl font-bold text-rose-600">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12 sm:mt-20 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© 2025 Elegance. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

