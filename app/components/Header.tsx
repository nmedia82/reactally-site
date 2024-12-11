/** @format */

// components/Header.js

import {
  Moon,
  Github,
  X,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex mx-auto max-w-[1300px] justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        {/* <div className="w-8 h-8 bg-gradient-to-r from-[#4EADFD] to-[#B38BF7] rounded-full"></div> */}
        <span className="text-2xl font-bold"><img
              src="/logo/logo.png"
              alt="Descriptive Alt Text"
              className="w-[200px] h-auto object-cover relative z-10"
            /></span>
      </div>
      <nav className="hidden md:flex space-x-9">
        <a href="#about" className="text-sm hover:text-[#4EADFD]">
          About
        </a>
        <a href="#Features" className="text-sm hover:text-[#4EADFD]">
          Features
        </a>
        <a href="#Blogs" className="text-sm hover:text-[#4EADFD]">
        Blogs
        </a>
        <a href="#Contact-us" className="text-sm hover:text-[#4EADFD]">
         Contact Us
        </a>
        {/* <a href="#" className="text-sm hover:text-[#4EADFD]">
          Shop
        </a> */}
      </nav>
      {/* <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1C1C44] rounded-full py-1 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EADFD] w-36"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4EADFD] w-4 h-4" />
        </div>
        <Facebook className="w-5 h-5" />
        <Instagram className="w-5 h-5" />
        <Twitter className="w-5 h-5" />
        <Linkedin className="w-5 h-5" />
      </div> */}
    </header>
  );
}
