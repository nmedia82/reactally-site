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
import CustomButton from "./components/CustomButton";
import SubscribeForm from "./components/SubscribeForm";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${roboto.className}`}>
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-20 text-center bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white max-w-4xl">
          Build Secure, SEO-Optimized, and Lightning-Fast Websites with
          Reactally CMS
        </h1>
        <p className="mb-8 text-xl text-white max-w-2xl">
          No coding required. No complex hosting setups. No security risks.
          Create stunning websites on the go and connect with your own domain.
        </p>
        <CustomButton
          href="#subscribe"
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          Get Early Access <ArrowRight className="ml-2 h-4 w-4 inline" />
        </CustomButton>
      </section>

      <section id="features" className="w-full py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">
          Why Choose Reactally?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-cyan-500" />}
            title="Multiple Sites, One Account"
            description="Create and manage multiple websites from a single dashboard. Perfect for agencies and multi-brand businesses."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-cyan-500" />}
            title="Lightning-Fast Performance"
            description="Built on React and Next.js, Reactally offers unparalleled speed and optimal performance for your websites."
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-cyan-500" />}
            title="Enhanced Security"
            description="Our serverless architecture ensures your websites are protected against common vulnerabilities and attacks."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8 text-cyan-500" />}
            title="No Coding Required"
            description="Use our intuitive page builder and ready-to-use templates to create stunning websites without writing a single line of code."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 text-cyan-500" />}
            title="SEO Optimized"
            description="Built-in SEO tools and optimizations to help your websites rank higher in search engines."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-cyan-500" />}
            title="Custom Domain Support"
            description="Easily connect your own domain to your Reactally-powered websites for a professional online presence."
          />
        </div>
      </section>

      <section id="security" className="w-full py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Uncompromising Security
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Traditional CMS platforms like WordPress have long been plagued by
            security vulnerabilities, making them prime targets for hackers.
            Common issues include:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>SQL injections</li>
            <li>Cross-site scripting (XSS) attacks</li>
            <li>Outdated plugins and themes</li>
            <li>Weak authentication systems</li>
          </ul>
          <p className="text-lg mb-6 text-gray-700">
            Reactally addresses these concerns head-on with its innovative
            approach to web development:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-cyan-500" />}
              title="Serverless Architecture"
              description="Eliminates common server-side vulnerabilities and reduces attack surface."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-cyan-500" />}
              title="Built-in Security Features"
              description="Includes HTTPS enforcement, CSRF protection, and secure content policies by default."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-cyan-500" />}
              title="Automatic Updates"
              description="Core platform and components are always up-to-date, eliminating vulnerabilities from outdated software."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-cyan-500" />}
              title="Secure Code Practices"
              description="Utilizes React and Next.js best practices to prevent common web vulnerabilities."
            />
          </div>
          <p className="text-lg text-gray-700">
            With Reactally, you can focus on creating great content and growing
            your online presence, knowing that your website&apos;s security is
            taken care of.
          </p>
        </div>
      </section>

      <section id="about" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            About Reactally
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Reactally is revolutionizing the way websites are built and managed.
            Our cutting-edge CMS platform empowers users to create stunning,
            high-performance websites without the need for technical expertise
            or the headaches of traditional hosting.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            With Reactally, you have full control over every aspect of your site
            - from menus and branding to content, blogs, pages, and contact
            forms. Our platform is built on a robust, serverless infrastructure
            using AWS and Vercel, ensuring unparalleled scalability,
            reliability, and security for your digital presence.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            Whether you&apos;re a small business owner, a creative professional,
            or a digital agency managing multiple clients, Reactally provides
            the tools and flexibility you need to succeed online.
          </p>
          <div className="text-center mt-12">
            <p className="font-bold text-xl mb-4 text-blue-600">
              Reactally is currently in development.
            </p>
            <p className="text-lg text-gray-700">
              Be among the first to experience the future of web development!
            </p>
          </div>
        </div>
      </section>

      <SubscribeForm />
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
