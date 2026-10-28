import type { Metadata } from "next";
import { ProductDemo } from "../_parts/ProductDemo";
import { groups } from "../_parts/features";
import { GroupPreview } from "../_parts/Crops";
import { AfterFeatures, PainPoints, SoonBadge, heroCopy } from "../_parts/Rest";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = { title: "Preview B", robots: { index: false } };

export default function PreviewB() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-bold tracking-[-0.035em] text-ink text-balance">
              {heroCopy.title}
            </h1>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">{heroCopy.body}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.crm360online.com/register"
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-[10px] bg-blue text-white font-semibold hover:bg-blue-deep transition-colors"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-[10px] border border-line bg-paper text-ink font-semibold hover:border-ink-3 transition-colors"
              >
                See what&apos;s inside
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-3">{heroCopy.note}</p>
          </div>
          <div className="lg:col-span-7 min-w-0">
            <div className="lg:w-[880px]">
              <ProductDemo hint={false} />
            </div>
          </div>
        </div>
      </section>

      <PainPoints />

      <section id="features" className="py-20 lg:py-28 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nine tools your team would otherwise pay for separately."
            description="crm360 covers the whole customer journey, from first message to signed contract to the quarterly report."
          />

          <div className="mt-16 space-y-20 lg:space-y-28">
            {groups.map((g, i) => (
              <article key={g.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.02em] text-ink">
                      {g.title}
                    </h3>
                    {g.soon && <SoonBadge />}
                  </div>
                  <p className="mt-3 text-lg text-ink-2 leading-relaxed">{g.summary}</p>
                  <ul className="mt-8 border-t border-line">
                    {g.features.map((f) => (
                      <li key={f.title} className="flex gap-4 py-5 border-b border-line">
                        <f.icon className="w-5 h-5 mt-0.5 shrink-0 text-blue" />
                        <div>
                          <h4 className="font-semibold text-ink">{f.title}</h4>
                          <p className="mt-1 text-sm text-ink-2 leading-relaxed">{f.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  aria-hidden
                  className="rounded-2xl bg-ice/60 border border-line px-8 pt-10 sm:px-12 h-72 sm:h-80 overflow-hidden"
                >
                  <div className="max-w-sm mx-auto h-full">
                    <GroupPreview kind={g.preview} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AfterFeatures />
    </>
  );
}
