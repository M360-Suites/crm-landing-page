import {
  BubbleSticker,
  CalendarSticker,
  EnvelopeSticker,
  SparkleSticker,
  WonSticker,
} from "@/components/shared/Stickers";

export function FinalCta() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 pb-20 lg:pb-28">
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] bg-blue border-[3px] border-on-color overflow-hidden px-6 py-20 sm:px-12 lg:py-28 text-center">
        <EnvelopeSticker className="absolute -left-4 top-6 w-24 lg:w-36 -rotate-12" />
        <WonSticker className="absolute right-4 -top-4 w-24 lg:w-32 rotate-12" />
        <BubbleSticker className="hidden sm:block absolute left-[8%] -bottom-6 w-28 lg:w-32 rotate-6" />
        <CalendarSticker className="hidden sm:block absolute -right-2 bottom-8 w-24 lg:w-32 -rotate-6" />
        <SparkleSticker className="hidden lg:block absolute right-[22%] bottom-4 w-20" />

        <h2 className="relative max-w-4xl mx-auto font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-extrabold tracking-[-0.05em] text-white text-balance">
          Your next deal is already in your inbox.
        </h2>
        <div className="relative mt-10 flex flex-col items-center gap-4">
          <a
            href="https://app.crm360online.com/register"
            className="inline-flex justify-center items-center px-9 py-4 rounded-full bg-sun text-on-color text-lg font-bold border-[3px] border-on-color hover:-translate-y-0.5 hover:shadow-[0_5px_0_var(--on-color)] transition-[transform,box-shadow] focus-visible:outline-white"
          >
            Start free trial
          </a>
          <p className="text-sm font-medium text-white/85">
            14 days free. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
