import Hero from '../components/Hero.jsx';
import UseCases from '../components/UseCases.jsx';
import DemoPlayer from '../components/DemoPlayer.jsx';
import Pricing from '../components/Pricing.jsx';
import Process from '../components/Process.jsx';
import VoiceNotice from '../components/VoiceNotice.jsx';
import AddOns from '../components/AddOns.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <UseCases />
        <DemoPlayer />
        <Pricing />
        <Process />
        <VoiceNotice />
        <AddOns />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
