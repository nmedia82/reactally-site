/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  {
    name: "Angular",
    svg: "https://angular.io/assets/images/logos/angular/angular.png",
  },
  {
    name: "AWS",
    svg: "https://img.icons8.com/androidL/200/FFFFFF/amazon-web-services.png",
  },
  {
    name: "Shopify",
    svg: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
  },
  {
    name: "Tailwind",
    svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Figma",
    svg: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
  },
  {
    name: "React",
    svg: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next",
    svg: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  },
  {
    name: "Vercel",
    svg: "https://vercel.com/favicon.ico",
  },
  {
    name: "Stripe",
    svg: "https://cdn.icon-icons.com/icons2/2699/PNG/512/stripe_logo_icon_167962.png",
  },
  {
    name: "Atlassian",
    svg: "https://cdn.iconscout.com/icon/free/png-256/free-atlassian-logo-icon-download-in-svg-png-gif-file-formats--technology-brand-social-media-company-logos-pack-icons-6297176.png",
  },
  {
    name: "Cloudflare",
    svg: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
  },
  {
    name: "Slack",
    svg: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png",
  },
];

export default function Component() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative max-w-[1300px] mx-auto flex flex-col items-center justify-center min-h-screen bg-[#0D0D2B] text-white p-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 60%)`,
          transition: "background 0.3s ease",
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-bold mb-8 text-center leading-tight">
        Part of your
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-blue-300 animate-gradient-x">
          composable stack
        </span>
      </motion.h1>
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-[#5c9af6] to-[#1163fa] text-white px-10 py-4 rounded-full mb-20 text-xl font-semibold shadow-lg transition-all duration-300">
        All integrations
      </motion.button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-wrap justify-center max-w-[1400px] gap-12">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 10, zIndex: 1 }}
            onHoverStart={() => setHoveredLogo(logo.name)}
            onHoverEnd={() => setHoveredLogo(null)}
            className="hexagon flex items-center justify-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 transition-all duration-300 cursor-pointer">
            <img src={logo.svg} alt={logo.name} className="w-32 h-32 p-4" />
            <AnimatePresence>
              {hoveredLogo === logo.name && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute bottom-[-50px] bg-white text-black px-4 py-2 rounded-md text-lg font-medium z-10 shadow-xl">
                  {logo.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full w-48 h-48 shadow-2xl overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/ca/ec/9a/caec9a525e175e49a460fb234469fffd.jpg"
            alt="R"
            className="w-full h-full object-cover"
          />
        </motion.div> */}
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0D2B] to-transparent pointer-events-none" />
      <style jsx>{`
        .hexagon {
          width: 180px;
          height: 207px;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          transition: all 0.3s ease;
        }
        .hexagon:hover {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
