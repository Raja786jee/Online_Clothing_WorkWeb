import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-56 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h4 className="font-semibold text-lg text-gray-800 mb-2">
          {product.name}
        </h4>
        {product.discountedPrice ? (
          <>
            <p className="text-gray-500 line-through">
              {product.originalPrice}
            </p>
            <p className="text-red-600 font-bold">{product.discountedPrice}</p>
          </>
        ) : (
          <p className="text-gray-600">{product.originalPrice}</p>
        )}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-[#D2B48C] text-white py-2 rounded-lg hover:bg-[#B89A7B] transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
