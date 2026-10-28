import React from "react";

type SectionHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

// One opening for every section: heading and paragraph on the same left edge.
export function SectionHeader({ title, description, action, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}>
      <div className="max-w-3xl">
        <h2 className="font-display text-4xl md:text-6xl leading-[0.98] font-extrabold tracking-[-0.045em] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0 lg:pb-2">{action}</div>}
    </div>
  );
}
