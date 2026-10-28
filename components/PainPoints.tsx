import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const pairs = [
  {
    pain: "Customer history is spread across email, spreadsheets and chat apps.",
    fix: "Every email, call and note sits on the contact's profile.",
  },
  {
    pain: "Leads slip away because no one can see which deals need a follow-up.",
    fix: "The pipeline shows each deal's stage and flags the ones going quiet.",
  },
  {
    pain: "Outreach reads like every competitor's, so open rates stay low.",
    fix: "AI Writer drafts from your real conversations with that customer.",
  },
  {
    pain: "Reps lose close to a third of the day to admin and data entry.",
    fix: "Logging, reminders and follow-ups happen automatically.",
  },
];

export function PainPoints() {
  return (
    <section id="why-crm360" className="py-24 lg:py-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <SectionHeader
          className="lg:col-span-5 lg:self-start lg:sticky lg:top-28"
          eyebrow="Why crm360"
          title="Most sales teams don't have a people problem. They have a tools problem."
          description="Good reps miss targets when the system around them is scattered. Here is what changes when it isn't."
        />

        <div className="lg:col-span-7 rounded-3xl border border-line overflow-hidden">
          <div className="hidden sm:grid grid-cols-2 bg-mist border-b border-line text-xs font-semibold uppercase tracking-[0.12em] text-ink-3">
            <p className="px-6 py-3">Without one system</p>
            <p className="px-6 py-3 border-l border-line text-blue">With crm360</p>
          </div>
          <ul>
            {pairs.map((p, i) => (
              <li
                key={p.pain}
                className={`grid sm:grid-cols-2 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <p className="flex gap-3 px-6 pt-6 pb-3 sm:py-6 text-ink-3 leading-relaxed">
                  <X className="w-4 h-4 mt-1 shrink-0 text-clay" strokeWidth={2.5} />
                  {p.pain}
                </p>
                <p className="flex gap-3 px-6 pb-6 pt-0 sm:py-6 sm:border-l border-line font-medium text-ink leading-relaxed">
                  <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-teal-soft text-teal grid place-items-center">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {p.fix}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
