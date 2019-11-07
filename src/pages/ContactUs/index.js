import React from 'react';
import Grid from '@material-ui/core/Grid';

import './styles.scss';

function App(props) {
  return (
    <Grid container className='contact-component'>
        <h1 style={{ marginBottom: 40 }}>
            Contact Us
        </h1>
        <a href="mailto:sales@adzoft.com">
            <h3>
                sales@adzoft.com
            </h3>
        </a>

        <div className='social-container'>
            {/* // eslint-disable-next-line no-use-before-define */}
            <button href={null} className='a1'>
                <p className="p1">FACEBOOK</p>
            </button>
            <button href={null} className='a2'>
                <p className="p1">TWITTER</p>
            </button>
            <button href={null} className='a3'>
                <p className="p1">INSTAGRAM</p>
            </button>
        </div>
    </Grid>
  );
}

export default App;
