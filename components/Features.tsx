import { groups } from "@/components/product/features";
import { GroupPreview } from "@/components/product/Crops";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SoonBadge } from "@/components/shared/SoonBadge";

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-mist text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Features"
          title="Nine tools your team would otherwise pay for separately."
          description="crm360 covers the whole customer journey, from first message to signed contract to the quarterly report."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {groups.map((group) => (
            <article
              key={group.title}
              className="group rounded-3xl bg-paper border border-line overflow-hidden flex flex-col"
            >
              <div
                aria-hidden
                className="dots relative h-60 px-8 sm:px-12 pt-10 overflow-hidden border-b border-line bg-sidebar"
              >
                <div className="h-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                  <GroupPreview kind={group.preview} />
                </div>
              </div>
              <div className="p-7 sm:p-8 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">
                    {group.title}
                  </h3>
                  {group.soon && <SoonBadge />}
                </div>
                <p className="mt-2 text-ink-2 leading-relaxed">{group.summary}</p>
                <ul className="mt-6 grid gap-4">
                  {group.features.map((f) => (
                    <li key={f.title} className="flex gap-3.5">
                      <span className="w-8 h-8 shrink-0 rounded-lg bg-ice text-blue-deep grid place-items-center">
                        <f.icon className="w-4 h-4" strokeWidth={2.2} />
                      </span>
                      <p className="text-sm text-ink-2 leading-relaxed">
                        <span className="block font-semibold text-ink">{f.title}</span>
                        {f.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
