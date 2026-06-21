"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for small teams just getting started with CRM.",
    features: ["Up to 5 users", "Basic Inbox integration", "Pipeline management", "Standard support"],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing sales teams needing advanced tools.",
    features: ["Up to 20 users", "Advanced Analytics", "AI Writer access", "Priority support", "Custom workflows"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex sales processes.",
    features: ["Unlimited users", "Dedicated account manager", "Custom integrations", "24/7 phone support", "Advanced security"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-[var(--color-crm-rust)] uppercase mb-3">
            Tailored Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Scale your team, not your costs
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We believe in pricing that scales with your success. Contact our sales team to build a custom plan that perfectly fits your organization's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border ${
                tier.highlighted 
                  ? "border-[var(--color-crm-rust)] shadow-lg relative bg-gray-50 dark:bg-[#151515]" 
                  : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]"
              } flex flex-col`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-crm-rust)] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">{tier.description}</p>
              
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Custom
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-crm-rust)] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                  tier.highlighted
                    ? "bg-[var(--color-crm-rust)] text-white hover:bg-opacity-90 shadow-md"
                    : "bg-[var(--color-crm-peach)]/30 text-[var(--color-crm-rust)] hover:bg-[var(--color-crm-peach)]/50"
                }`}
              >
                <PhoneCall className="w-4 h-4" />
                Contact Sales
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
