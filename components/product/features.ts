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
  Send,
  Zap,
  LayoutTemplate,
} from "lucide-react";

export type Preview = "talk" | "people" | "close" | "bulk";

export const groups: {
  preview: Preview;
  title: string;
  summary: string;
  soon?: boolean;
  features: { title: string; description: string; icon: typeof Inbox }[];
}[] = [
  {
    preview: "talk",
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
    preview: "people",
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
    preview: "close",
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
        description: "Dashboards for team performance, deal velocity and revenue forecasts.",
        icon: BarChart3,
      },
      {
        title: "Report",
        description: "Scheduled reports that go to stakeholders without anyone building them by hand.",
        icon: PieChart,
      },
    ],
  },
  {
    preview: "bulk",
    title: "Reach customers at scale",
    summary: "Email a whole segment at once and let follow-ups run on their own.",
    soon: true,
    features: [
      {
        title: "Bulk email",
        description: "Send one email to hundreds of contacts, with each person's name and company filled in.",
        icon: Send,
      },
      {
        title: "Automation",
        description: "Set rules that send follow-ups, move deals and assign tasks when a contact replies or goes quiet.",
        icon: Zap,
      },
      {
        title: "Email templates",
        description: "Save the emails your team sends most and reuse them in one click.",
        icon: LayoutTemplate,
      },
    ],
  },
];

