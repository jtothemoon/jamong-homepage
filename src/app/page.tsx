import FullPageScroll from "@/components/FullPageScroll";

import Hero from "@/components/Sections/Hero";
import AboutSectionOne from "@/components/Sections/About/AboutSectionOne";
import AboutSectionTwo from "@/components/Sections/About/AboutSectionTwo";
import Portfolio from "@/components/Sections/Portfolio";
import Partners from "@/components/Sections/Partners";

export default function Home() {
  return (
    <FullPageScroll>
      <Hero />
      <AboutSectionOne />
      <Portfolio />
      <Partners />
      <AboutSectionTwo />
    </FullPageScroll>
  );
}
