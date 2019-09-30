import React from 'react';
import Grid from '@material-ui/core/Grid';

import './styles.scss';

function Home() {
  return (
    <Grid container className='App'>
      <Grid item xs={12} md={8} className='section-work'>
            <p>
              COMING SOON
            </p>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container className='App'>
          <Grid item xs={12} className='section-vision'>
            asdfasfda
          </Grid>
          <Grid item xs={12} className='section-team'>
            asdfasfda
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
