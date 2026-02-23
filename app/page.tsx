import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { WebsiteDesignService, ProductDesignService } from "@/components/services";
import { Process } from "@/components/process";
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
      <div id="website-design">
        <WebsiteDesignService />
      </div>
      <div id="product-design">
        <ProductDesignService />
      </div>
      {/* <div id="why-us">
        <WhyUs />
      </div> */}
      <div id="work">
        <Work />
      </div>
      {/* <div id="process">
        <Process />
      </div> */}
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
