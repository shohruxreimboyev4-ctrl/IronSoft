import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase';
import Advantages from './components/Advantages';
import Portfolio from './components/Portfolio';
import Services from './components/Servises';

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Advantages />
      <Portfolio />
      <Services />
    </div>
  );
}

export default App