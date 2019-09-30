import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ComingSoon} />
        <Route exact path="/staging" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
