import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import ContactUs from './pages/ContactUs';
import Header from './components/header';
import Routes from './routes';

import '../node_modules/react-typist/dist/standalone/Typist';

function App({location}) {
  console.log(location)
  return (
    <Router style={{position:'relative'}}>
      <TransitionGroup>
        <CSSTransition
          // key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <div>
            <Header />
            <Routes />
          </div>

        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
