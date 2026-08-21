"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/#resources" },
  { label: "About", href: "/#about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-crm-peach)]/70 dark:bg-[#2d1a13]/90 backdrop-blur-md border-b border-[var(--color-crm-rust)]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="crm360"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[var(--color-crm-rust)] dark:hover:text-[var(--color-crm-rust)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right-side actions */}
            <div className="flex items-center gap-3">
              <a
                href="https://app.crm360online.com"
                className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Log in
              </a>
              <a
                href="https://app.crm360online.com/register"
                className="hidden sm:block text-sm font-medium bg-[var(--color-crm-rust)] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-sm"
              >
                Get Started
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-[var(--color-crm-rust)]/10 transition-colors"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[var(--color-crm-peach)] dark:bg-[#2d1a13] border-b border-[var(--color-crm-rust)]/20 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center py-3 px-3 rounded-xl text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-[var(--color-crm-rust)]/10 hover:text-[var(--color-crm-rust)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-3 pt-3 border-t border-[var(--color-crm-rust)]/20 flex flex-col gap-2 pb-2">
                <a
                  href="https://app.crm360online.com"
                  className="block text-center py-3 rounded-xl text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-[var(--color-crm-rust)]/10 transition-colors"
                >
                  Log in
                </a>
                <a
                  href="https://app.crm360online.com/register"
                  className="block text-center py-3 rounded-xl text-sm font-medium bg-[var(--color-crm-rust)] text-white hover:bg-opacity-90 transition-all shadow-sm"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
