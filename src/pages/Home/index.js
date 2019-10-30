import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import WorkSVG from '../../assets/svg/ADZ1.svg';
import VisionSVG from '../../assets/svg/ADZ2.svg';
import StudioSVG from '../../assets/svg/ADZ3.svg';
import './styles.scss';

function Home(props) {
return (
    <Grid container className='home-component'>
    
        <Grid item xs={12} md={8} className='section-work' onClick={() => props.history.push('/works')}>
            <img src={WorkSVG} className='work-svg' alt='SVG' />
            <Container>
            <p className='title'>WORKS</p>
            <h2>We create beautiful and functional websites for individuals and businesses.</h2>
            </Container>
        </Grid>
        
        <Grid item xs={12} md={4}>
            <Grid container className='App'>
            
                <Grid item xs={12} className='section-vision' onClick={() => props.history.push('/about')}>
                    <img src={VisionSVG} className='vision-svg' alt='SVG' />
                    <Container className='content-container'>
                        <p className='title'>ABOUT</p>
                        <h3>Who we are and Why we do What we do.</h3>
                    </Container>
                </Grid>

                <Grid item xs={12} className='section-vision section-team' onClick={() => props.history.push('/contact-us')}>
                    <img src={StudioSVG} className='contact-svg' alt='SVG' />
                    <Container className='content-container'>
                        <p className='title'>CONTACT US</p>
                        <h3>Interested in working with us? Send us a message.</h3>
                    </Container>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);
}

export default Home;
