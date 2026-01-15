import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import DayNightExperience from './components/DayNightExperience';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MenuHighlights />
      <DayNightExperience />
      <Gallery />
      <Reviews />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default App;
