import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="about">
        <About />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
