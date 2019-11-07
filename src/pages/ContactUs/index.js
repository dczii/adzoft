import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react'
import { mdiRhombus } from '@mdi/js';

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
            <a href="#" className='a1'>
                <p className="p1">FACEBOOK</p>
            </a>
            <a href="#" className='a2'>
                <p className="p1">TWITTER</p>
            </a>
            <a href="#" className='a3'>
                <p className="p1">INSTAGRAM</p>
            </a>
        </div>
    </Grid>
  );
}

export default App;
