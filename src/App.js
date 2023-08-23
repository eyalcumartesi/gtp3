import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <Router>
      <Switch>
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Route exact path="/" component={Header} />
          </div>
          <div className="gradient__bg_section">
            <Brand />
            <Route exact path="/wgpt3" component={WhatGPT3} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/possibilities" component={Possibility} />
            <CTA />
          </div>
          <Route exact path="/blog" component={Blog} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
