import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cartItems, removeItem, cancelCart, updateQuantity } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen pt-32 bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Your Cart
      </h1>
      <div className="max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      Rs. {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <h2 className="text-xl font-semibold">Total</h2>
              <p className="text-xl font-semibold">
                Rs. {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelCart}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-300"
              >
                Cancel Cart
              </button>
              <button
                onClick={() => alert("Proceeding to checkout...")}
                className="bg-[#d5ac55] text-white px-6 py-2 rounded hover:bg-[#eeb987] transition-colors duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
