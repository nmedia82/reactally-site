/** @format */

import Image from "next/image";
import WhyChoose from "../components/Home/WhyChoose";
import BatteriesIncluded from "../components/Home/AboutUs";
import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import Security from "../components/Home/Security";
import Allintegrations from "../components/Home/Allintegrations";
import SubscribeForm from "../components/SubscribeForm";
import BlogSection from "../components/Blogs/blog-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D2B] text-white overflow-hidden font-poppins">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#9a64aa] via-[#0D0D2B] to-[#0D0D2B] opacity-50"></div>

      <div className="relative z-10">
        <Header />
        <main className=" mx-auto  pt-16 text-center">
          <HeroSection />

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

            <section className="py-10 max-w-full px-4 bg-gradient-to-br bg-[#0D0D2B] overflow-hidden">
              <BatteriesIncluded />
              <BlogSection />
            </section>

            <section className=" max-w-full px-4 bg-gradient-to-br bg-[#0D0D2B] overflow-hidden">
            <SubscribeForm />
            </section>
            <footer className="bg-[#000] py-3 mt-10">
             
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-start">
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
                <div className=" flex justify-between items-center ">
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
