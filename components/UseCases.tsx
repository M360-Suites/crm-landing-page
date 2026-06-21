"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck } from "lucide-react";

export function UseCases() {
  return (
    <section className="py-24 bg-[var(--color-crm-cream)] dark:bg-[#181311]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-[var(--color-crm-rust)] uppercase mb-3">
            Who is it for?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Built for growth, designed for scale
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you are a scrappy startup trying to organize your first 100 customers, or a large enterprise managing complex sales territories, crm360 adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SME Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#111111] rounded-3xl p-8 md:p-12 border border-[var(--color-crm-peach)]/50 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-crm-peach)]/20 rounded-bl-full -z-10"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-crm-peach)]/50 flex items-center justify-center mb-8">
              <Zap className="w-7 h-7 text-[var(--color-crm-rust)]" />
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              For Small & Medium Enterprises
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Stop running your business on spreadsheets. Move fast, stay organized, and look bigger than you are with automated professional workflows.
            </p>
            
            <ul className="space-y-4">
              {[
                "Setup in minutes, not months",
                "Automated follow-ups to save time",
                "Unified inbox to track every conversation",
                "Simple, transparent pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-crm-rust)]"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-bl-full -z-10"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center mb-8">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">
              For Enterprise Organizations
            </h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Break down data silos across departments. Gain absolute visibility into revenue forecasting with bank-grade security and compliance.
            </p>
            
            <ul className="space-y-4">
              {[
                "Advanced permissioning and roles",
                "Custom API integrations",
                "Dedicated account management",
                "SOC2 Type II Compliance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
