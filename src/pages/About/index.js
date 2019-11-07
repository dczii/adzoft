import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import Icon from '@mdi/react'
import { mdiRhombus } from '@mdi/js';

import './styles.scss';

function About(props) {
    return (
        <Grid container className='about-component' justify='center'>
            <Container>

                <Grid item xs={12} className='display-center'>
                    <h1 className="header1">Ready for the future</h1>
                    <p className="p1">We are adzoft. We guide businesses in this rapidly changing digital world. We are a team of developers, entrepreneurs and idealists.We want to make an impact in our world by encouraging businesses to innovate and help them tap into an untouched market to open new opportunities</p>
                </Grid>
                
                <Grid container className='block-2' justify='center' alignItems="stretch" spacing={2}>

                    <Grid item xs={12} sm={4} className='display-center'>
                        <div className='vision-container'>
                            <h1 className="header2"> Our<br />Mission </h1>
                            <p>Our mission is to help businesses and individuals to take advantage of today's technology to help them succeed and evolve to their full potential through digitization. Our team is passionate about delivering excellent services and experiences that will keep our clients pleased.</p>
                        </div>
                        <div className='shadow'/>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} className='display-center'>
                        <div className='vision-container'>
                            <h1 className="header2"> Our<br />Vision </h1>
                            <p>Our vision is to bring world-class design and development services to our clients and offer boundless opportunities to them by unlocking the doors to the digital world. We want to be the go-to company of businesses all over the world when they want to enter the digital world.</p>
                        </div>
                        <div className='shadow'/>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} className='display-center'>
                        <div className='vision-container'>
                            <h1 className="header2"> Our<br />Impact </h1>
                            <p>Through our work, we are able to transform the landscape for businesses and individuals so they can stay up to date, ready to tackle the future and stay relevant in this fast changing world.</p>
                    </div>
                    <div className='shadow'/>
                    </Grid>
                </Grid>

            </Container>
        </Grid>
    );
}

export default About;
