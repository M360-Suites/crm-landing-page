"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BubbleSticker,
  CalendarSticker,
  DealSticker,
  EnvelopeSticker,
  SmileySticker,
  SparkleSticker,
  WonSticker,
} from "@/components/shared/Stickers";

const modules = [
  "Inbox",
  "Contacts",
  "Companies",
  "Pipelines",
  "Task & Calendar",
  "Documents",
  "AI Writer",
  "Analytics",
  "Report",
];

// Positions are tuned so stickers frame the headline without covering it.
const stickers = [
  { Comp: EnvelopeSticker, label: "New email", rotate: -12, className: "left-[3%] top-[2%] w-16 sm:w-28 lg:left-[6%] lg:top-[12%] lg:w-36" },
  { Comp: BubbleSticker, label: "Reply", rotate: 10, className: "right-[3%] top-[1%] w-16 sm:w-28 lg:right-[7%] lg:top-[8%] lg:w-36" },
  { Comp: WonSticker, label: "Deal won", rotate: 8, className: "hidden sm:block left-[4%] top-[46%] w-24 lg:left-[2%] lg:w-32" },
  { Comp: CalendarSticker, label: "Meeting", rotate: -8, className: "hidden sm:block right-[2%] top-[44%] w-24 lg:right-[3%] lg:w-32" },
  { Comp: SmileySticker, label: "Happy customer", rotate: -6, className: "left-[6%] bottom-[1%] w-14 sm:w-24 lg:left-[14%] lg:bottom-[6%] lg:w-28" },
  { Comp: DealSticker, label: "Deal value", rotate: 14, className: "right-[6%] bottom-[1%] w-14 sm:w-24 lg:right-[15%] lg:bottom-[4%] lg:w-28" },
  { Comp: SparkleSticker, label: "AI draft", rotate: 0, className: "hidden lg:block left-[30%] bottom-[-2%] w-20" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const area = useRef<HTMLDivElement>(null);
  const instant = { duration: 0 };

  return (
    <section className="relative pt-24 lg:pt-28 overflow-hidden">
      <div ref={area} className="relative max-w-[90rem] mx-auto min-h-[640px] sm:min-h-[680px] lg:min-h-[760px] flex items-center">
        {/* The page's one orchestrated moment: stickers land, then they're yours to move. */}
        {stickers.map(({ Comp, label, rotate, className }, i) => (
          <motion.div
            key={label}
            drag
            dragConstraints={area}
            dragElastic={0.15}
            whileHover={{ scale: 1.06, rotate: rotate + 4 }}
            whileDrag={{ scale: 1.12, rotate: 0, cursor: "grabbing" }}
            initial={{ opacity: 0, scale: 0.3, rotate: rotate - 30 }}
            animate={{ opacity: 1, scale: 1, rotate }}
            transition={
              reduce
                ? instant
                : { type: "spring", stiffness: 260, damping: 16, delay: 0.25 + i * 0.08 }
            }
            className={`absolute z-10 cursor-grab touch-none select-none ${className}`}
          >
            <Comp className="w-full h-auto drop-shadow-[0_6px_0_rgb(15_23_42/0.12)]" />
          </motion.div>
        ))}

        <div className="relative w-full px-4 py-28 sm:py-0 sm:px-6 lg:px-8 text-center pointer-events-none">
          <h1 className="mx-auto max-w-[10ch] font-display text-[3.2rem] leading-[0.92] sm:text-8xl lg:text-[7.5rem] font-extrabold tracking-[-0.055em] text-ink">
            Know where every deal stands.
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-lg sm:text-xl text-ink-2 leading-relaxed">
            crm360 puts your inbox, contacts, pipeline and follow-ups in one
            workspace, so your team spends the day selling instead of searching.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 pointer-events-auto">
            <a
              href="https://app.crm360online.com/register"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-blue text-white text-lg font-bold border-[3px] border-on-color hover:-translate-y-0.5 hover:shadow-[0_5px_0_var(--on-color)] transition-[transform,box-shadow]"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-paper text-ink text-lg font-bold border-[3px] border-ink hover:bg-sun hover:text-on-color hover:border-on-color transition-colors"
            >
              See what&apos;s inside
            </a>
          </div>
          <p className="mt-5 text-sm text-ink-3">
            14-day free trial. No credit card required.
            <span className="hidden lg:inline"> Go on, drag a sticker.</span>
          </p>
        </div>
      </div>

      {/* Module ticker */}
      <div className="relative left-1/2 w-[110vw] -translate-x-1/2 mt-6 -rotate-[1.5deg] bg-sun border-y-[3px] border-on-color py-4 overflow-hidden">
        <ul className="marquee flex w-max" aria-label="What's included">
          {[...modules, ...modules].map((m, i) => (
            <li
              key={`${m}-${i}`}
              aria-hidden={i >= modules.length}
              className="flex items-center gap-6 pr-6 font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-on-color whitespace-nowrap"
            >
              {m}
              <svg viewBox="0 0 20 20" className="w-5 h-5" aria-hidden>
                <path d="M10 0 C11 7 13 9 20 10 C13 11 11 13 10 20 C9 13 7 11 0 10 C7 9 9 7 10 0Z" fill="var(--on-color)" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
