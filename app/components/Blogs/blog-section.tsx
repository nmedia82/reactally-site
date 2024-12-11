/** @format */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Mastering React Hooks",
    excerpt:
      "Learn how to leverage the power of React Hooks to write cleaner, more efficient code.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-15",
    author: "Jane Doe",
    slug: "mastering-react-hooks",
  },
  {
    id: 2,
    title: "Building Scalable APIs with GraphQL",
    excerpt:
      "Discover the benefits of GraphQL and how it can improve your API development process.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-10",
    author: "John Smith",
    slug: "scalable-apis-graphql",
  },
  {
    id: 3,
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt:
      "Explore upcoming trends and technologies that will shape the future of web development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-05",
    author: "Alice Johnson",
    slug: "future-web-development-2024",
  },
];

const BlogPost = ({ post }) => (
  <motion.div
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
    <Image
      src={post.image}
      alt={post.title}
      width={300}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <p className="text-sm text-gray-300 mb-2">
        {post.date} • {post.author}
      </p>
      <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-200">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
);

export default function BlogSection() {
  return (
    <section className="py-16  lg:text-left">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Latest from Our Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-[#d88af0] to-[#d88af0] text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
            View All Posts <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
