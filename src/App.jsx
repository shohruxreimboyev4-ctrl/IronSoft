import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase';
import Advantages from './components/Advantages';
import Portfolio from './components/Portfolio';
import Services from './components/Servises';
import Faq from './components/Faq';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Advantages />
      <Portfolio />
      <Services />
      <Faq />
      <About />
      <Footer />
    </div>
  );
}

export default App