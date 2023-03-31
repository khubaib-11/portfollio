import {
  Navbar,
  Hero,
  Services,
  Portfolio,
  CTA,
  Features,
  Testimonial,
  FAQ,
  Contact,
  Experience,
  Footer,
} from './components';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
      <Features />
      <Testimonial />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
