"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Inbox, 
  Users, 
  Building2, 
  KanbanSquare, 
  Calendar, 
  FileText, 
  Bot, 
  BarChart3, 
  PieChart 
} from "lucide-react";

const features = [
  {
    title: "Inbox",
    description: "Centralize all your team's communications. Connect email, social media, and chat in one unified workspace.",
    icon: Inbox,
  },
  {
    title: "Contacts",
    description: "Manage relationships with intelligent profiles that automatically enrich data from public sources.",
    icon: Users,
  },
  {
    title: "Companies",
    description: "Organize accounts and track organizational hierarchies to better understand your target enterprises.",
    icon: Building2,
  },
  {
    title: "Pipelines",
    description: "Customize your sales process with drag-and-drop boards that visualize exactly where every deal stands.",
    icon: KanbanSquare,
  },
  {
    title: "Task & Calendar",
    description: "Never miss a follow-up. Schedule meetings, set reminders, and sync with Google or Outlook.",
    icon: Calendar,
  },
  {
    title: "Documents",
    description: "Create, store, and send proposals or contracts securely. Track when clients open and sign.",
    icon: FileText,
  },
  {
    title: "AI Writer",
    description: "Draft personalized emails and follow-ups in seconds with our context-aware AI assistant.",
    icon: Bot,
  },
  {
    title: "Analytics",
    description: "Uncover insights with powerful dashboards. Track team performance, deal velocity, and revenue forecasts.",
    icon: BarChart3,
  },
  {
    title: "Report",
    description: "Generate beautiful, automated reports to share with stakeholders on a regular cadence.",
    icon: PieChart,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-[var(--color-crm-rust)] uppercase mb-3">
            Everything you need
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            A complete toolkit for modern sales teams
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stop switching between disjointed apps. crm360 brings your entire customer journey into one beautifully designed platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#151515] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-crm-peach)]/30 text-[var(--color-crm-rust)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-crm-rust)] group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
