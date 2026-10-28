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
  { value: "2026", label: "Founded", tile: "bg-sun", tilt: "-rotate-2" },
  { value: "10+", label: "Teams worldwide", tile: "bg-mint", tilt: "rotate-1" },
  { value: "98%", label: "Customer satisfaction", tile: "bg-bubble", tilt: "rotate-2" },
  { value: "24/7", label: "Support coverage", tile: "bg-sky", tilt: "-rotate-1" },
];

export function About() {
  return (
    <section id="about" className="pb-24 lg:pb-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <SectionHeader
            className="lg:col-span-7"
            title="Built by salespeople who were tired of their CRM."
            description="Our founders spent years running sales teams and watching good reps get buried under spreadsheets, disconnected tools and clunky enterprise software. In 2026 they set out to build the CRM they always wanted: fast, modern and pleasant to use."
          />
          <dl className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-3xl border-[3px] border-on-color p-6 text-on-color ${s.tile} ${s.tilt}`}
              >
                <dd className="font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] tabular-nums">
                  {s.value}
                </dd>
                <dt className="mt-1 text-sm font-semibold">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">{v.title}</h3>
              <p className="mt-2 text-ink-2 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
