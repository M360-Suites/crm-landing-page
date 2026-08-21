"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer-first, always",
    description:
      "Every feature we ship starts with a real frustration from a real sales team. We build what our customers actually need, not what looks good on a roadmap.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity over complexity",
    description:
      "CRMs have a reputation for being bloated and hard to use. We obsess over reducing friction so your team actually adopts the tool.",
  },
  {
    icon: Heart,
    title: "Built for humans",
    description:
      "Sales is a people business. crm360 is designed to help reps spend more time with customers and less time wrestling with software.",
  },
  {
    icon: Rocket,
    title: "Relentlessly improving",
    description:
      "We ship weekly. We listen constantly. If something isn't working, we fix it — fast. Your feedback directly shapes the product.",
  },
];

const stats = [
  { value: "2026", label: "Founded" },
  { value: "10+", label: "Teams worldwide" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "24/7", label: "Support coverage" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold tracking-wide text-[var(--color-crm-rust)] uppercase mb-3"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Built by sales people,{" "}
            <span className="text-[var(--color-crm-rust)]">
              for sales people.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            crm360 was born out of frustration. Our founders spent years running
            sales teams and watching talented reps get buried under
            spreadsheets, siloed tools, and clunky enterprise software. In 2026,
            they decided to build the CRM they always wished existed — modern,
            fast, and actually enjoyable to use.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden mb-20 shadow-sm"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-[#151515] px-8 py-10 text-center"
            >
              <p className="text-4xl font-bold text-[var(--color-crm-rust)] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 bg-gray-50 dark:bg-[#0f0f0f] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:border-[var(--color-crm-peach)] dark:hover:border-[var(--color-crm-rust)]/40 transition-colors group"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-crm-peach)]/30 text-[var(--color-crm-rust)] flex items-center justify-center group-hover:bg-[var(--color-crm-rust)] group-hover:text-white transition-colors">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
