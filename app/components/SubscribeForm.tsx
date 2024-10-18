/** @format */

"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subscriptionData = {
      from: email,
      fullname: "Visitor", // This can be dynamic if needed
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

      // Show success notification
      setNotification({
        message: "Thanks for subscribing! We'll keep you updated.",
        type: "success",
      });
    } catch (error) {
      console.error("Subscription failed:", error);

      // Show error notification
      setNotification({
        message: "Failed to subscribe. Please try again later.",
        type: "error",
      });
    } finally {
      setEmail("");
      setLoading(false);

      // Hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <section
      id="subscribe"
      className="w-full py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
        <p className="text-lg mb-8 text-white">
          Join our waitlist to be notified when Reactally launches and get
          exclusive early access!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 text-black">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow p-2 rounded"
            required
          />
          <CustomButton
            type="submit"
            className="bg-white text-blue-600 hover:bg-blue-50 flex items-center justify-center"
            disabled={loading}>
            {loading ? (
              <span className="loader border-t-transparent border-solid border-4 border-white rounded-full w-6 h-6 animate-spin"></span>
            ) : (
              "Subscribe"
            )}
          </CustomButton>
        </form>

        {/* Notification message with fade-out effect */}
        {notification && (
          <div
            className={`mt-4 p-3 rounded text-white transition-opacity duration-500 ${
              notification.type === "success"
                ? "bg-green-500 fade-out"
                : "bg-red-500 fade-out"
            }`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscribeForm;
