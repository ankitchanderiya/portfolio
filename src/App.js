import React from 'react';
import Header from './components/header';
import Features from './components/features';
import Testimonials from './components/testimonials';
import Press from './components/press';
import Pricing from './components/pricing';
import Footer from './components/footer';

function App() {
  return(
    <div>
      <Header />
      <Features />
      <Testimonials />
      <Press />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
