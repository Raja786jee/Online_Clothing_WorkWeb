import React, { useState } from "react";
import Card from "./Card"; // Import the Card component
import products from "./data.json"; // Import the JSON data

function Women() {
  // State to manage the selected variety
  const [selectedVariety, setSelectedVariety] = useState("All");

  // Filter products to include only those with Category "Women"
  const womenProducts = products.filter(
    (product) => product.Category === "Women"
  );

  // Further filter products based on the selected variety
  const filteredProducts =
    selectedVariety === "All"
      ? womenProducts
      : womenProducts.filter((product) => product.Variety === selectedVariety);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-700 text-lg">
                    Clothing Store
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#D2B48C] transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#D2B48C] transition duration-300"
              >
                Men
              </a>
              <a
                href="#"
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#D2B48C] transition duration-300"
              >
                Women
              </a>
              <a
                href="#"
                className="py-4 px-2 text-gray-700 font-semibold hover:text-[#D2B48C] transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#FAF3E0] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Women's Collection
          </h2>
          <h3 className="text-2xl text-gray-600">
            Explore our latest collection for women
          </h3>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-6 py-8 flex justify-center space-x-4">
        <button
          onClick={() => setSelectedVariety("All")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "All"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedVariety("Embeded")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "Embedded"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Embedded
        </button>
        <button
          onClick={() => setSelectedVariety("Print")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "Print"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Print
        </button>
        <button
          onClick={() => setSelectedVariety("Shirt-trouser")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "Embedded"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Shirt +Trouser
        </button>
        <button
          onClick={() => setSelectedVariety("3-Piece")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "Embedded"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          3 Piece
        </button>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Map over the filtered products array and render a Card for each product */}
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Women;
