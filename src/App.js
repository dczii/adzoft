import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/header';
import Routes from './routes';

function App({location}) {
  console.log(location)
  return (
    <Router style={{position:'relative'}}>
      <div className="fade">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
