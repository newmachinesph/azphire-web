import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ValueProps } from '@/components/ValueProps';
import { HowItWorks } from '@/components/HowItWorks';
import { RegistrationWizardDemo } from '@/components/RegistrationWizardDemo';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <RegistrationWizardDemo />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
