import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-crm-rust)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                crm360
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The modern, intuitive CRM platform designed to help your team close more deals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Features</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Community</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--color-crm-rust)] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} crm360 Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <span className="text-xs">𝕏</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <span className="text-xs">in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
