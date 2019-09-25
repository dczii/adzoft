import React from 'react';
import { useSpring, animated } from 'react-spring'

import logo from './assets/logo.png';
import './App.css';

function App() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: '0%', background: '#DF6E21' },
    to: async next => {
      while (1) {
        await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: '#DF6E21' })
        await next({ height: '50%', background: '#2096BA' })
        await next({ width: '50%', left: '50%', background: '#C5D2DB' })
        await next({ top: '0%', height: '100%', background: '#DF6E21' })
        await next({ top: '50%', height: '50%', background: '#2096BA' })
        await next({ width: '100%', left: '0%', background: '#C5D2DB' })
        await next({ width: '50%', background: '#DF6E21' })
        await next({ top: '0%', height: '100%', background: '#2096BA' })
        await next({ width: '100%', background: '#C5D2DB' })
      }
    },
  })

  return (
    <div className="App">
        <div className='animate-container'>
          <animated.div className="script-box " style={props} />
        </div>

        <div className='test-container'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            COMING SOON
          </p>

        </div>
      
    </div>
  );
}

export default App;
