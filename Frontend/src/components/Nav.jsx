import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

// MovingTextBanner Component
function MovingTextBanner() {
  const whatsappLink = `https://wa.me/92314586629?text=Hi%20SOC,%20I%20have%20a%20question.`;

  return (
    <div className="w-full bg-[#D2B48C] text-black text-center py-4 md:py-6 text-lg md:text-3xl font-bold overflow-hidden relative">
      {/* Moving Text */}
      <div className="absolute w-full animate-marquee whitespace-nowrap">
        Flat Shipping Rate 200 Nationwide
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 8s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

// Nav Component
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#d5ac55] shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl  font-bold text-white">
          Sharif Online CLothes
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex   space-x-6 text-gray-700">
          <Link
            to="/"
            className="text-white  font-extrabold hover:text-yellow-100"
          >
            Home
          </Link>
          <Link
            to="/Men"
            className="text-white font-extrabold  hover:text-yellow-100"
          >
            Men
          </Link>
          <Link
            to="/Women"
            className="text-white font-extrabold  hover:text-yellow-100"
          >
            Women
          </Link>
          <Link
            to="/about"
            className="text-white font-extrabold hover:text-yellow-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white font-extrabold hover:text-yellow-100"
          >
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm"
          />
        </div> */}

        {/* Icons */}
        <div className="flex  items-center space-x-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} className="text-white" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              
            </span>
          </Link>

          {/* User Profile */}
          <div className="relative group">
            <User size={24} className="text-white cursor-pointer" />
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
              <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                Orders
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <Link to="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

// Main Layout Component
export function Layout() {
  return (
    <div>
      {/* MovingTextBanner at the top */}
      <MovingTextBanner />

      {/* Fixed Nav below the banner */}
      <div className="mt-16">
        {" "}
        {/* Add mt-16 to push content below the fixed Nav */}
        <Nav />
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}
export default Nav;
