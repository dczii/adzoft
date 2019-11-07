import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SwipeableViews from 'react-swipeable-views';

import Icon from '@mdi/react'
import { mdiCheckboxBlankCircle } from '@mdi/js';
import { mdiCheckboxBlankCircleOutline } from '@mdi/js';

import WorkSVG from '../../assets/svg/ADZ1.svg';
import VisionSVG from '../../assets/svg/ADZ2.svg';
import StudioSVG from '../../assets/svg/ADZ3.svg';
import './styles.scss';

function Home(props) {
    const [activeIndex, setIndex] = useState(0);

    return (
        <Grid container className='home-component'>
            <SwipeableViews style={{width: '100%', height: '100%'}}
                enableMouseEvents
                onChangeIndex={(index) => setIndex(index)}
                index={activeIndex}
            >
                <Grid item xs={12} md={12} className='section-work' 
                    // onClick={() => props.history.push('/works')}
                >
                    <img src={WorkSVG} className='work-svg' alt='SVG' />
                    <h2>We create beautiful and functional websites for individuals and businesses.</h2>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='App'>
                        <Grid item xs={12} md={6} className='section-vision' 
                            // onClick={() => props.history.push('/about')}
                        >
                            <img src={VisionSVG} className='vision-svg' alt='SVG' />
                            <Container className='content-container'>
                                <p className='title'>ABOUT</p>
                                <h3>Who we are and<br />Why we do<br />What we do.</h3>
                            </Container>
                        </Grid>

                        <Grid item xs={12} md={6} className='section-vision section-team' 
                            // onClick={() => props.history.push('/contact-us')}
                        >
                            <img src={StudioSVG} className='contact-svg' alt='SVG' />
                            <Container className='content-container'>
                                <p className='title'>CONTACT US</p>
                                <h3>Interested in working with us?<br />Send us a message.</h3>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </SwipeableViews>

            <div className='btn-slider'>
                <Icon size={0.5} color='white' 
                    path={activeIndex === 0 ? mdiCheckboxBlankCircle : mdiCheckboxBlankCircleOutline}
                />
                <Icon size={0.5} color='white' 
                    path={activeIndex === 1 ? mdiCheckboxBlankCircle : mdiCheckboxBlankCircleOutline}
                />
            </div>
        </Grid>
    );
}

export default Home;
