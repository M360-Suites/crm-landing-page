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
  PieChart,
  Search,
  Bell,
  Settings
} from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="py-10 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#111111]/50 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px]"
        >
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-[#151515] border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col p-4">
            <div className="flex items-center gap-2 px-2 mb-8 mt-2">
              <div className="w-6 h-6 rounded bg-[var(--color-crm-rust)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-semibold text-sm">crm360 workspace</span>
            </div>
            
            <div className="space-y-1 flex-1">
              {[
                { icon: Inbox, label: "Inbox", active: true },
                { icon: Users, label: "Contacts" },
                { icon: Building2, label: "Companies" },
                { icon: KanbanSquare, label: "Pipelines" },
                { icon: Calendar, label: "Task & Calendar" },
                { icon: FileText, label: "Documents" },
                { icon: Bot, label: "AI Writer" },
                { icon: BarChart3, label: "Analytics" },
                { icon: PieChart, label: "Report" },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors cursor-default ${
                    item.active 
                      ? "bg-[var(--color-crm-peach)]/40 text-[var(--color-crm-rust)] font-medium" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>
            
            <div className="mt-auto border-t border-gray-200 dark:border-gray-800 pt-4 flex items-center gap-3 px-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"></div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Jane Doe</span>
                <span className="text-xs text-gray-500">Sales Manager</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-gray-50/50 dark:bg-[#0f0f0f]/50">
            {/* Topbar */}
            <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 bg-white dark:bg-[#151515]">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg w-64">
                <Search className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Search anything...</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <Bell className="w-5 h-5" />
                <Settings className="w-5 h-5" />
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 flex-1 overflow-hidden flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Welcome back, Jane</h2>
                  <p className="text-sm text-gray-500">Here's what's happening with your deals today.</p>
                </div>
                <button className="bg-[var(--color-crm-rust)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Add Contact
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Total Revenue", value: "$124,500", trend: "+14%" },
                  { label: "Active Deals", value: "42", trend: "+5%" },
                  { label: "Win Rate", value: "68%", trend: "+2.4%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-[#151515] p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold">{stat.value}</span>
                      <span className="text-xs text-green-500 font-medium bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart & Activity Area (Mockup) */}
              <div className="flex-1 bg-white dark:bg-[#151515] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm flex flex-col">
                <div className="font-medium text-sm mb-4">Pipeline Overview</div>
                <div className="flex-1 flex items-end gap-2 px-4 pb-2">
                  {[40, 60, 35, 80, 50, 90, 70].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                      className="flex-1 bg-[var(--color-crm-peach)] rounded-t-sm opacity-80"
                      style={{ height: `${height}%` }}
                    >
                      {i === 5 && <div className="w-full h-full bg-[var(--color-crm-rust)] rounded-t-sm" />}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
