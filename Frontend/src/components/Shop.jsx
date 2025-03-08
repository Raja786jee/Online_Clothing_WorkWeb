import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Casual Shirt",
    price: "4000 Rs",
    image: "/images/image4.jpg",
  },
  {
    id: 2,
    name: "Formal Suit",
    price: "5000 Rs",
    image: "/images/image1.jpg",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "4000 Rs",
    image: "/images/image2.jpg",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: "3000 Rs",
    image: "/images/image3.jpg",
  },
];

function Shop() {
  const [cart, setCart] = useState([]); // Cart state
  const navigate = useNavigate(); // For navigation

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add the product to the cart
    alert(`${product.name} added to cart!`); // Optional: Show a confirmation message
  };

  // Function to handle "Buy Now"
  const buyNow = (product) => {
    addToCart(product); // Add the product to the cart
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="min-h-screen pt-36 bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Welcome to Our Shop
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
              <div className="flex justify-center space-x-2 mt-3">
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-[#d5ac55] text-white rounded-lg hover:bg-[#eeb987] transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => buyNow(product)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;