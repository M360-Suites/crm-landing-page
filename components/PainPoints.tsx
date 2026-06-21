"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, ArrowRight } from "lucide-react";

const painPoints = [
  {
    title: "Scattered Customer Data",
    description: "Your team wastes hours jumping between emails, spreadsheets, and chat apps just to find a single client interaction.",
  },
  {
    title: "Leaking Sales Pipelines",
    description: "Leads are falling through the cracks because there's no clear visibility into deal stages or required follow-ups.",
  },
  {
    title: "Generic Outreach",
    description: "Your cold emails look exactly like your competitors', resulting in terrible open rates and wasted marketing spend.",
  },
  {
    title: "Manual Data Entry",
    description: "Sales reps are spending 30% of their day doing administrative work instead of actually selling to prospects.",
  }
];

export function PainPoints() {
  return (
    <section className="py-24 bg-white dark:bg-[#111111] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-semibold tracking-wide text-red-500 uppercase mb-3">
                The Problem
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Sales shouldn't feel like a constant struggle for organization
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Most sales teams aren't failing because of bad reps; they're failing because their underlying systems are broken, disconnected, and frustrating to use.
              </p>
              
              <div className="space-y-6">
                {painPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{point.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-red-50 dark:bg-red-900/10 rounded-3xl transform rotate-3 -z-10"></div>
            <div className="bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">The crm360 Difference</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold">1</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Unified data means absolute context</p>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4 ml-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold">2</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Visual pipelines prevent missed deals</p>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4 ml-12">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-crm-peach)]/40 text-[var(--color-crm-rust)] flex items-center justify-center font-bold">3</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">AI handles the repetitive grunt work</p>
                </div>
              </div>
              
              <button className="mt-8 w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                See how we fix this <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
