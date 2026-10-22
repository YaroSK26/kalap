import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Everywhere from "@/components/sections/Everywhere";
import Video from "@/components/sections/Video";
import Merch from "@/components/sections/Merch";
import Instagram from "@/components/sections/Instagram";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-full w-full overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Everywhere />
        <Video />
        <Merch />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
