import {
  Navigation,
  Footer,
  Hero,
  Features,
  ProductShowcase,
  HowItWorks,
  Analytics,
  SocialProof,
  FinalCTA,
} from '@/components/landingpage';

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
