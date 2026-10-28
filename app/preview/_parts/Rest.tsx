import { PainPoints } from "@/components/PainPoints";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { Resources } from "@/components/Resources";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";

// Sections every variation keeps as the current page has them.
export function AfterFeatures() {
  return (
    <>
      <UseCases />
      <Pricing />
      <Resources />
      <About />
      <FinalCta />
    </>
  );
}

export { PainPoints };

export { SoonBadge } from "@/components/shared/SoonBadge";

export const heroCopy = {
  title: "Know where every deal stands.",
  body: "crm360 puts your inbox, contacts, pipeline and follow-ups in one workspace, so your team spends the day selling instead of searching.",
  note: "14-day free trial. No credit card required.",
};
