import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#d5ac55] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold font-sans">BrandName</h2>
          <p className="text-white mt-3 font-sans">
            Elevate your style with our latest fashion collections. Quality,
            comfort, and elegance in every piece.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 font-sans">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/shop"
                className="text-white hover:text-gray-300 font-sans"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:text-gray-300 font-sans"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-gray-300 font-sans"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-white hover:text-gray-300 font-sans"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 font-sans">
            Stay Connected
          </h3>
          <p className="text-white font-sans">
            Subscribe to our newsletter for the latest trends and offers.
          </p>
          <form className="mt-3 flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l bg-[#d5ac55] text-white w-full font-sans border border-white focus:outline-none focus:border-[#eeb987]"
            />
            <button className="bg-[#d5ac55] px-4 py-2 rounded-r  font-extrabold border border-white hover:border-[#847567]   hover:bg-[#212120] hover: text-white">
              Subscribe
            </button>
          </form>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-white text-sm font-sans">
        &copy; {new Date().getFullYear()} BrandName. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
