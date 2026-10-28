"use client";

import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-200 border-b ${
          scrolled || menuOpen
            ? "bg-paper/85 backdrop-blur-md border-line"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo-crm360.png"
                alt="crm360"
                width={480}
                height={278}
                className="h-9 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-ink-2 hover:text-ink hover:bg-mist transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://app.crm360online.com"
                className="hidden md:block px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink transition-colors"
              >
                Log in
              </a>
              <a
                href="https://app.crm360online.com/register"
                className="hidden sm:block text-sm font-semibold bg-blue text-white px-4 py-2 rounded-full hover:bg-blue-deep transition-colors"
              >
                Start free trial
              </a>

              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="md:hidden p-2 rounded-lg text-ink-2 hover:bg-mist transition-colors"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-paper border-b border-line shadow-lg"
          >
            <div className="px-4 sm:px-6 py-3">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-3 rounded-lg text-base font-medium text-ink hover:bg-mist transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 pt-3 border-t border-line flex flex-col gap-2 pb-2">
                <a
                  href="https://app.crm360online.com"
                  className="block text-center py-3 rounded-full text-sm font-medium text-ink border border-line"
                >
                  Log in
                </a>
                <a
                  href="https://app.crm360online.com/register"
                  className="block text-center py-3 rounded-full text-sm font-semibold bg-blue text-white"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
