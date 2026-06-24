"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-crm-rust)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <Link href="/" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              crm360
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[var(--color-crm-rust)] transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[var(--color-crm-rust)] transition-colors">
              Pricing
            </Link>
            <Link href="#resources" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[var(--color-crm-rust)] transition-colors">
              Resources
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="app.crm360online.com" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hidden sm:block">
              Log in
            </Link>
            <Link
              href="app.crm360online.com/register"
              className="text-sm font-medium bg-[var(--color-crm-rust)] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
