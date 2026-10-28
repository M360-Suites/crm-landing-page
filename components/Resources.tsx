import Link from "next/link";
import { ArrowUpRight, BookOpen, PlayCircle, LineChart, FileBarChart } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/Button";

const resources = [
  {
    title: "The complete guide to a modern CRM",
    category: "E-book",
    icon: BookOpen,
    description: "How high-performing sales teams use AI and automation to close deals three times faster.",
    link: "#",
  },
  {
    title: "Mastering the AI Writer",
    category: "Video course",
    icon: PlayCircle,
    description: "A five-part series on writing cold outreach that gets replies.",
    link: "#",
  },
  {
    title: "How Acme Corp grew revenue by 45%",
    category: "Case study",
    icon: LineChart,
    description: "The exact pipeline structure and automation rules Acme Corp used.",
    link: "#",
  },
  {
    title: "Q3 sales trends report",
    category: "Research",
    icon: FileBarChart,
    description: "What's working right now, from a survey of more than 10,000 sales professionals.",
    link: "#",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-24 lg:py-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Resources"
          title="Learn the craft"
          description="Guides, courses and research for running a better sales process."
          action={
            <ButtonLink href="#all-resources" variant="secondary" size="md">
              Browse all resources
            </ButtonLink>
          }
        />

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((r) => (
            <li key={r.title}>
              <Link
                href={r.link}
                className="group flex flex-col h-full rounded-2xl border border-line p-6 hover:border-ink-3 hover:shadow-[0_12px_32px_-16px_rgb(15_23_42/0.2)] transition-[border-color,box-shadow]"
              >
                <span className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-3">
                    <r.icon className="w-4 h-4 text-blue" /> {r.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </span>
                <span className="mt-8 block font-display text-xl font-bold leading-snug tracking-[-0.02em]">
                  {r.title}
                </span>
                <span className="block mt-2 text-sm text-ink-2 leading-relaxed">
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
