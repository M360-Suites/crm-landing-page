import { CalendarSync, Sparkles, FileSignature, ShieldCheck, Plug, CalendarClock } from "lucide-react";

// Each item restates a capability already promised elsewhere on the page.
const items = [
  {
    icon: CalendarSync,
    title: "Calendar sync",
    body: "Meetings and reminders stay in step with Google or Outlook.",
  },
  {
    icon: Sparkles,
    title: "Automatic enrichment",
    body: "Contact profiles fill in from public sources, so nobody types them in.",
  },
  {
    icon: FileSignature,
    title: "Document tracking",
    body: "See the moment a client opens a proposal, and when they sign it.",
  },
  {
    icon: ShieldCheck,
    title: "Roles and permissions",
    body: "Decide who can see and edit each pipeline, team by team.",
  },
  {
    icon: Plug,
    title: "Custom integrations",
    body: "Connect crm360 to the rest of your stack through the API.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled reports",
    body: "Reports land in stakeholders' inboxes without anyone building them.",
  },
];

export function MoreFeatures() {
  return (
    <section className="px-3 sm:px-4">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-night text-night-ink py-24 lg:py-32">
        <div aria-hidden className="grid-lines-night absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-display text-[2.25rem] md:text-5xl leading-[1.04] font-bold tracking-[-0.035em] text-balance">
            <span className="text-night-ink-3">And the details</span> that
            make it stick.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-night-ink-3 leading-relaxed">
            The small things that decide whether a team keeps using a CRM after
            the first month.
          </p>

          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((it) => (
              <li
                key={it.title}
                className="rounded-2xl border border-night-line bg-night-2/70 p-6 transition-colors hover:border-night-ink-3/50"
              >
                <span className="w-10 h-10 rounded-xl border border-night-line bg-night grid place-items-center text-[#5ab6ff]">
                  <it.icon className="w-5 h-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-semibold text-[17px]">{it.title}</h3>
                <p className="mt-1.5 text-sm text-night-ink-3 leading-relaxed">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
