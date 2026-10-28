"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  Search,
  Printer,
  Share2,
  Check,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Clock,
  Menu,
  X,
} from "lucide-react";

export interface TOCItem {
  id: string;
  title: string;
  number: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  readTime: string;
  activeDoc: "privacy" | "terms";
  tocItems: TOCItem[];
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  effectiveDate,
  readTime,
  activeDoc,
  tocItems,
  children,
}: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[var(--color-crm-peach)] selection:text-[var(--color-crm-rust)] bg-[var(--background)] text-gray-900 dark:text-gray-100">

      <main className="flex-1 pt-24 pb-20 print:pt-4 print:pb-4">
        {/* Document Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-crm-peach)]/40 via-[var(--color-crm-peach)]/20 to-transparent dark:from-[#2d1a13]/60 dark:via-[#2d1a13]/20 dark:to-transparent border-b border-[var(--color-crm-rust)]/15 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-6 print:hidden">
              <Link
                href="/"
                className="hover:text-[var(--color-crm-rust)] transition-colors flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900 dark:text-gray-200 font-semibold">
                Legal
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[var(--color-crm-rust)] font-semibold">
                {title}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                {/* Badge & Switcher */}
                <div className="inline-flex items-center gap-2 p-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-[var(--color-crm-rust)]/20 rounded-full shadow-xs mb-4 print:hidden">
                  <Link
                    href="/privacy"
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeDoc === "privacy"
                        ? "bg-[var(--color-crm-rust)] text-white shadow-xs"
                        : "text-gray-600 dark:text-gray-300 hover:text-[var(--color-crm-rust)]"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeDoc === "terms"
                        ? "bg-[var(--color-crm-rust)] text-white shadow-xs"
                        : "text-gray-600 dark:text-gray-300 hover:text-[var(--color-crm-rust)]"
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    Terms of Service
                  </Link>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                  {title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                  {subtitle}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-6 mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-200/60 dark:border-gray-700/60">
                    <Calendar className="w-4 h-4 text-[var(--color-crm-rust)]" />
                    <span>Effective Date: <strong>{effectiveDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-200/60 dark:border-gray-700/60">
                    <Clock className="w-4 h-4 text-[var(--color-crm-rust)]" />
                    <span>{readTime} read time</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-200/60 dark:border-gray-700/60">
                    <FileText className="w-4 h-4 text-[var(--color-crm-rust)]" />
                    <span>Official Document</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 print:hidden self-start lg:self-center">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-[var(--color-crm-rust)] hover:text-[var(--color-crm-rust)] transition-all shadow-xs text-sm font-medium cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" /> Copied Link
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" /> Share Page
                    </>
                  )}
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-crm-rust)] text-white hover:bg-opacity-90 transition-all shadow-xs text-sm font-medium cursor-pointer"
                >
                  <Printer className="w-4 h-4" /> Print PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Container with Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Mobile TOC Toggle */}
          <div className="lg:hidden mb-6 print:hidden">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border border-[var(--color-crm-rust)]/30 rounded-xl shadow-xs text-sm font-semibold text-gray-800 dark:text-gray-100"
            >
              <span className="flex items-center gap-2">
                <Menu className="w-4 h-4 text-[var(--color-crm-rust)]" />
                Table of Contents ({tocItems.length} Sections)
              </span>
              {mobileTocOpen ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 rotate-90" />}
            </button>

            {mobileTocOpen && (
              <div className="mt-2 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileTocOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-[var(--color-crm-peach)] dark:bg-[#3a251c] text-[var(--color-crm-rust)] font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="font-mono text-[var(--color-crm-rust)] mr-2">
                      {item.number}.
                    </span>
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Desktop Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 print:hidden">
              <div className="sticky top-24 space-y-6">
                {/* Search Box */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search document..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[var(--color-crm-rust)]/50 focus:border-[var(--color-crm-rust)] text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Nav list */}
                <div className="bg-white dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 rounded-2xl p-5 shadow-xs backdrop-blur-xs">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 mb-4 px-2">
                    On This Page
                  </h3>
                  <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                    {tocItems
                      .filter((item) =>
                        searchQuery
                          ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.number.includes(searchQuery)
                          : true
                      )
                      .map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`group flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition-all leading-snug ${
                              isActive
                                ? "bg-[var(--color-crm-peach)]/60 dark:bg-[#3a251c] text-[var(--color-crm-rust)] font-bold shadow-2xs"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white"
                            }`}
                          >
                            <span
                              className={`shrink-0 font-mono px-1.5 py-0.5 rounded-md text-[10px] ${
                                isActive
                                  ? "bg-[var(--color-crm-rust)] text-white"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-[var(--color-crm-rust)]/15 group-hover:text-[var(--color-crm-rust)]"
                              }`}
                            >
                              {item.number}
                            </span>
                            <span className="truncate">{item.title}</span>
                          </a>
                        );
                      })}
                  </nav>

                  {/* Switch document link in sidebar */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                    <Link
                      href={activeDoc === "privacy" ? "/terms" : "/privacy"}
                      className="flex items-center justify-between text-xs font-semibold text-[var(--color-crm-rust)] hover:underline"
                    >
                      <span>
                        View {activeDoc === "privacy" ? "Terms of Service" : "Privacy Policy"}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Document Content */}
            <article className="lg:col-span-9 bg-white dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700/80 rounded-3xl p-6 sm:p-10 shadow-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {children}
            </article>
          </div>
        </div>
      </main>

    </div>
  );
}
