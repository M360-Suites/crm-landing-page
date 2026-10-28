import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/Button";

const tiers = [
  {
    name: "Starter",
    seats: "Up to 5 users",
    description: "For small teams setting up their first CRM.",
    includesLabel: "Includes",
    features: ["Basic inbox integration", "Pipeline management", "AI Writer", "Documents", "Standard support"],
    highlighted: false,
  },
  {
    name: "Professional",
    seats: "Up to 20 users",
    description: "For growing sales teams that need deeper reporting.",
    includesLabel: "Everything in Starter, plus",
    features: ["Advanced analytics", "Custom workflows", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    seats: "Unlimited users",
    description: "For large organizations with complex sales processes.",
    includesLabel: "Everything in Professional, plus",
    features: ["Dedicated account manager", "Custom integrations", "Advanced security", "24/7 phone support"],
    highlighted: false,
  },
];

const salesHref = (plan: string) =>
  `mailto:support@crm360online.com?subject=${encodeURIComponent(`crm360 ${plan} plan quote`)}`;

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-mist text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Pricing"
          title="A plan built around your team, not a price list."
          description="Every plan is priced to your team size and needs. Talk to sales and we'll put together a quote."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl bg-paper p-7 lg:p-8 flex flex-col ${
                tier.highlighted
                  ? "border-2 border-blue shadow-[0_24px_48px_-24px_rgb(0_118_214/0.35)]"
                  : "border border-line"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-ink-2">{tier.name}</h3>
                {tier.highlighted && (
                  <span className="px-2.5 py-1 rounded-full bg-blue text-white text-xs font-semibold">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-5 font-display text-[2rem] font-bold tracking-[-0.035em]">
                {tier.seats}
              </p>
              <p className="mt-2 text-sm text-ink-3 leading-relaxed md:min-h-[2.75rem]">{tier.description}</p>

              <ButtonLink
                href={salesHref(tier.name)}
                variant={tier.highlighted ? "primary" : "secondary"}
                className="mt-7 w-full"
              >
                Contact sales
              </ButtonLink>

              <p className="mt-8 pt-6 border-t border-line text-sm font-semibold">
                {tier.includesLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-blue" strokeWidth={2.6} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
