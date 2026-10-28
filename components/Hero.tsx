import Image from "next/image";
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
    <section className="relative isolate pt-16">
      {/* Background image panel, inset below the header. Its bottom padding is
          where the dashboard frame (pulled up with a negative margin) overlaps. */}
      <div className="relative isolate mx-2 sm:mx-3 overflow-hidden rounded-[28px] pt-20 sm:pt-28 pb-56 sm:pb-72 lg:pb-80">
        <Image
          src="/hero-road.jpg"
          alt=""
          fill
          fetchPriority="high"
          sizes="100vw"
          className="hero-bg -z-10 object-cover object-[50%_72%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[#06122b]/60 via-[#06122b]/35 to-[#06122b]/10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_45%_at_50%_38%,rgb(6_18_43/0.45),transparent)]" />

        <div className="max-w-3xl mx-auto px-4 text-center">
          <Link
            href="#automation"
            className="blur-rise inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-white/25 bg-white/10 backdrop-blur text-sm text-white hover:border-white/50 transition-colors"
          >
            <span className="px-2 py-0.5 rounded-full bg-white text-[#0a1120] text-xs font-semibold">
              Soon
            </span>
            Bulk email and automation
            <ArrowRight className="w-3.5 h-3.5 text-white/70" />
          </Link>

          <h1
            className="blur-rise mt-7 font-display text-[2.9rem] leading-[1] sm:text-7xl lg:text-[5.25rem] font-bold tracking-[-0.045em] text-white text-balance"
            style={{ animationDelay: "60ms" }}
          >
            Know where every deal stands.
          </h1>

          <p
            className="blur-rise mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl mx-auto text-pretty"
            style={{ animationDelay: "120ms" }}
          >
            crm360 puts your inbox, contacts, pipeline and follow-ups in one
            workspace, so your team spends the day selling instead of searching.
          </p>

          <div
            className="blur-rise mt-9 flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animationDelay: "180ms" }}
          >
            <ButtonLink href={SIGNUP_URL} variant="dark">Start free trial</ButtonLink>
            <ButtonLink href="#features" variant="ghost-night" className="backdrop-blur">
              See what&apos;s inside
            </ButtonLink>
          </div>
          <p className="blur-rise mt-4 text-sm text-white/70" style={{ animationDelay: "220ms" }}>
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="blur-rise-lg relative -mt-40 sm:-mt-56 lg:-mt-64"
          style={{ animationDelay: "320ms" }}
        >
          <div className="rounded-[22px] p-1.5 sm:p-2 bg-paper/60 border border-line backdrop-blur shadow-[0_30px_80px_-20px_rgb(6_18_43/0.45)]">
            <Image
              src="/dashboard-preview.png"
              alt="crm360 dashboard showing open deals, revenue, a pipeline revenue chart and recent contacts"
              width={1425}
              height={719}
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="w-full h-auto rounded-[14px] border border-line"
            />
          </div>
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
