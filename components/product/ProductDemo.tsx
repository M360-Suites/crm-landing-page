"use client";

import React, { useEffect, useState } from "react";
import { motion, LayoutGroup, useReducedMotion } from "framer-motion";
import {
  Inbox,
  Users,
  Building2,
  KanbanSquare,
  Calendar,
  FileText,
  Bot,
  BarChart3,
  PieChart,
  Search,
  Bell,
  Check,
  Mail,
  MessageCircle,
  Sparkles,
  Send,
  Zap,
  LayoutTemplate,
  Users as UsersIcon,
} from "lucide-react";

type View = "pipelines" | "inbox" | "writer" | "bulk";

const modules: { icon: typeof Inbox; label: string; view?: View; soon?: boolean }[] = [
  { icon: Inbox, label: "Inbox", view: "inbox" as View },
  { icon: Send, label: "Bulk email", view: "bulk" as View, soon: true },
  { icon: Users, label: "Contacts" },
  { icon: Building2, label: "Companies" },
  { icon: KanbanSquare, label: "Pipelines", view: "pipelines" as View },
  { icon: Calendar, label: "Task & Calendar" },
  { icon: FileText, label: "Documents" },
  { icon: Bot, label: "AI Writer", view: "writer" as View },
  { icon: BarChart3, label: "Analytics" },
  { icon: PieChart, label: "Report" },
];

const tabs: { view: View; label: string }[] = [
  { view: "pipelines", label: "Pipeline" },
  { view: "inbox", label: "Inbox" },
  { view: "writer", label: "AI Writer" },
  { view: "bulk", label: "Bulk email" },
];

