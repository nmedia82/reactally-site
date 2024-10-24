/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    title: "",
    description: "",
    variant: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subscriptionData = {
      from: email,
      fullname: "Visitor",
      subject: "Subscription Request",
      message: "This is a subscription request for updates.",
    };

    try {
      const response = await fetch(
        "https://r7koarkwqd.execute-api.us-east-1.amazonaws.com/dev/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscriptionData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      const data = await response.json();
      console.log("Subscription successful:", data);

      setToast({
        title: "Subscribed!",
        description: "Thanks for subscribing! We'll keep you updated.",
        variant: "success",
      });
    } catch (error) {
      console.error("Subscription failed:", error);

      setToast({
        title: "Subscription failed",
        description: "Failed to subscribe. Please try again later.",
        variant: "error",
      });
    } finally {
      setEmail("");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast.title) {
      const timer = setTimeout(() => {
        setToast({ title: "", description: "", variant: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section
      id="Subscribe"
      className="w-full  py-16  bg-gradient-to-b from-[#0D0D2B] to-[#1A1A3A] overflow-hidden">
      <div className=" mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Be the first to experience Reactally! Join our exclusive waitlist
            for early access and exciting updates.
          </p>
        </motion.div>
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-transparent border-2 border-blue-300 focus:border-blue-100 rounded-full px-6 py-4 outline-none transition-all duration-300 peer"
                placeholder="Enter your email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-4 text-blue-200 transition-all duration-300 transform 
                           -translate-y-8 scale-75 peer-placeholder-shown:scale-100 
                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                           peer-focus:-translate-y-8">
                Enter your email
              </label>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#5c9af6] to-[#1163fa] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {loading ? (
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              ) : (
                "Join Waitlist"
              )}
            </motion.button>
          </div>
        </form>
        <p className="mt-6 text-sm text-blue-200">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast.title && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 ${
              toast.variant === "success" ? "bg-green-500" : "bg-red-500"
            } p-4 rounded-lg shadow-lg text-white max-w-md`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{toast.title}</h4>
                <p className="mt-1">{toast.description}</p>
              </div>
              <button
                onClick={() =>
                  setToast({ title: "", description: "", variant: "" })
                }
                className="text-white hover:text-gray-200 transition-colors">
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
