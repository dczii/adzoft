import React, { useState, useLayoutEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import WorkSVG from '../../assets/svg/ADZ1.svg';
import VisionSVG from '../../assets/svg/ADZ2.svg';
import StudioSVG from '../../assets/svg/ADZ3.svg';
import './styles.scss';

function Home(props) {
    const [width] = useWindowSize();


    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const renderWork = (xs, md) => {
        return <Grid item xs={xs} md={md} className='section-work' 
            onClick={() => props.history.push('/works')}
        >
            <img src={WorkSVG} className='work-svg' alt='SVG' />
            <Container className='content-container'>
                <p className='title'>Works</p>
                <h2>We create beautiful and functional websites for individuals and businesses.</h2>
            </Container>
        </Grid>
    }

    const renderAbout = (xs, md) => {
        return <Grid item xs={xs} md={md} className='section-vision' 
            onClick={() => props.history.push('/about')}
        >
            <img src={VisionSVG} className='vision-svg' alt='SVG' />
            <Container className='content-container'>
                <p className='title'>ABOUT</p>
                <h3>Who we are and<br />Why we do<br />What we do.</h3>
            </Container>
        </Grid>
    }

    const renderContact = (xs, md) => {
        return <Grid item xs={xs} md={md} className='section-vision section-team' 
            onClick={() => props.history.push('/contact-us')}
        >
            <img src={StudioSVG} className='contact-svg' alt='SVG' />
            <Container className='content-container mobile-contact-container'>
                <p className='title'>CONTACT US</p>
                <h3>Interested in working with us?<br />Send us a message.</h3>
            </Container>
        </Grid>
    }

    const renderWebView = () => {
        return <Grid container>
            {renderWork(12, 8)}
            <Grid item xs={4}>
                <Grid container className='App mobile-block-2'>
                    {renderAbout(12, 12)}
                    {renderContact(12, 12)}
                </Grid>
            </Grid>
        </Grid>

    }

    const renderMobileView = () => {
        return <div>
            {renderWork(12,12)}
            <Grid item xs={12}>
                <Grid container className='App mobile-block-2'>
                    {renderAbout(12, 4)}
                    {renderContact(12, 4)}
                    
                </Grid>
            </Grid>
        </div>
            
    }

    return (
        <Grid container className='home-component'>
            {width >= 768 ? renderWebView(): renderMobileView()}
        </Grid>
    );
}

export default Home;
