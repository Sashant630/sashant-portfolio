import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { TechStrip } from "@/components/portfolio/tech-strip";
import { Works } from "@/components/portfolio/works";
import { Services } from "@/components/portfolio/services";
import { Process } from "@/components/portfolio/process";
import { Ribbon } from "@/components/portfolio/ribbon";
import { CTA } from "@/components/portfolio/cta";
import { Footer } from "@/components/portfolio/footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TechStrip />
      <Works />
      <Services />
      <Process />
      <Ribbon />
      <CTA />
      <Footer />
    </main>
  );
}
