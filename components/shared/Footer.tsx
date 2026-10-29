import React from "react";
import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@crm360online.com", href: "mailto:hello@crm360online.com" },
      { label: "08064968725", href: "tel:+2348064968725" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <Image src="/logo-crm360.png" alt="crm360" width={480} height={278} className="h-9 w-auto" />
            <p className="mt-4 text-sm text-ink-3 max-w-xs leading-relaxed">
              The CRM that keeps your team&apos;s conversations, deals and
              follow-ups in one place.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-ink-3 hover:text-ink transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-3">
            © {new Date().getFullYear()} M360 Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="crm360 on X" className="w-9 h-9 rounded-full border border-line grid place-items-center text-sm text-ink-2 hover:text-ink hover:border-ink-3 transition-colors">
              𝕏
            </a>
            <a href="#" aria-label="crm360 on LinkedIn" className="w-9 h-9 rounded-full border border-line grid place-items-center text-sm font-semibold text-ink-2 hover:text-ink hover:border-ink-3 transition-colors">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
