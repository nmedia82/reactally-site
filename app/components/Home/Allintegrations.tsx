/** @format */

"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const logos = [
  {
    name: "AWS",
    svg: "https://img.icons8.com/androidL/200/FFFFFF/amazon-web-services.png",
  },
  {
    name: "Tailwind",
    svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "React",
    svg: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    svg: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  },
  {
    name: "Vercel",
    svg: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
  {
    name: "HTML",
    svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    svg: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
];

export default function MovingLogos() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  return (
    <div className="w-full py-12  overflow-hidden">
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={true}
        gradientColor={[13, 13, 43]}
        gradientWidth={100}>
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center mx-6 p-6 w-32 h-32 rounded-2xl bg-[#1C1C44] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            onHoverStart={() => setHoveredLogo(logo.name)}
            onHoverEnd={() => setHoveredLogo(null)}>
            <motion.img
              src={logo.svg}
              alt={logo.name}
              className="w-20 h-20 object-contain"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: hoveredLogo === logo.name ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
            />
            <motion.p
              className="text-sm font-semibold text-white mt-3"
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: hoveredLogo === logo.name ? 0 : 10,
                opacity: hoveredLogo === logo.name ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}>
              {logo.name}
            </motion.p>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}
