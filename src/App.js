import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import Header from './components/header';

import '../node_modules/react-typist/dist/standalone/Typist';

function App() {
  return (
    <Router style={{position:'relative'}}>
      <div>
        <Header />
          <Route exact path="/" component={ComingSoon} />
          <Route exact path="/staging" component={Home} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
