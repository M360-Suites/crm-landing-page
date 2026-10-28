import Link from "next/link";
import {
  ArrowRight,
  Inbox,
  Users,
  Building2,
  KanbanSquare,
  Calendar,
  FileText,
  Bot,
  BarChart3,
  PieChart,
} from "lucide-react";
import { ProductDemo } from "@/components/product/ProductDemo";
import { ButtonLink, SIGNUP_URL } from "@/components/shared/Button";

const modules = [
  { icon: Inbox, label: "Inbox" },
  { icon: Users, label: "Contacts" },
  { icon: Building2, label: "Companies" },
  { icon: KanbanSquare, label: "Pipelines" },
  { icon: Calendar, label: "Task & Calendar" },
  { icon: FileText, label: "Documents" },
  { icon: Bot, label: "AI Writer" },
  { icon: BarChart3, label: "Analytics" },
  { icon: PieChart, label: "Report" },
];

export function Hero() {
  return (
    <section className="relative isolate pt-28 sm:pt-36 overflow-hidden">
      <div aria-hidden className="grid-lines absolute inset-x-0 top-0 h-[880px] -z-10" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[420px] -z-10 h-[520px] w-[1100px] max-w-[140vw] -translate-x-1/2 rounded-full bg-blue/15 blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="#automation"
            className="rise inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-line bg-paper/80 backdrop-blur text-sm text-ink-2 hover:border-ink-3 transition-colors"
          >
            <span className="px-2 py-0.5 rounded-full bg-ink text-paper text-xs font-semibold">
              Soon
            </span>
            Bulk email and automation
            <ArrowRight className="w-3.5 h-3.5 text-ink-3" />
          </Link>

          <h1
            className="rise mt-7 font-display text-[2.9rem] leading-[1] sm:text-7xl lg:text-[5.25rem] font-bold tracking-[-0.045em] text-ink text-balance"
            style={{ animationDelay: "60ms" }}
          >
            Know where every deal stands.
          </h1>

          <p
            className="rise mt-6 text-lg sm:text-xl text-ink-2 leading-relaxed max-w-xl mx-auto text-pretty"
            style={{ animationDelay: "120ms" }}
          >
            crm360 puts your inbox, contacts, pipeline and follow-ups in one
            workspace, so your team spends the day selling instead of searching.
          </p>

          <div
            className="rise mt-9 flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animationDelay: "180ms" }}
          >
            <ButtonLink href={SIGNUP_URL}>Start free trial</ButtonLink>
            <ButtonLink href="#features" variant="secondary">
              See what&apos;s inside
            </ButtonLink>
          </div>
          <p className="rise mt-4 text-sm text-ink-3" style={{ animationDelay: "220ms" }}>
            14-day free trial. No credit card required.
          </p>
        </div>

        <div className="rise relative mt-16 lg:mt-20" style={{ animationDelay: "320ms" }}>
          <div className="rounded-[22px] p-1.5 sm:p-2 bg-paper/60 border border-line backdrop-blur">
            <ProductDemo hint={false} />
          </div>
          <p className="mt-4 text-center text-sm text-ink-3 hidden md:block">
            This is live. Pick Inbox, AI Writer or Bulk email in the sidebar.
          </p>
        </div>
      </div>

      {/* Stands in for a logo wall: what's in the box, honestly stated. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24">
        <p className="text-center text-sm font-medium text-ink-3">
          Nine tools in one workspace, one login, one bill
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {modules.map((m) => (
            <li key={m.label} className="flex items-center gap-2 text-ink-2">
              <m.icon className="w-4 h-4 text-ink-3" strokeWidth={2} />
              <span className="font-display text-[15px] font-semibold tracking-[-0.01em]">
                {m.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
