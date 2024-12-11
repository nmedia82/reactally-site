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
    </main>
  );
}



