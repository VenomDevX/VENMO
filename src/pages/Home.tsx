import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Highlights from '../components/Highlights';
import Capabilities from '../components/Capabilities';
import Ticker from '../components/Ticker';

export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      <Hero />
      <Manifesto />
      <Highlights />
      <Capabilities />
      <Ticker />
    </div>
  );
}
