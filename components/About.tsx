import { SectionHeader } from "@/components/shared/SectionHeader";

const values = [
  {
    title: "Customer first",
    description:
      "Every feature starts with a real frustration from a real sales team. We build what customers need, not what looks good on a roadmap.",
  },
  {
    title: "Simple over complex",
    description:
      "CRMs have a reputation for being bloated. We cut friction until your team actually wants to use the tool.",
  },
  {
    title: "Built for people",
    description:
      "Sales is a people business. crm360 gives reps more time with customers and less time with software.",
  },
  {
    title: "Always improving",
    description:
      "We ship weekly and listen constantly. If something isn't working, we fix it fast. Your feedback shapes the product.",
  },
];

const stats = [
  { value: "2026", label: "Founded" },
  { value: "10+", label: "Teams worldwide" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "24/7", label: "Support coverage" },
];

export function About() {
  return (
    <section id="about" className="pb-24 lg:pb-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <SectionHeader
            className="lg:col-span-7"
            eyebrow="About us"
            title="Built by salespeople who were tired of their CRM."
            description="Our founders spent years running sales teams and watching good reps get buried under spreadsheets, disconnected tools and clunky enterprise software. In 2026 they set out to build the CRM they always wanted: fast, modern and pleasant to use."
          />
          <dl className="lg:col-span-5 grid grid-cols-2 rounded-3xl border border-line overflow-hidden">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 flex flex-col-reverse ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line" : ""}`}
              >
                <dt className="mt-1 text-sm text-ink-3">{s.label}</dt>
                <dd className="font-display text-4xl font-bold tracking-[-0.04em] tabular-nums">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {values.map((v, i) => (
            <div key={v.title} className="pt-6 border-t border-line">
              <span className="text-xs font-semibold text-ink-3 tabular-nums">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold tracking-[-0.02em]">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
