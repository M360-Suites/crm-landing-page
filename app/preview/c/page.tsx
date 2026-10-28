import type { Metadata } from "next";
import { ProductDemo } from "../_parts/ProductDemo";
import { groups } from "../_parts/features";
import { AfterFeatures, PainPoints, heroCopy } from "../_parts/Rest";

export const metadata: Metadata = { title: "Preview C", robots: { index: false } };

export default function PreviewC() {
  return (
    <>
      <section className="pt-20 px-3 sm:px-4">
        <div className="rounded-3xl bg-ink text-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 lg:pt-24">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <h1 className="lg:col-span-7 font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.75rem] font-bold tracking-[-0.035em] text-paper text-balance">
                {heroCopy.title}
              </h1>
              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-lg text-paper/75 leading-relaxed max-w-md">{heroCopy.body}</p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://app.crm360online.com/register"
                    className="inline-flex justify-center items-center px-6 py-3.5 rounded-[10px] bg-blue text-white font-semibold hover:bg-blue-deep transition-colors"
                  >
                    Start free trial
                  </a>
                  <a
                    href="#features"
                    className="inline-flex justify-center items-center px-6 py-3.5 rounded-[10px] border border-paper/25 text-paper font-semibold hover:border-paper/60 transition-colors"
                  >
                    See what&apos;s inside
                  </a>
                </div>
                <p className="mt-4 text-sm text-paper/60">{heroCopy.note}</p>
              </div>
            </div>
            <div className="mt-14 lg:mt-16 -mb-24 sm:-mb-28">
              <ProductDemo hint={false} />
            </div>
          </div>
        </div>
        <div className="h-28 sm:h-32" />
      </section>

      <PainPoints />

      <section id="features" className="py-20 lg:py-28 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Features</p>
            <h2 className="mt-4 font-display text-3xl md:text-[2.75rem] leading-[1.1] font-bold tracking-[-0.025em] text-paper text-balance">
              Nine tools your team would otherwise pay for separately.
            </h2>
            <p className="mt-5 text-lg text-paper/70 leading-relaxed">
              crm360 covers the whole customer journey, from first message to
              signed contract to the quarterly report.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {groups.map((g) => (
              <article
                key={g.title}
                className="rounded-2xl bg-paper/5 border border-paper/10 p-6 flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-paper">{g.title}</h3>
                  {g.soon && (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal/20 text-teal">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-paper/60 leading-relaxed">{g.summary}</p>
                <ul className="mt-6 pt-6 border-t border-paper/10 space-y-5">
                  {g.features.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <f.icon className="w-5 h-5 mt-0.5 shrink-0 text-blue" />
                      <div>
                        <h4 className="font-semibold text-paper">{f.title}</h4>
                        <p className="mt-1 text-sm text-paper/60 leading-relaxed">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AfterFeatures />
    </>
  );
}
