import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Rates from './components/Rates';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Story />
      <Rates />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
