import Hero from '@/components/Hero';
import AIIllustration from '@/components/AIIllustration';
import Features from '@/components/Features';
import PricingPlans from '@/components/PricingPlans';
import Footer from '@/components/Footer';
import SharedBackground from '@/components/SharedBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SharedBackground className="min-h-screen">
        <Hero />
        <AIIllustration />
        <Features />
        <PricingPlans />
      <Footer />
      </SharedBackground>
    </main>
  );
}
