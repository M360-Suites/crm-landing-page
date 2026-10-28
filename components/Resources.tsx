import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";

const resources = [
  {
    title: "The complete guide to a modern CRM",
    category: "E-book",
    chip: "bg-sun",
    description: "How high-performing sales teams use AI and automation to close deals three times faster.",
    link: "#",
  },
  {
    title: "Mastering the AI Writer",
    category: "Video course",
    chip: "bg-lilac",
    description: "A five-part series on writing cold outreach that gets replies.",
    link: "#",
  },
  {
    title: "How Acme Corp grew revenue by 45%",
    category: "Case study",
    chip: "bg-mint",
    description: "The exact pipeline structure and automation rules Acme Corp used.",
    link: "#",
  },
  {
    title: "Q3 sales trends report",
    category: "Research",
    chip: "bg-bubble",
    description: "What's working right now, from a survey of more than 10,000 sales professionals.",
    link: "#",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-24 lg:py-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Learn the craft"
          description="Guides, courses and research for running a better sales process."
          action={
            <Link
              href="#all-resources"
              className="inline-flex px-6 py-3 rounded-full border-[3px] border-ink font-bold hover:bg-sun hover:text-on-color hover:border-on-color transition-colors"
            >
              Browse all resources
            </Link>
          }
        />

        <ul className="mt-14 grid sm:grid-cols-2 gap-5">
          {resources.map((r) => (
            <li key={r.title}>
              <Link
                href={r.link}
                className="group block h-full rounded-[2rem] border-[3px] border-ink p-7 hover:-translate-y-1 hover:shadow-[0_6px_0_var(--ink)] transition-[transform,box-shadow]"
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full border-2 border-on-color text-sm font-bold text-on-color ${r.chip}`}
                >
                  {r.category}
                </span>
                <span className="mt-5 block font-display text-2xl font-extrabold tracking-[-0.03em] group-hover:text-blue transition-colors">
                  {r.title}
                </span>
                <span className="block mt-2 text-ink-2 leading-relaxed">
                  {r.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
