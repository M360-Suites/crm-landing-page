export function SoonBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-soft text-teal ${className}`}
    >
      Coming soon
    </span>
  );
}
