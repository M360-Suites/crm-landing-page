import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { Resources } from "@/components/Resources";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <UseCases />
      <Pricing />
      <Resources />
      <About />
      <FinalCta />
    </>
  );
}
