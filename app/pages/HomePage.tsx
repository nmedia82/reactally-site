/** @format */

import Image from "next/image";
import {
  Moon,
  Github,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import WhyChoose from "../components/Home/WhyChoose";
import BatteriesIncluded from "../components/Home/BatteriesIncluded";
import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import Security from "../components/Home/Security";
import Allintegrations from "../components/Home/Allintegrations";
import SubscribeForm from "../components/SubscribeForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D2B] text-white overflow-hidden font-poppins">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1F4368] via-[#0D0D2B] to-[#0D0D2B] opacity-50"></div>

      <div className="relative z-10">
        {/* <header className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#4EADFD] to-[#B38BF7] rounded-full"></div>
            <span className="text-2xl font-bold">qwik</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-sm hover:text-[#4EADFD]">
              Docs
            </a>
            <a href="#" className="text-sm hover:text-[#4EADFD]">
              Ecosystem
            </a>
            <a href="#" className="text-sm hover:text-[#4EADFD]">
              Tutorial
            </a>
            <a href="#" className="text-sm hover:text-[#4EADFD]">
              Qwik Sandbox
            </a>
            <a href="#" className="text-sm hover:text-[#4EADFD]">
              Shop
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#1C1C44] rounded-full py-1 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EADFD] w-36"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4EADFD] w-4 h-4" />
            </div>
            <Moon className="w-5 h-5" />
            <Github className="w-5 h-5" />
            <X className="w-5 h-5" />
          </div>
        </header> */}
        <Header />
        <main className=" mx-auto  py-16 text-center">
          <HeroSection />
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-normal">
            Build Secure, SEO-Optimized, and
            <br />
            <span className="text-[#4EADFD]">Lightning-Fast Websites with</span>
            <br />
            Reactally CMS
          </h1>

          <div className="relative">
            <div className="absolute inset-0 bg-[#B38BF7] rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          </div>

          <p className="mb-8 text-xl text-gray-400">
            No coding required. No complex hosting setups. No security risks.
            <br></br>
            Create stunning websites on the go and connect with your own domain.
          </p>
          <div className="flex justify-center space-x-4 mb-16">
            <button className="bg-[#B38BF7] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded">
              Get Early Access
            </button>
            <button className="bg-[#1C1C44] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded">
            About Reactally
            </button>
          </div> */}

          <div className="flex justify-center items-center border-t border-b space-x-4 mb-16 py-2">
            {/* <span className="text-sm text-gray-400">Special Sponsor</span>
            <Image
              src="/images/brandimage.svg"
              height={40} // Increase the height for a slightly bigger image
              width={120} // Increase the width for proportional scaling
              alt="Builder.io logo"
              className="rounded"
            /> */}
            <span className="text-md text-gray-400">
              Ship twice as much, twice as fast
            </span>
          </div>

          <section>
            <WhyChoose />
          </section>

          <section>
            <Security />
          </section>

          <div className="bg-[#0D0D2B] text-white">
            <section>
              <Allintegrations />
            </section>

            <section className="py-24 max-w-full px-4 bg-gradient-to-br bg-[#0D0D2B] overflow-hidden">
              <BatteriesIncluded />
            </section>

            {/* <section className="py-24 px-4 w-full bg-gradient-to-br from-[#2D0A6C] to-[#1A0B2E] overflow-hidden">
              <div className=" flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
                  <div className="flex space-x-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Ffe30f73e01ef40558cd69a9493eba2a2%2F115b3b36cedd455196b06f5d33a57ac1?width=2000&format=webp"
                      alt="Descriptive Alt Text"
                      className="w-96 h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-1/2 text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-white text-left mb-8">
                    Batteries included
                  </h2>

                  <ul className="space-y-4">
                    {[
                      "Instant development with Vite.",
                      "Testing by Vitest and Playwright.",
                      "Large ecosystem of tools ready to use.",
                      "Built-in extendable styling: Tailwind, PostCSS, etc.",
                      "Debugging for SSR, browser, prerendering.",
                      "Ready for Vercel, Netlify, Deno, Cloudflare, Express...",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-white">
                        <Zap className="w-5 h-5 mr-2 text-[#FF6934]" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section> */}

            <section
              id="about"
              className="bg-[#8badf7] w-full mx-auto py-16 text-center">
              <div className=" mx-auto max-w-[1400px] px-20 ">
                <h2 className="text-4xl text-black font-bold mb-4">
                  About Reactally
                </h2>
                <p className="mb-8 text-2xl ">
                  Reactally is revolutionizing the way websites are built and
                  managed. Our cutting-edge CMS platform empowers users to
                  create stunning, high-performance websites without the need
                  for technical expertise or the headaches of traditional
                  hosting.
                </p>
                <h2 className="text-3xl text-black font-bold mb-4">
                  Reactally is currently in development.
                </h2>
                <p className="mb-8 text-2xl ">
                  Be among the first to experience the future of web
                  development!
                </p>
                {/* <button className="bg-black text-white font-bold py-2 px-4 rounded">
                  Online Examples
                </button> */}
              </div>
            </section>

            {/* <section className="container mx-auto px-4 py-16">
              <h2 className="text-4xl font-bold mb-8">
                Qwik <span className="text-[#B38BF7]">media</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Qwik First Look",
                    subtitle: "Fireship Code Report",
                  },
                  {
                    title: "Build Resumable Apps with Qwik",
                    subtitle: "Podcast",
                  },
                  {
                    title: "Qwik School by Misko.io",
                    subtitle: "Free Intro Course",
                  },
                  {
                    title: "Qwik: No Hydration & Instant-on",
                    subtitle: "Presentation & Walkthrough",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1C1C44] rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-700"></div>
                    <div className="p-4">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button className="bg-[#1C1C44] p-2 rounded-full">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="bg-[#1C1C44] p-2 rounded-full">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center mt-8">
                <button className="bg-[#B38BF7] text-white font-bold py-2 px-4 rounded">
                  See All
                </button>
              </div>
            </section> */}

            {/* <section className="container mx-auto px-4 py-16 text-center">
              <h2 className="text-4xl font-bold mb-8">
                Built by Performance Nerds
              </h2>
              <div className="flex justify-center space-x-8">
                {["Miško Hevery", "Manu Almeida", "Adam Bradley"].map(
                  (name, index) => (
                    <div key={index} className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gray-700 mb-2 mx-auto"></div>
                      <p className="font-bold">{name}</p>
                    </div>
                  )
                )}
              </div>
            </section> */}

            <footer className="bg-[#0D0D2B] pt-16">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-start">
                  <SubscribeForm />
                  {/* <div>
                    <Image
                      src="/placeholder.svg?height=40&width=100"
                      height={40}
                      width={100}
                      alt="Qwik logo"
                      className="mb-4"
                    />
                    <p className="text-sm text-gray-400">
                      Made with ❤️ by
                      <br />
                      The Qwik Team
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {["Docs", "Integrations", "Tutorial", "Community"].map(
                      (category, index) => (
                        <div key={index}>
                          <h3 className="font-bold mb-2">{category}</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>Qwik City</li>
                            <li>Examples</li>
                            <li>Playground</li>
                            <li>Showcase</li>
                          </ul>
                        </div>
                      )
                    )}
                  </div> */}
                </div>
                <div className="mt-16 flex justify-between items-center">
                  <p className="text-md text-gray-400">
                    © 2024 Reactally. All rights reserved.
                  </p>
                  <div className="flex space-x-4">
                    <div>
                      <p className="text-md text-gray-400">
                        Empowering the next generation of web creators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
