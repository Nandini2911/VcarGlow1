import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="pt-20">
     
      <Navbar />
      {/* Hero Section */}
      <Hero/>
       <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
      {/* Services Section */}
      {/* About Section */}
      {/* Contact Section */}
     
    </main>
  );
}