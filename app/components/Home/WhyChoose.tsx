/** @format */

import { Zap, Code, ArrowBigUpDash, Rocket, Shield, Globe } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      Icon: Zap,
      title: "Multiple Sites, One Account",
      description:
        "Create and manage multiple websites from a single dashboard. Perfect for agencies and multi-brand businesses.",
    },
    {
      Icon: ArrowBigUpDash,
      title: "Lightning-Fast Performance",
      description:
        "Built on React and Next.js, Reactally offers unparalleled speed and optimal performance for your websites.",
    },
    {
      Icon: Shield,
      title: "Enhanced Security",
      description:
        "Our serverless architecture ensures your websites are protected against common vulnerabilities and attacks.",
    },
    {
      Icon: Code,
      title: "No Coding Required",
      description:
        "Use our intuitive page builder and ready-to-use templates to create stunning websites without writing a single line of code.",
    },
    {
      Icon: Rocket,
      title: "SEO Optimized",
      description:
        "Built-in SEO tools and optimizations to help your websites rank higher in search engines.",
    },
    {
      Icon: Globe,
      title: "Custom Domain Support",
      description:
        "Easily connect your own domain to your Reactally-powered websites for a professional online presence.",
    },
  ];

  return (
    <section
      id="Features"
      className="pb-24 pt-10 px-4 bg-[#0D0D2B]  mx-auto max-w-[1300px] overflow-hidden">
      <div className="container mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Why Choose Reactally?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-start p-8 rounded-2xl bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 transition-all duration-300 hover:bg-opacity-10 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#d88af0] to-[#4EADFD] group-hover:animate-pulse">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-300 text-center">{description}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d88af0] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
}
