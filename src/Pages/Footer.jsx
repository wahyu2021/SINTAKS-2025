import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCoffee,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-8 py-10 text-sm bg-amber-900 text-gray-100">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-opacity-20 pb-8">
        {/* Logo & Description */}
        <div>
          <h2 className="flex items-center gap-2 text-gray-200 text-2xl font-bold mb-2">
            <FaCoffee /> Aroma Sriwijaya
          </h2>
          <p className="mb-4 text-[16px] font-semibold text-amber-100">
            Premium Indonesian coffee beans exported directly from farmers to
            global markets.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-2 text-2xl">Quick Links</h3>
          <ul className="space-y-1 text-[16px]">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:underline">
                Coffee Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Coffee Products */}
        <div>
          <h3 className="font-bold mb-2 text-2xl">Coffee Products</h3>
          <ul className="space-y-1 text-[16px]">
            <li className="hover:underline hover:cursor-pointer">Arabica Varieties</li>
            <li className="hover:underline hover:cursor-pointer">Robusta Varieties</li>
            <li className="hover:underline hover:cursor-pointer">Specialty Coffee</li>
            <li className="hover:underline hover:cursor-pointer">Custom Orders</li>
          </ul>
        </div>
        

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-2 text-2xl">Contact Us</h3>
          <p className="text-[16px]">Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139</p>
          <p className="text-[16px]">info@aromasriwijaya.com</p>
          <p className="text-[16px]">+62 812 3456 7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 text-yellow-400">
        © 2025 Aroma Sriwijaya. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
