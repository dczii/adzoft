import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react'
import { mdiRhombus } from '@mdi/js';

import './styles.scss';

function App(props) {
  return (
    <Grid container className='contact-component'>
        <h1 style={{ marginBottom: 40 }}>
            <Icon path={mdiRhombus} size={1} color='white' /> Contact Us
        </h1>
        <a href="mailto:sales@adzoft.com">
            <h3>
                sales@adzoft.com
            </h3>
        </a>
        <a href="#">
            <h3>
                Facebook
            </h3>
        </a>
    </Grid>
  );
}

export default App;
