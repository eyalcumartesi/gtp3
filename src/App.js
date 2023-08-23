import React from 'react';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className="gradient__bg_section">
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
      </div>
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
