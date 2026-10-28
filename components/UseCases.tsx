import { SectionHeader } from "@/components/shared/SectionHeader";
import { SmileySticker, DealSticker } from "@/components/shared/Stickers";

const audiences = [
  {
    title: "For small and medium businesses",
    description:
      "Move off spreadsheets and look bigger than you are, with follow-ups that run on their own.",
    points: [
      "Set up in minutes, not months",
      "Automatic follow-ups",
      "One inbox for every conversation",
      "Simple, transparent pricing",
    ],
    block: "bg-sun",
    Sticker: SmileySticker,
  },
  {
    title: "For enterprise organizations",
    description:
      "Break down silos between departments and forecast revenue from one source of truth.",
    points: [
      "Detailed roles and permissions",
      "Custom API integrations",
      "A dedicated account manager",
      "SOC 2 Type II compliance",
    ],
    block: "bg-bubble",
    Sticker: DealSticker,
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="pb-24 lg:pb-32 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="From your first hundred customers to your hundredth sales rep." />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {audiences.map(({ title, description, points, block, Sticker }) => (
            <div
              key={title}
              className={`relative rounded-[2rem] border-[3px] border-on-color p-8 lg:p-10 text-on-color ${block}`}
            >
              <Sticker className="absolute -top-8 right-6 w-20 lg:w-24 rotate-12" />
              <h3 className="max-w-[16ch] font-display text-3xl lg:text-4xl font-extrabold leading-[1.02] tracking-[-0.04em]">
                {title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed opacity-80">{description}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {points.map((p) => (
                  <li
                    key={p}
                    className="px-4 py-2 rounded-full bg-white border-2 border-on-color text-sm font-semibold"
                  >
                    {p}
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
