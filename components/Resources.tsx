"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Video, Users, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "Complete Guide to Modern CRM",
    category: "E-Book",
    description: "Learn how top performing sales teams are leveraging AI and automation to close deals 3x faster.",
    icon: BookOpen,
    link: "#",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Mastering the AI Writer",
    category: "Video Course",
    description: "A 5-part video series on crafting the perfect cold outreach using our context-aware AI.",
    icon: Video,
    link: "#",
    tagColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    title: "How Acme Corp Increased Revenue by 45%",
    category: "Case Study",
    description: "Discover the exact pipeline structure and automation rules used by Acme Corp.",
    icon: Users,
    link: "#",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    title: "Q3 Sales Trends Report",
    category: "Research",
    description: "Data-backed insights from over 10,000 sales professionals on what's working right now.",
    icon: Lightbulb,
    link: "#",
    tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-24 bg-gray-50 dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-wide text-[var(--color-crm-rust)] uppercase mb-3">
              Knowledge Hub
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resources to help you grow
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to master your sales process, from foundational strategies to advanced technical setups.
            </p>
          </div>
          <Link 
            href="#all-resources" 
            className="inline-flex items-center gap-2 text-[var(--color-crm-rust)] font-medium hover:gap-3 transition-all shrink-0"
          >
            View all resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#151515] rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-[var(--color-crm-rust)] dark:hover:border-[var(--color-crm-rust)] transition-colors group cursor-pointer flex flex-col md:flex-row gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-crm-peach)]/30 group-hover:text-[var(--color-crm-rust)] transition-colors">
                <resource.icon className="w-7 h-7" />
              </div>
              
              <div className="flex-1">
                <div className="mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${resource.tagColor}`}>
                    {resource.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--color-crm-rust)] transition-colors">
                  {resource.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-[var(--color-crm-rust)] transition-colors">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
