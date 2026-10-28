import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "dark" | "ghost-night";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue-deep shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_1px_2px_rgb(15_23_42/0.2)]",
  secondary: "bg-paper text-ink border border-line hover:border-ink-3 shadow-[0_1px_2px_rgb(15_23_42/0.06)]",
  dark: "bg-white text-[#0a1120] hover:bg-white/90",
  "ghost-night": "text-night-ink border border-white/20 hover:border-white/50",
};

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export const SIGNUP_URL = "https://app.crm360online.com/register";
export const LOGIN_URL = "https://app.crm360online.com";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`;
  // Internal anchors go through Link; the app and mailto links are plain anchors.
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
