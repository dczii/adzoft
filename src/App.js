import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Works from './pages/Works';
import ComingSoon from './pages/ComingSoon';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path="/" component={ComingSoon} />
          <Route exact path="/staging" component={Home} />
          <Route exact path="/works" component={Works} />
      </div>
    </Router>
  );
}

export default App;
