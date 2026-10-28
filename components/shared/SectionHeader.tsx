import React from "react";

type SectionHeaderProps = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

// One opening for every section: eyebrow, heading and paragraph on a shared edge.
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"
      } ${className}`}
    >
      <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold text-blue">{eyebrow}</p>
        )}
        <h2 className="font-display text-[2.25rem] md:text-5xl leading-[1.04] font-bold tracking-[-0.035em] text-balance">
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed opacity-75 text-pretty ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 lg:pb-1">{action}</div>}
    </div>
  );
}
