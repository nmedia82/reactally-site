/** @format */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="text-white hover:text-blue-200 transition-colors duration-200"
        onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500">
      <nav className="container mx-auto px-6 py-3 max-w-[1200px]">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Image
              src="/logo.svg"
              alt="Reactally Logo"
              className="h-12 w-auto"
              width={30}
              height={30}
            />
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#security">Security</NavLink>
            <NavLink href="#subscribe">Subscribe</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-blue-600 w-full absolute top-full left-0">
            <div className="flex flex-col items-center py-4">
              <NavLink href="#about" onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink href="#features" onClick={toggleMenu}>
                Features
              </NavLink>
              <NavLink href="#security" onClick={toggleMenu}>
                Security
              </NavLink>
              <NavLink href="#subscribe" onClick={toggleMenu}>
                Subscribe
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
