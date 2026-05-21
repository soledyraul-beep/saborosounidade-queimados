import Hero from './components/Hero';
import VisualProof from './components/VisualProof';
import About from './components/About';
import Benefits from './components/Benefits';
import CTASection from './components/CTASection';
import Process from './components/Process';
import MasonryGallery from './components/MasonryGallery';
import FinalCTA from './components/FinalCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-accent selection:text-white">
      {/* Scroll sections with individual reveal triggers handled by motion in components */}
      <Hero />
      <VisualProof />
      <About />
      <Benefits />
      <CTASection />
      <Process />
      <MasonryGallery />
      <FinalCTA />
      <Testimonials />
      <Footer />
      
      {/* Global UI */}
      <FloatingWhatsApp />
    </main>
  );
}
