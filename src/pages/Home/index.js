import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import WorkSVG from '../../assets/laptop.svg';
import VisionSVG from '../../assets/vision.svg';
import StudioSVG from '../../assets/studio.svg';
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
            
            <Grid item xs={12} className='section-vision'>
                <img src={VisionSVG} className='vision-svg' alt='SVG' />
                <Container className='content-container'>
                    <p className='title'>VISION</p>
                    <h3>We bring world-class design and development services to our clients.</h3>
                </Container>
            </Grid>

            <Grid item xs={12} className='section-vision section-team'>
                <img src={StudioSVG} className='vision-svg' alt='SVG' />
                <Container className='content-container'>
                    <p className='title'>STUDIO</p>
                    <h3>We approach projects with one vision.</h3>
                </Container>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
);
}

export default Home;
