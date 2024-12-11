"use client"

import React, { useState, useEffect } from "react"
import { Loader2, X, Send, User, Mail, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({
    title: "",
    description: "",
    variant: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const contactData = {
      from: formData.email,
      fullname: formData.name,
      subject: "Contact Form Submission",
      message: formData.message,
    }

    try {
      const response = await fetch(
        "https://r7koarkwqd.execute-api.us-east-1.amazonaws.com/dev/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.")
      }

      const data = await response.json()
      console.log("Message sent successfully:", data)

      setToast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "success",
      })
    } catch (error) {
      console.error("Failed to send message:", error)

      setToast({
        title: "Message Failed",
        description: "Failed to send message. Please try again later.",
        variant: "error",
      })
    } finally {
      setFormData({ name: "", email: "", message: "" })
      setLoading(false)
    }
  }

  useEffect(() => {
    if (toast.title) {
      const timer = setTimeout(() => {
        setToast({ title: "", description: "", variant: "" })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  return (
    <section className="w-full  bg-gradient-to-b from-[#0d0d2b] to-[#0d0d2b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-blue-200">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mb-6">
            {/* <label htmlFor="name" className="block  text-blue-200 mb-2">Name</label> */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={20} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-20 text-white placeholder-blue-300 border-2 border-blue-400 focus:border-blue-300 rounded-lg pl-10 pr-4 py-3 outline-none transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            {/* <label htmlFor="email" className="block text-blue-200 mb-2">Email</label> */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-20 text-white placeholder-blue-300 border-2 border-blue-400 focus:border-blue-300 rounded-lg pl-10 pr-4 py-3 outline-none transition-all duration-300"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            {/* <label htmlFor="message" className="block text-blue-200 mb-2">Message</label> */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-blue-300" size={20} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-20 text-white placeholder-blue-300 border-2 border-blue-400 focus:border-blue-300 rounded-lg pl-10 pr-4 py-3 outline-none transition-all duration-300 min-h-[150px]"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-[#d88af0] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl  disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        <p className="mt-6 text-sm text-blue-200 text-center">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast.title && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 ${
              toast.variant === "success" ? "bg-green-500" : "bg-red-500"
            } p-4 rounded-lg shadow-lg text-white max-w-md`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{toast.title}</h4>
                <p className="mt-1">{toast.description}</p>
              </div>
              <button
                onClick={() => setToast({ title: "", description: "", variant: "" })}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

