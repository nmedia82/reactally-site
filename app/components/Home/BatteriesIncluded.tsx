/** @format */

import { Zap } from "lucide-react";

export default function BatteriesIncluded() {
  const features = [
    "⚡️ Lightning Bolt - Fast and High-Performance",
    "🎨 Brush/Paint Palette - Stunning Design",
    "⚙️ Gears/Cogs - No Technical Expertise Required",
    "☁️ Cloud - Hassle-Free Hosting",
    "🚀 Rocket - Revolutionary CMS",
    "🔒 Shield/Lock - Secure Platform",
    "🧩 Puzzle Piece - Customizable Features",
    "🌍 Globe - Global Reach",
    "🛠️ Hand with Wrench - User Empowerment",
    "📊 Bar Chart - Analytics and Insights",
  ];

  return (
    <section
      id="about"
      className="py-12 px-4 w-full bg-[#0D0D2B] overflow-hidden">
      <div className="container mx-auto relative flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Centered and Larger Image */}
        <div className="lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-[#6d88ff] rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ffe30f73e01ef40558cd69a9493eba2a2%2F115b3b36cedd455196b06f5d33a57ac1?width=2000&format=webp"
              alt="Descriptive Alt Text"
              className="w-[400px] h-auto object-cover relative z-10"
            />
          </div>
        </div>

        {/* Right Section: Heading and List */}
        <div className="lg:w-1/2 text-left relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight text-center lg:text-left">
            About <span className=" text-[#6d88ff]">Reactally</span>
          </h2>
          <p className="text-xl text-gray-300 my-4">
            Reactally is revolutionizing the way websites are built and managed.
            Our cutting-edge CMS platform empowers users to create stunning,
            high-performance websites without the need for technical expertise
            or the headaches of traditional hosting.
          </p>
          <ul className="space-y-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-start">
                {/* <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#FF6934] bg-opacity-20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#FF6934]" />
                  </div>
                </div> */}
                <span className="text-lg text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Background Blur Effect */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B38BF7] rounded-full filter blur-[100px] opacity-10"></div>
    </section>
  );
}
