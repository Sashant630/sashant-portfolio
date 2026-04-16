import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { TechStrip } from "@/components/portfolio/tech-strip";
import { Works } from "@/components/portfolio/works";
import { Services } from "@/components/portfolio/services";
import { Process } from "@/components/portfolio/process";
import { Ribbon } from "@/components/portfolio/ribbon";
import { CTA } from "@/components/portfolio/cta";
import { Footer } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sashant Vishwakarma — Frontend Developer (React, Next.js, GenAI)" },
      {
        name: "description",
        content:
          "Frontend Developer with 4+ years building scalable React, Next.js & TypeScript apps. Shipping fast with Lovable, Cursor & Supabase.",
      },
      { property: "og:title", content: "Sashant Vishwakarma — Frontend Developer" },
      {
        property: "og:description",
        content:
          "React, Next.js & GenAI-powered web apps. SEO-optimized, production-ready, end-to-end ownership.",
      },
    ],
  }),
});

function Index() {
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
