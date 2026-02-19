import { Navigation, Footer } from '@/components/layout';
import {
  Hero,
  Features,
  ProductShowcase,
  HowItWorks,
  Analytics,
  SocialProof,
  Pricing,
  FinalCTA,
} from '@/features/marketing/components';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Analytics />
        <SocialProof />
        {/* <Pricing /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
