import { ButtonLink, SIGNUP_URL } from "@/components/shared/Button";

export function FinalCta() {
  return (
    <section className="px-3 sm:px-4 pb-4">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-night px-6 py-24 sm:px-12 lg:py-32 text-center">
        <div aria-hidden className="grid-lines-night absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute left-1/2 top-full -z-10 h-[420px] w-[900px] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/40 blur-[120px]"
        />
        <h2 className="max-w-3xl mx-auto font-display text-[2.6rem] md:text-6xl lg:text-7xl leading-[1] font-bold tracking-[-0.045em] text-night-ink text-balance">
          Your next deal is already in your inbox.
        </h2>
        <p className="mt-6 max-w-md mx-auto text-lg text-night-ink-3">
          Bring it into crm360 and see where it stands by this afternoon.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <ButtonLink href={SIGNUP_URL} variant="dark">
            Start free trial
          </ButtonLink>
        </div>
        <p className="mt-5 text-sm text-night-ink-3">14 days free. No credit card required.</p>
      </div>
    </section>
  );
}
