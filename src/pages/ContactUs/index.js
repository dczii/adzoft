import React from 'react';
import Grid from '@material-ui/core/Grid';

import './styles.scss';

function App(props) {
  return (
    <Grid container className='contact-component'>
        <a href="mailto:sales@adzoft.com">
            <h1>
                sales@adzoft.com
            </h1>
        </a>
        <a href="#">
            <h1>
                Facebook
            </h1>
        </a>
    </Grid>
  );
}

export default App;
