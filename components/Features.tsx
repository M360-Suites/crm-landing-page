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
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  BubbleSticker,
  EnvelopeSticker,
  SparkleSticker,
  WonSticker,
} from "@/components/shared/Stickers";

type Art = "talk" | "people" | "close";

const groups: {
  art: Art;
  tile: string;
  title: string;
  summary: string;
  features: { title: string; description: string; icon: typeof Inbox }[];
}[] = [
  {
    art: "talk",
    tile: "bg-lilac",
    title: "Talk to customers",
    summary: "Every conversation and document in one place, with help writing the next message.",
    features: [
      {
        title: "Inbox",
        description: "Email, social and chat messages land in one shared inbox your whole team can work from.",
        icon: Inbox,
      },
      {
        title: "AI Writer",
        description: "Draft personal emails and follow-ups in seconds, based on what the customer actually said.",
        icon: Bot,
      },
      {
        title: "Documents",
        description: "Send proposals and contracts, then see when clients open and sign them.",
        icon: FileText,
      },
    ],
  },
  {
    art: "people",
    tile: "bg-sun",
    title: "Keep track of people",
    summary: "Know who you're dealing with and what you promised them.",
    features: [
      {
        title: "Contacts",
        description: "Profiles that fill in details from public sources, so you don't type them in.",
        icon: Users,
      },
      {
        title: "Companies",
        description: "Group contacts by account and map who reports to whom.",
        icon: Building2,
      },
      {
        title: "Task & Calendar",
        description: "Schedule meetings, set reminders and sync with Google or Outlook.",
        icon: Calendar,
      },
    ],
  },
  {
    art: "close",
    tile: "bg-mint",
    title: "Close and measure",
    summary: "See what's moving, what's stuck and what next quarter looks like.",
    features: [
      {
        title: "Pipelines",
        description: "Drag deals between stages you define. Each board shows the value at every step.",
        icon: KanbanSquare,
      },
      {
        title: "Analytics",
        description: "Track team performance, deal velocity and revenue forecasts as they change.",
        icon: BarChart3,
      },
      {
        title: "Report",
        description: "Scheduled reports that go to stakeholders without anyone building them by hand.",
        icon: PieChart,
      },
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nine tools your team would otherwise pay for separately."
          description="crm360 covers the whole customer journey, from first message to signed contract to the quarterly report."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-x-6 gap-y-14">
          {groups.map((group) => (
            <article key={group.title}>
              <div
                aria-hidden
                className={`relative aspect-[4/3] rounded-[2rem] border-[3px] border-on-color overflow-hidden ${group.tile}`}
              >
                {group.art === "talk" && <TalkArt />}
                {group.art === "people" && <PeopleArt />}
                {group.art === "close" && <CloseArt />}
              </div>
              <h3 className="mt-7 font-display text-3xl font-extrabold tracking-[-0.035em]">
                {group.title}
              </h3>
              <p className="mt-2 text-ink-2 leading-relaxed">{group.summary}</p>
              <ul className="mt-6 space-y-4">
                {group.features.map((f) => (
                  <li key={f.title} className="flex gap-3.5">
                    <f.icon className="w-5 h-5 mt-0.5 shrink-0 text-blue" strokeWidth={2.4} />
                    <p className="text-sm text-ink-2 leading-relaxed">
                      <span className="font-bold text-ink">{f.title}.</span>{" "}
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const INK = "var(--on-color)";

// Messages from everywhere arrive in one place, and the AI writes back.
function TalkArt() {
  return (
    <>
      <BubbleSticker className="absolute left-[12%] top-[18%] w-[52%] -rotate-6" />
      <EnvelopeSticker className="absolute right-[8%] top-[6%] w-[34%] rotate-12" />
      <SparkleSticker className="absolute right-[12%] bottom-[6%] w-[30%]" />
    </>
  );
}

// One account at the top, the people who work there below it.
function PeopleArt() {
  const people = [
    { x: 60, fill: "var(--bubble)" },
    { x: 160, fill: "var(--sky)" },
    { x: 260, fill: "var(--mint)" },
  ];
  return (
    <svg viewBox="0 0 320 240" className="absolute inset-0 w-full h-full">
      <path d="M160 96 V130 M60 130 H260 M60 130 V150 M160 130 V150 M260 130 V150" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="30" width="112" height="66" rx="16" fill="#ffffff" stroke={INK} strokeWidth="4" />
      <rect x="120" y="46" width="34" height="34" rx="8" fill="var(--blue)" stroke={INK} strokeWidth="3" />
      <rect x="164" y="50" width="38" height="8" rx="4" fill={INK} />
      <rect x="164" y="66" width="26" height="8" rx="4" fill={INK} opacity="0.35" />
      {people.map((p) => (
        <g key={p.x}>
          <circle cx={p.x} cy="182" r="32" fill={p.fill} stroke={INK} strokeWidth="4" />
          <circle cx={p.x - 10} cy="176" r="3.5" fill={INK} />
          <circle cx={p.x + 10} cy="176" r="3.5" fill={INK} />
          <path d={`M${p.x - 11} 190 q11 10 22 0`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

// A deal climbs the stages and lands on Won.
function CloseArt() {
  return (
    <>
      <svg viewBox="0 0 320 240" className="absolute inset-0 w-full h-full">
        <path
          d="M28 212 V176 H84 V140 H140 V104 H196 V68 H252 V212Z"
          fill="#ffffff"
          stroke={INK}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M84 176 V212 M140 140 V212 M196 104 V212" stroke={INK} strokeWidth="3" strokeDasharray="6 7" />
        {[
          { x: 56, y: 196 },
          { x: 112, y: 160 },
          { x: 168, y: 124 },
        ].map((d) => (
          <circle key={d.x} cx={d.x} cy={d.y} r="9" fill="var(--blue)" stroke={INK} strokeWidth="3" />
        ))}
      </svg>
      <WonSticker className="absolute right-[4%] top-[4%] w-[30%] rotate-12" />
    </>
  );
}
