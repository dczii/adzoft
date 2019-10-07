import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/header';
import Routes from './routes';

import '../node_modules/react-typist/dist/standalone/Typist';

function App({location}) {
  console.log(location)
  return (
    <Router style={{position:'relative'}}>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
