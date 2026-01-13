
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Features from '../components/Features';
import Programs from '../components/Programs';
import CTA from '../components/CTA';

function Home() {
  return (

    <div className="animate-in fade-in duration-700">
      <Hero />
      <TrustBar />
      <Features />
      <Programs />
      <CTA />
    </div>

  );
};

export default Home;
