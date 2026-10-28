import { Check, Mail, MessageCircle, Sparkles, Send, Zap, Users } from "lucide-react";

/* Small product crops, drawn from the same data as the hero preview. */

export function TalkPreview() {
  return (
    <div className="rounded-t-xl bg-paper border border-b-0 border-line shadow-sm h-full">
      {[
        { who: "Amara Okafor", text: "Signed copy attached. When can onboarding start?", icon: Mail },
        { who: "Leo Brandt", text: "Can we move the demo to Thursday afternoon?", icon: MessageCircle },
      ].map((t, i) => (
        <div key={t.who} className={`px-4 py-3 border-b border-line ${i === 0 ? "bg-ice/60" : ""}`}>
          <div className="flex items-center gap-2">
            <t.icon className="w-3.5 h-3.5 text-ink-3" />
            <span className="text-[13px] font-semibold text-ink">{t.who}</span>
          </div>
          <p className="mt-1 text-xs text-ink-3 truncate">{t.text}</p>
        </div>
      ))}
      <div className="px-4 py-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue text-white text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Use draft
        </span>
      </div>
    </div>
  );
}

export function PeoplePreview() {
  return (
    <div className="rounded-t-xl bg-paper border border-b-0 border-line shadow-sm h-full p-4">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-teal-soft text-teal text-sm font-bold grid place-items-center">
          AO
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">Amara Okafor</p>
          <p className="text-xs text-ink-3">Northwind Logistics</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-ice text-blue-deep font-medium">
          Onboarding package
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-mist text-ink-2 font-medium">
          Task: schedule kickoff
        </span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <dt className="text-ink-3">Last contact</dt>
          <dd className="mt-0.5 font-semibold text-ink">Today, 9:41</dd>
        </div>
        <div>
          <dt className="text-ink-3">Deal value</dt>
          <dd className="mt-0.5 font-semibold text-ink tabular-nums">$26,000</dd>
        </div>
      </dl>
    </div>
  );
}

export function ClosePreview() {
  const stages = [
    { name: "Lead", value: 16800, width: "w-[45%]" },
    { name: "Qualified", value: 18500, width: "w-[50%]" },
    { name: "Proposal", value: 7400, width: "w-[22%]" },
    { name: "Won", value: 35600, width: "w-[95%]", won: true },
  ];
  return (
    <div className="rounded-t-xl bg-paper border border-b-0 border-line shadow-sm h-full p-4">
      <p className="text-[13px] font-semibold text-ink">New business</p>
      <ul className="mt-3 space-y-2.5">
        {stages.map((s) => (
          <li key={s.name} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-2 text-xs">
            <span className={s.won ? "text-teal font-semibold" : "text-ink-3"}>{s.name}</span>
            <span className="h-2 rounded-full bg-mist">
              <span className={`block h-full rounded-full ${s.width} ${s.won ? "bg-teal" : "bg-blue"}`} />
            </span>
            <span className="tabular-nums text-ink-2 flex items-center gap-1">
              {s.won && <Check className="w-3 h-3 text-teal" strokeWidth={3} />}$
              {(s.value / 1000).toFixed(1)}k
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BulkPreview() {
  return (
    <div className="rounded-t-xl bg-paper border border-b-0 border-line shadow-sm h-full p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[13px] font-semibold text-ink">Q3 renewal reminder</p>
        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-teal-soft text-teal">
          Coming soon
        </span>
      </div>
      <p className="mt-2 inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-ice text-blue-deep font-medium">
        <Users className="w-3 h-3" /> 248 contacts
      </p>
      <ol className="mt-3 space-y-1.5 text-xs">
        <li className="flex items-center gap-2 text-ink">
          <Send className="w-3.5 h-3.5 text-teal" /> Send campaign, Tuesday 9:00
        </li>
        <li className="flex items-center gap-2 text-ink-2">
          <Zap className="w-3.5 h-3.5 text-blue" /> No reply in 3 days: send follow-up
        </li>
        <li className="flex items-center gap-2 text-ink-2">
          <Zap className="w-3.5 h-3.5 text-blue" /> Reply: move deal to Qualified
        </li>
      </ol>
    </div>
  );
}

export function GroupPreview({ kind }: { kind: "talk" | "people" | "close" | "bulk" }) {
  if (kind === "talk") return <TalkPreview />;
  if (kind === "people") return <PeoplePreview />;
  if (kind === "close") return <ClosePreview />;
  return <BulkPreview />;
}
