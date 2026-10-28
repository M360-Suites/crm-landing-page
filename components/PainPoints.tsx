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
    <section id="why-crm360" className="px-3 sm:px-6 lg:px-8 pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-blue text-white border-[3px] border-on-color px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
        <SectionHeader
          title={
            <>
              Most sales teams don&apos;t have a people problem. They have a
              tools problem.
            </>
          }
          description="Good reps miss targets when the system around them is scattered. Here is what changes when it isn't."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {pairs.map((p) => (
            <li
              key={p.pain}
              className="rounded-3xl bg-paper text-ink border-[3px] border-on-color p-6 lg:p-7"
            >
              <p className="text-ink-3 line-through decoration-bubble decoration-[3px]">
                {p.pain}
              </p>
              <p className="mt-4 flex gap-3 font-display text-xl font-bold leading-snug tracking-[-0.02em]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-hidden>
                  <circle cx="12" cy="12" r="11" fill="var(--mint)" stroke="var(--on-color)" strokeWidth="2" />
                  <path d="M7 12.5 L10.5 16 L17 8.5" fill="none" stroke="var(--on-color)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p.fix}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
