/** @format */

import "./globals.css";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Reactally - Secure, SEO Optimized and Fast Websites",
  description:
    "Build your website on the go with Reactally CMS. No coding, no hosting setups, no security risks.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WW2BFDCZ" />
      <body>
        <Header />
        <main className="pt-16">{children}</main>
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
