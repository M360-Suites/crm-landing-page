import type { Metadata } from "next";
import { ProductDemo } from "@/components/product/ProductDemo";
import { groups } from "@/components/product/features";
import { AfterFeatures, PainPoints, SoonBadge, heroCopy } from "../_parts/Rest";

export const metadata: Metadata = { title: "Preview A", robots: { index: false } };

export default function PreviewA() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[620px] bg-mist -z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <a
              href="#features"
              className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-line bg-paper text-sm text-ink-2 hover:border-ink-3 transition-colors"
            >
              <span className="px-2 py-0.5 rounded-full bg-ink text-paper text-xs font-semibold">
                New
              </span>
              Bulk email, automation and templates are coming soon
            </a>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[5rem] font-bold tracking-[-0.035em] text-ink text-balance">
              {heroCopy.title}
            </h1>
            <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-xl mx-auto">
              {heroCopy.body}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
          <div className="mt-14 lg:mt-16">
            <ProductDemo />
          </div>
        </div>
      </section>

      <PainPoints />

      <section id="features" className="py-20 lg:py-28 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-deep">
              Features
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-[2.75rem] leading-[1.1] font-bold tracking-[-0.025em] text-ink text-balance">
              Nine tools your team would otherwise pay for separately.
            </h2>
            <p className="mt-5 text-lg text-ink-2 leading-relaxed">
              crm360 covers the whole customer journey, from first message to
              signed contract to the quarterly report.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {groups.map((g) => (
              <article
                key={g.title}
                className="rounded-2xl bg-paper border border-line p-6 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-ink">{g.title}</h3>
                  {g.soon && <SoonBadge />}
                </div>
                <p className="mt-2 text-ink-3 leading-relaxed">{g.summary}</p>
                <ul className="mt-6 grid sm:grid-cols-3 gap-5">
                  {g.features.map((f) => (
                    <li key={f.title}>
                      <f.icon className="w-5 h-5 text-blue" />
                      <h4 className="mt-3 font-semibold text-ink">{f.title}</h4>
                      <p className="mt-1 text-sm text-ink-2 leading-relaxed">{f.description}</p>
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
