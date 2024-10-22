/** @format */

import { Zap, Rocket, Shield, Code, Lock } from "lucide-react";

export default function Security() {
  const features = [
    {
      icon: Shield,
      title: "Serverless Architecture",
      description:
        "Eliminates common server-side vulnerabilities and reduces attack surface.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Lock,
      title: "Built-in Security Features",
      description:
        "Includes HTTPS enforcement, CSRF protection, and secure content policies by default.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Automatic Updates",
      description:
        "Core platform and components are always up-to-date, eliminating vulnerabilities from outdated software.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Code,
      title: "Secure Code Practices",
      description:
        "Utilizes React and Next.js best practices to prevent common web vulnerabilities.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="Security" className="py-24 px-4 bg-[#0D0D2B] overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 relative inline-block">
            Uncompromising Security
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4EADFD] to-[#B38BF7]"></span>
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            Traditional CMS platforms like WordPress have long been plagued by
            security vulnerabilities, making them prime targets for hackers.
            Reactally addresses these concerns head-on with its innovative
            approach to web development:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
          {features.map(({ icon: Icon, title, description, color }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-xl bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 transition-all duration-300 hover:bg-opacity-10 hover:transform hover:scale-105">
              <div
                className={`flex-shrink-0 p-3 mb-4 rounded-full bg-gradient-to-br ${color} group-hover:animate-pulse`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-md text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4fc7ff] rounded-full filter blur-[150px] opacity-10 "></div>
      </div>
    </section>
  );
}
