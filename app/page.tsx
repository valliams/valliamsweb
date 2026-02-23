import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { DeliveryModel } from "@/components/DeliveryModel";
import { CaseStudies } from "@/components/CaseStudies";
import { TechStack } from "@/components/TechStack";
import { WhyValliams } from "@/components/WhyValliams";
import { Founder } from "@/components/Founder";
import { BlogPreview } from "@/components/BlogPreview";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Services />
      <DeliveryModel />
      <CaseStudies />
      <TechStack />
      <WhyValliams />
      <Founder />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
