/** @format */

import React from "react";

const TechIcon = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
}) => (
  <div
    className="absolute w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"
    style={style}>
    {children}
  </div>
);

export default function HeroSection() {
  return (
    <div className="relative w-full  h-[500px]  text-white flex flex-col items-center justify-center px-14 overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-normal">
        Build Secure, SEO-Optimized, and
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-[#8dcfe9] to-[#d88af0] animate-gradient-x">
          Lightning-Fast Websites with
        </span>
        <br />
        Reactally CMS
      </h1>
      <p className="mb-8 text-xl text-gray-400">
        No coding required. No complex hosting setups. No security risks.
        <br></br>
        Create stunning websites on the go and connect with your own domain.
      </p>
      <div className="flex space-x-4 mb-16">
        <a href="#Subscribe">
          <button className="bg-gradient-to-r from-[#d88af0] to-[#d88af0] text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
            Get Early Access
          </button>
        </a>
        <a href="#about-us">
          <button className="bg-transparent text-white border-white hover:bg-white/10 px-6 py-3 rounded-full text-lg font-semibold">
            About Reactally
          </button>
        </a>
      </div>
    </div>
  );
}
