/** @format */

"use client";

import { Roboto } from "next/font/google";
import {
  ArrowRight,
  Code,
  Globe,
  Lock,
  Rocket,
  Zap,
  Shield,
} from "lucide-react";
import HomePage from "./pages/HomePage";
import CustomButton from "./components/CustomButton";
import SubscribeForm from "./components/SubscribeForm";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className={`flex min-h-screen flex-col ${roboto.className}`}>
      <HomePage />

      {/* <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex flex-col items-center justify-center flex-1 px-4 py-20  text-center bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500">
        <motion.h1
          variants={fadeIn}
          className="text-2xl  lg:text-[70px] font-extrabold mb-6 text-white px-10 max-w-[1250px]">
          Build Secure, SEO-Optimized, and Lightning-Fast Websites with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-400 to-white">
            {" "}
            Reactally CMS
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="mb-8 md:text-2xl text-gray-100 max-w-3xl leading-relaxed">
          No coding required. No complex hosting setups. No security risks.
          Create stunning websites on the go and connect with your own domain.
        </motion.p>
        <motion.div variants={fadeIn}>
          <CustomButton
            href="#subscribe"
            className="bg-white text-indigo-700 hover:bg-indigo-50 transform hover:scale-105 transition-transform duration-300 ">
            Get Early Access <ArrowRight className="ml-2 h-4 w-4 inline" />
          </CustomButton>
        </motion.div>
      </motion.section>

      <section id="features" className="w-full py-20 px-4 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-700">
          Why Choose Reactally?
        </motion.h2>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={stagger}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-indigo-500" />}
            title="Multiple Sites, One Account"
            description="Create and manage multiple websites from a single dashboard. Perfect for agencies and multi-brand businesses."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-pink-500" />}
            title="Lightning-Fast Performance"
            description="Built on React and Next.js, Reactally offers unparalleled speed and optimal performance for your websites."
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-green-500" />}
            title="Enhanced Security"
            description="Our serverless architecture ensures your websites are protected against common vulnerabilities and attacks."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8 text-purple-500" />}
            title="No Coding Required"
            description="Use our intuitive page builder and ready-to-use templates to create stunning websites without writing a single line of code."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 text-orange-500" />}
            title="SEO Optimized"
            description="Built-in SEO tools and optimizations to help your websites rank higher in search engines."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-cyan-500" />}
            title="Custom Domain Support"
            description="Easily connect your own domain to your Reactally-powered websites for a professional online presence."
          />
        </motion.div>
      </section>

      <section id="security" className="w-full py-20 px-4 bg-white">
        <div className="px-6 max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center text-indigo-700">
            Uncompromising Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-6 text-gray-700">
            Traditional CMS platforms like WordPress have long been plagued by
            security vulnerabilities, making them prime targets for hackers.
            Reactally addresses these concerns head-on with its innovative
            approach to web development:
          </motion.p>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-indigo-500" />}
              title="Serverless Architecture"
              description="Eliminates common server-side vulnerabilities and reduces attack surface."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-green-500" />}
              title="Built-in Security Features"
              description="Includes HTTPS enforcement, CSRF protection, and secure content policies by default."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-pink-500" />}
              title="Automatic Updates"
              description="Core platform and components are always up-to-date, eliminating vulnerabilities from outdated software."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-purple-500" />}
              title="Secure Code Practices"
              description="Utilizes React and Next.js best practices to prevent common web vulnerabilities."
            />
          </motion.div>
        </div>
      </section>

      <section id="about" className="w-full py-20 px-4 bg-white text-black ">
        <div className="px-6 max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center text-indigo-700">
            About Reactally
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-6">
            Reactally is revolutionizing the way websites are built and managed.
            Our cutting-edge CMS platform empowers users to create stunning,
            high-performance websites without the need for technical expertise
            or the headaches of traditional hosting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12">
            <p className="font-bold text-xl mb-4 text-indigo-700">
              Reactally is currently in development.
            </p>
            <p className="text-lg">
              Be among the first to experience the future of web development!
            </p>
          </motion.div>
        </div>
      </section>

      <SubscribeForm /> */}
    </main>
  );
}

// function FeatureCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <motion.div
//       // variants={fadeIn}
//       className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </motion.div>
//   );
// }
