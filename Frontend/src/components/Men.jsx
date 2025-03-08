import React, { useState } from "react";
import Card from "./Card"; // Import the Card component
import products from "./data.json"; // Import the JSON data

function Men() {
  // State to manage the selected variety
  const [selectedVariety, setSelectedVariety] = useState("All");

  // Filter products to include only those with Category "Men"
  const menProducts = products.filter((product) => product.Category === "Men");

  // Further filter products based on the selected variety
  const filteredProducts =
    selectedVariety === "All"
      ? menProducts
      : menProducts.filter((product) => product.Variety === selectedVariety);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#FAF3E0] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Men's Collection
          </h2>
          <h3 className="text-2xl text-gray-600">
            Explore our latest collection for men
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
          onClick={() => setSelectedVariety("Washingware")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "Washingware"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Washingware
        </button>
        <button
          onClick={() => setSelectedVariety("Cotton")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedVariety === "Cotton"
              ? "bg-[#D2B48C] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Cotton
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

export default Men;
