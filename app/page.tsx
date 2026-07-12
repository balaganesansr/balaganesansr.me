import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/features/hero/Hero";
import { Journey } from "@/features/journey/Journey";
import { AppShowcase } from "@/features/products/AppShowcase";
import { WebWork } from "@/features/work/WebWork";
import { Constellation } from "@/features/skills/Constellation";
import { Contact, Footer } from "@/features/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <AppShowcase />
        <WebWork />
        <Constellation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
