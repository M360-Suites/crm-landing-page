import { Check, Send, Zap, LayoutTemplate, MailOpen, GitBranch, KanbanSquare, Clock } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SoonBadge } from "@/components/shared/SoonBadge";

const rules = [
  {
    icon: Send,
    title: "Bulk email",
    body: "Send one email to hundreds of contacts, with each person's name and company filled in.",
  },
  {
    icon: Zap,
    title: "Automation",
    body: "Set rules that send follow-ups, move deals and assign tasks when a contact replies or goes quiet.",
  },
  {
    icon: LayoutTemplate,
    title: "Email templates",
    body: "Save the emails your team sends most and reuse them in one click.",
  },
];

export function Automation() {
  return (
    <section id="automation" className="py-24 lg:py-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeader
            eyebrow={
              <span className="inline-flex items-center gap-2">
                Automation <SoonBadge />
              </span>
            }
            title="Follow-ups that send themselves."
            description="Email a whole segment at once, then let crm360 decide what happens next based on who replies and who goes quiet."
          />
          <ul className="mt-10 border-t border-line">
            {rules.map((r) => (
              <li key={r.title} className="flex gap-4 py-5 border-b border-line">
                <r.icon className="w-5 h-5 mt-0.5 shrink-0 text-blue" strokeWidth={2.2} />
                <p className="text-ink-2 leading-relaxed">
                  <span className="font-semibold text-ink">{r.title}.</span> {r.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Workflow />
      </div>
    </section>
  );
}

function Node({
  icon: Icon,
  kind,
  title,
  detail,
  delay,
  compact = false,
  className = "",
}: {
  icon: typeof Send;
  kind: string;
  title: string;
  detail: string;
  delay: number;
  /** Side-by-side branch nodes: drop the kind chip on phones so the title has room */
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-full max-w-[290px] rounded-xl border border-line bg-paper p-3.5 shadow-[0_1px_2px_rgb(15_23_42/0.06)] ${className}`}>
      <span
        className="pop absolute -top-2.5 right-3 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-teal-soft text-teal text-[10px] font-semibold"
        style={{ animationDelay: `${delay}ms` }}
      >
        <Check className="w-2.5 h-2.5" strokeWidth={3} /> Done
      </span>
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 shrink-0 rounded-md bg-ice text-blue-deep grid place-items-center">
          <Icon className="w-3.5 h-3.5" />
        </span>
        <span className="min-w-0 text-[13px] leading-tight font-semibold text-ink">{title}</span>
        <span className={`ml-auto shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded border border-line text-ink-3 ${compact ? "hidden sm:inline" : ""}`}>
          {kind}
        </span>
      </div>
      <p className="mt-2 text-xs text-ink-3">{detail}</p>
    </div>
  );
}

const Line = () => <span aria-hidden className="block w-px h-7 bg-line mx-auto" />;

function Workflow() {
  return (
    <div
      role="img"
      aria-label="Example automation: when a campaign is sent and a contact replies, the deal moves to Qualified; if they don't reply in three days, a follow-up is sent."
      className="dots relative rounded-3xl border border-line bg-sidebar p-6 sm:p-10"
    >
      <div className="flex flex-col items-center">
        <Node icon={Send} kind="Trigger" title="Campaign sent" detail="Q3 renewal reminder, 248 contacts" delay={200} />
        <Line />
        <Node icon={GitBranch} kind="Condition" title="Did they reply?" detail="Check after 3 days" delay={700} />

        {/* The fork */}
        <svg aria-hidden viewBox="0 0 200 40" className="w-[60%] h-10 text-line" preserveAspectRatio="none">
          <path d="M100 0 V14 Q100 20 94 20 H20 Q14 20 14 26 V40 M100 14 Q100 20 106 20 H180 Q186 20 186 26 V40" fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-paper border border-line text-ink-2">Replied</span>
            <Node icon={KanbanSquare} kind="Action" title="Move to Qualified" detail="Assign to deal owner" delay={1200} compact />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-paper border border-line text-ink-2">No reply</span>
            <Node icon={MailOpen} kind="Action" title="Send follow-up" detail="Template: Renewal check-in" delay={1500} compact />
          </div>
        </div>
      </div>
      <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-ink-3">
        <Clock className="w-3.5 h-3.5" /> Runs on its own, every time
      </p>
    </div>
  );
}
