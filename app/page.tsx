import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { Resources } from "@/components/Resources";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[var(--color-crm-peach)] selection:text-[var(--color-crm-rust)]">
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <DashboardPreview />
        <Features />
        <UseCases />
        <Pricing />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
