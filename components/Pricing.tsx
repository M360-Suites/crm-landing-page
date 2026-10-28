import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const tiers = [
  {
    name: "Starter",
    description: "For small teams setting up their first CRM.",
    features: ["Up to 5 users", "Basic inbox integration", "Pipeline management", "AI Writer", "Documents", "Standard support"],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing sales teams that need deeper reporting.",
    features: ["Up to 20 users", "Advanced analytics", "AI Writer", "Documents", "Custom workflows", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex sales processes.",
    features: ["Unlimited users", "Dedicated account manager", "Custom integrations", "Advanced security", "24/7 phone support"],
    highlighted: false,
  },
];

const salesHref = (plan: string) =>
  `mailto:support@crm360online.com?subject=${encodeURIComponent(`crm360 ${plan} plan quote`)}`;

export function Pricing() {
  return (
    <section id="pricing" className="px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-lilac text-on-color border-[3px] border-on-color px-5 py-14 sm:px-12 lg:px-16 lg:py-20">
        <SectionHeader
          title="A plan built around your team, not a price list."
          description={
            <>
              Every plan is priced to your team size and needs. Talk to sales and
              we&apos;ll put together a quote.
            </>
          }
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier) => {
            const [seats, ...rest] = tier.features;
            return (
              <div
                key={tier.name}
                className={`relative rounded-[2rem] border-[3px] border-on-color p-7 flex flex-col ${
                  tier.highlighted
                    ? "bg-blue text-white md:-translate-y-4 shadow-[0_8px_0_var(--on-color)]"
                    : "bg-white text-on-color"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-4 right-6 rotate-6 px-3.5 py-1.5 rounded-full bg-sun text-on-color border-2 border-on-color text-sm font-bold">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                <p className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em]">
                  {seats}
                </p>
                <p className="mt-2 text-sm opacity-75 min-h-10">{tier.description}</p>

                <a
                  href={salesHref(tier.name)}
                  className={`mt-6 w-full py-3.5 rounded-full text-center font-bold border-[3px] border-on-color transition-colors ${
                    tier.highlighted
                      ? "bg-sun text-on-color hover:bg-white"
                      : "bg-white text-on-color hover:bg-sun"
                  }`}
                >
                  Contact sales
                </a>

                <ul className="mt-7 pt-6 border-t-2 border-current/15 space-y-3">
                  {rest.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