export function ProductDemo({ hint = true }: { hint?: boolean }) {
  const [view, setView] = useState<View>("pipelines");

  return (
    <>
        <div>
          <div
            role="tablist"
            aria-label="Product preview"
            className="flex gap-1 mb-3 md:hidden"
          >
            {tabs.map((t) => (
              <button
                key={t.view}
                role="tab"
                aria-selected={view === t.view}
                onClick={() => setView(t.view)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  view === t.view
                    ? "bg-ink text-paper"
                    : "text-ink-2 hover:bg-mist"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-paper shadow-[0_1px_0_var(--line),0_30px_60px_-30px_rgb(15_23_42/0.25)] overflow-hidden">
          <div aria-hidden className="h-9 border-b border-line bg-sidebar flex items-center gap-1.5 px-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="mx-auto -translate-x-6 text-[11px] text-ink-3 tracking-wide">
              app.crm360online.com
            </span>
          </div>
          <div className="flex h-[400px] md:h-[460px]">
            <aside className="w-56 shrink-0 bg-sidebar border-r border-line hidden md:flex flex-col p-3">
              <div className="flex items-center gap-2 px-2 py-2 mb-4">
                <span className="w-6 h-6 rounded-md bg-clay text-white text-[11px] font-bold grid place-items-center">
                  A
                </span>
                <span className="text-sm font-semibold text-ink">
                  Acme Sales
                </span>
              </div>
              <nav aria-label="Product preview" className="space-y-0.5">
                {modules.map((m) => {
                  const active = m.view === view;
                  const Comp = m.view ? "button" : "div";
                  return (
                    <Comp
                      key={m.label}
                      {...(m.view
                        ? {
                            onClick: () => setView(m.view!),
                            "aria-pressed": active,
                          }
                        : {})}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-left transition-colors ${
                        active
                          ? "bg-ice text-blue-deep font-semibold"
                          : m.view
                            ? "text-ink-2 hover:bg-mist cursor-pointer"
                            : "text-ink-3"
                      }`}
                    >
                      <m.icon className="w-4 h-4" />
                      {m.label}
                      {m.soon ? (
                        <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded bg-teal-soft text-teal">
                          Soon
                        </span>
                      ) : (
                        m.view && !active && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue/60" />
                        )
                      )}
                    </Comp>
                  );
                })}
              </nav>
            </aside>

            <div className="flex-1 min-w-0 flex flex-col">
              <div className="h-14 shrink-0 border-b border-line flex items-center gap-3 px-4">
                <div className="flex items-center gap-2 flex-1 max-w-xs h-9 px-3 rounded-lg bg-mist text-ink-3 text-sm">
                  <Search className="w-4 h-4" />
                  <span className="truncate">Search deals, people, notes</span>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <Bell className="w-4 h-4 text-ink-3" />
                  <span className="w-8 h-8 rounded-full bg-teal-soft text-teal text-xs font-bold grid place-items-center">
                    TO
                  </span>
                </div>
              </div>
              <div className="flex-1 min-h-0 bg-paper">
                {view === "pipelines" && <PipelineView />}
                {view === "inbox" && <InboxView />}
                {view === "writer" && <WriterView />}
                {view === "bulk" && <BulkView />}
              </div>
            </div>
          </div>
          </div>
          {hint &&<p className="mt-3 text-sm text-ink-3 hidden md:block">
            Try it: pick Inbox, Pipelines, AI Writer or Bulk email in the sidebar.
          </p>}
        </div>
    </>
  );
}

/* ─── Pipeline ─────────────────────────────────────────────────────────── */

type Deal = { id: string; name: string; company: string; value: number };

const stages = ["Lead", "Qualified", "Proposal", "Won"] as const;
type Stage = (typeof stages)[number];

const initialBoard: Record<Stage, Deal[]> = {
  Lead: [
    { id: "d1", name: "Website rebuild", company: "Brightline Studio", value: 4800 },
    { id: "d2", name: "Annual licence", company: "Kora Foods", value: 12000 },
  ],
  Qualified: [
    { id: "d3", name: "Fleet tracking", company: "Halden Freight", value: 18500 },
  ],
  Proposal: [
    { id: "d4", name: "Onboarding package", company: "Northwind Logistics", value: 26000 },
    { id: "d5", name: "Support renewal", company: "Paloma Health", value: 7400 },
  ],
  Won: [{ id: "d6", name: "Team expansion", company: "Juniper & Co", value: 9600 }],
};

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function PipelineView() {
  const reduce = useReducedMotion();
  const [board, setBoard] = useState(initialBoard);
  const [justWon, setJustWon] = useState<string | null>(null);

  // The one choreographed moment on the page: a deal closes.
  useEffect(() => {
    const t = setTimeout(
      () => {
        setBoard((b) => {
          const deal = b.Proposal.find((d) => d.id === "d4");
          if (!deal) return b;
          return {
            ...b,
            Proposal: b.Proposal.filter((d) => d.id !== "d4"),
            Won: [deal, ...b.Won],
          };
        });
        setJustWon("d4");
      },
      reduce ? 0 : 1400,
    );
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 pt-4 pb-3 flex items-center justify-between">
        <h2 className="font-display text-base font-semibold text-ink">
          New business
        </h2>
        <span className="text-xs text-ink-3">6 open deals</span>
      </div>
      <LayoutGroup>
        <div className="flex-1 min-h-0 grid grid-cols-2 lg:grid-cols-4 items-start gap-3 px-4 pb-4 overflow-hidden">
          {stages.map((stage) => {
            const deals = board[stage];
            const total = deals.reduce((s, d) => s + d.value, 0);
            const won = stage === "Won";
            return (
              <div
                key={stage}
                className={`rounded-xl p-2.5 flex flex-col gap-2 ${
                  won ? "bg-teal-soft/60" : "bg-mist"
                } ${stage === "Lead" || stage === "Qualified" ? "hidden lg:flex" : ""}`}
              >
                <div className="flex items-baseline justify-between px-1 pt-0.5">
                  <span className={`text-[13px] font-semibold ${won ? "text-teal" : "text-ink"}`}>
                    {stage}
                    <span className="ml-1.5 font-normal text-ink-3">{deals.length}</span>
                  </span>
                  <motion.span
                    key={total}
                    initial={reduce ? false : { opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs tabular-nums text-ink-3"
                  >
                    {money(total)}
                  </motion.span>
                </div>
                {deals.map((d) => (
                  <motion.div
                    key={d.id}
                    layoutId={d.id}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    className={`rounded-lg bg-paper border p-3 ${
                      justWon === d.id ? "border-teal" : "border-line"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-semibold text-ink leading-snug">
                        {d.name}
                      </p>
                      {justWon === d.id && (
                        <motion.span
                          initial={reduce ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.35 }}
                          className="w-5 h-5 shrink-0 rounded-full bg-teal text-white grid place-items-center"
                        >
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </motion.span>
                      )}
                    </div>
                    <p className="text-xs text-ink-3 mt-0.5">{d.company}</p>
                    <p className="text-xs font-semibold text-ink-2 mt-2.5 tabular-nums">
                      {money(d.value)}
                    </p>
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}

/* ─── Inbox ────────────────────────────────────────────────────────────── */

const threads = [
  {
    who: "Amara Okafor",
    company: "Northwind Logistics",
    channel: Mail,
    preview: "Signed copy attached. When can onboarding start?",
    time: "9:41",
    unread: true,
  },
  {
    who: "Leo Brandt",
    company: "Halden Freight",
    channel: MessageCircle,
    preview: "Can we move the demo to Thursday afternoon?",
    time: "9:12",
    unread: true,
  },
  {
    who: "Priya Nair",
    company: "Paloma Health",
    channel: Mail,
    preview: "Thanks for the renewal quote, sharing with finance today.",
    time: "Yesterday",
  },
  {
    who: "Sam Whitlock",
    company: "Kora Foods",
    channel: MessageCircle,
    preview: "Who should I loop in from our ops team?",
    time: "Yesterday",
  },
];

function InboxView() {
  return (
    <div className="h-full grid md:grid-cols-[minmax(0,320px)_1fr]">
      <ul className="border-r border-line overflow-hidden">
        {threads.map((t, i) => (
          <li
            key={t.who}
            className={`px-4 py-3 border-b border-line ${i === 0 ? "bg-ice/60" : ""}`}
          >
            <div className="flex items-center gap-2">
              <t.channel className="w-3.5 h-3.5 text-ink-3 shrink-0" />
              <span className={`text-[13px] text-ink truncate ${t.unread ? "font-semibold" : ""}`}>
                {t.who}
              </span>
              <span className="ml-auto text-[11px] text-ink-3 shrink-0">{t.time}</span>
            </div>
            <p className="text-xs text-ink-3 mt-1 truncate">{t.preview}</p>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex flex-col p-6">
        <p className="text-sm font-semibold text-ink">Amara Okafor</p>
        <p className="text-xs text-ink-3">
          Northwind Logistics. Deal: Onboarding package, {money(26000)}
        </p>
        <div className="mt-6 max-w-md rounded-xl bg-mist p-4 text-sm text-ink-2 leading-relaxed">
          Hi Tobi, signed copy attached. When can onboarding start? Our team is
          free most mornings next week.
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-teal-soft text-teal font-medium">
            Deal moved to Won
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-ice text-blue-deep font-medium">
            Task: schedule kickoff
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── AI Writer ────────────────────────────────────────────────────────── */

function WriterView() {
  const reduce = useReducedMotion();
  const draft =
    "Hi Leo, Thursday at 2pm works. I'll bring the fleet tracking numbers we discussed, including the cost per vehicle for your 40-truck rollout. Talk soon, Tobi";
  return (
    <div className="h-full p-6 flex flex-col gap-4 max-w-2xl">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-ink-3">Writing to Leo Brandt using</span>
        {["Last 3 emails", "Fleet tracking deal", "Demo notes"].map((c) => (
          <span key={c} className="px-2.5 py-1 rounded-full border border-line text-ink-2">
            {c}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-line p-4 flex-1 min-h-0">
        <p className="text-xs text-ink-3 mb-3">Re: Demo time</p>
        <motion.p
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-sm text-ink leading-relaxed"
        >
          {draft}
        </motion.p>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue text-white text-sm font-semibold">
          <Sparkles className="w-4 h-4" /> Use draft
        </span>
        <span className="px-3 py-2 rounded-lg border border-line text-sm text-ink-2">
          Make it shorter
        </span>
      </div>
    </div>
  );
}

/* ─── Bulk email (coming soon) ─────────────────────────────────────────── */

function BulkView() {
  const steps = [
    { icon: Send, title: "Send campaign", detail: "Tuesday, 9:00", done: true },
    { icon: Zap, title: "If no reply after 3 days", detail: "Send follow-up template" },
    { icon: KanbanSquare, title: "If they reply", detail: "Move deal to Qualified" },
  ];
  return (
    <div className="h-full grid md:grid-cols-[minmax(0,1fr)_260px]">
      <div className="p-5 flex flex-col gap-3 min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-base font-semibold text-ink">Q3 renewal reminder</h2>
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-teal-soft text-teal">
            Coming soon
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ice text-blue-deep font-medium">
            <UsersIcon className="w-3.5 h-3.5" /> 248 contacts in Renewals due
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-line text-ink-2">
            <LayoutTemplate className="w-3.5 h-3.5" /> Template: Renewal check-in
          </span>
        </div>
        <div className="rounded-xl border border-line p-4 flex-1 min-h-0 text-sm leading-relaxed">
          <p className="text-xs text-ink-3">Subject: Your plan renews next month</p>
          <p className="mt-3 text-ink">
            Hi <span className="px-1 rounded bg-ice text-blue-deep">{"{first_name}"}</span>, your{" "}
            <span className="px-1 rounded bg-ice text-blue-deep">{"{company}"}</span> plan renews
            on 1 October. Reply to this email if you&apos;d like to change seats before then.
          </p>
        </div>
      </div>
      <div className="hidden md:block border-l border-line bg-sidebar p-4">
        <p className="text-xs font-semibold text-ink-3 uppercase tracking-[0.14em]">Automation</p>
        <ol className="mt-3 space-y-2">
          {steps.map((st) => (
            <li key={st.title} className="rounded-lg border border-line bg-paper p-3">
              <div className="flex items-center gap-2">
                <st.icon className={`w-3.5 h-3.5 ${st.done ? "text-teal" : "text-blue"}`} />
                <span className="text-[13px] font-semibold text-ink">{st.title}</span>
              </div>
              <p className="mt-1 text-xs text-ink-3">{st.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
