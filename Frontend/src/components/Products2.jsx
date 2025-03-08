import React, { useContext } from "react";
import products from "./data.json"; // Import the JSON data
import { CartContext } from "../Context/CartContext"; // Import CartContext

function Products2() {
  const { addToCart } = useContext(CartContext); // Use the addToCart function from CartContext

  // Slice the products array to get only the first 8 items
  const displayedProducts = products.slice(0, 8);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Varieties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Image Container with Discount Label */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {/* Discount Label */}
              {product.discountedPrice && (
                <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full">
                  Sale
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              {/* Always show original and discounted prices */}
              <p className="text-gray-500 line-through">
                {product.originalPrice}
              </p>
              <p className="text-red-600 font-bold">
                {product.discountedPrice || product.originalPrice}
              </p>
              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)} // Add the product to the cart on click
                className="mt-3 px-4 py-2 bg-[#D2B48C] text-white rounded-lg hover:bg-[#B89A7B] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products2;
