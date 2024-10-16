import Link from "next/link"; // Use Next.js Link for navigation
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reactally - Secure, SEO Optimized and Fast Websites",
  description:
    "Build your website on the go with Reactally CMS. No coding, no hosting setups, no security risks.",
  icons: {
    icon: "/favicon.svg", // Use the SVG icon here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="w-full p-4 flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <Image src="/logo.svg" alt="Reactally Logo" className="h-12 w-auto" />
          <nav>
            <Link href="#about" className="text-white hover:underline">
              About Reactally
            </Link>
          </nav>
        </header>

        {children}

        <footer className="w-full p-6 bg-blue-600 text-white text-center">
          <p>© {new Date().getFullYear()} Reactally. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Empowering the next generation of web creators.
          </p>
        </footer>
      </body>
    </html>
  );
}
