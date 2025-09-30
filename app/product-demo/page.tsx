"use client"
import { useState } from 'react';
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Check, Menu, X } from 'lucide-react';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('red');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const product = {
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
    ]
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Floral Midi Dress",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
      rating: 4.6
    },
    {
      id: 2,
      name: "Classic Evening Gown",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Casual Summer Dress",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Bohemian Maxi Dress",
      price: 94.99,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
      rating: 4.5
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className=" border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              ELEGANCE
            </h1>
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
                      src={item.image}
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