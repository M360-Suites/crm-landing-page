import { Check, Store, Building } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const audiences = [
  {
    icon: Store,
    label: "Small and medium businesses",
    title: "Move off spreadsheets and look bigger than you are.",
    points: [
      "Set up in minutes, not months",
      "Automatic follow-ups",
      "One inbox for every conversation",
      "Simple, transparent pricing",
    ],
  },
  {
    icon: Building,
    label: "Enterprise organizations",
    title: "Break down silos and forecast from one source of truth.",
    points: [
      "Detailed roles and permissions",
      "Custom API integrations",
      "A dedicated account manager",
      "SOC 2 Type II compliance",
    ],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 lg:py-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Who it's for"
          title="From your first hundred customers to your hundredth sales rep."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {audiences.map((a) => (
            <div key={a.label} className="rounded-3xl border border-line p-8 lg:p-10">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-3">
                <a.icon className="w-4 h-4" /> {a.label}
              </p>
              <h3 className="mt-5 max-w-md font-display text-2xl lg:text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-balance">
                {a.title}
              </h3>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-teal" strokeWidth={2.6} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
