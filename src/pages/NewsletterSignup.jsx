import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white p-8">
      <Link to="/" className="inline-flex items-center text-white hover:text-blue-300 mb-6">
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Newsletter Signup
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Stay Updated</h2>
        <p className="mb-6 text-center">
          Sign up for our newsletter to receive monthly updates on the latest offers, exclusive deals, and website updates!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300"
              placeholder="your@email.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewsletterSignup;