import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import Typist from 'react-typist';

import Icon from '@mdi/react'
import { mdiRhombus } from '@mdi/js';

import './styles.scss';

function About(props) {
    return (
        <Grid container className='about-component' justify='center'>
            <Container>
                <Grid item xs={12} className='center-container'>
                    <div className='content'>
                        <Typist avgTypingDelay={10} cursor={{show:false}}>
                            <span>We help create your digital presence through carefully thought of</span>
                        </Typist>
                        <Typist avgTypingDelay={60} cursor={{show:false}}>
                            <label>Designing</label>
                        </Typist>
                        <Typist avgTypingDelay={5} cursor={{show:false}}>
                            <span>we turn that vision into a tangible, business-generating website through our expertise in</span>
                        </Typist>
                        <Typist avgTypingDelay={60} cursor={{show:false}}>
                            <label>Development </label>
                        </Typist>
                        <Typist avgTypingDelay={30} cursor={{show:false}}>
                            <span>& Custom Solutions</span>
                        </Typist>
                    </div>
                </Grid>

                <Grid item xs={12} className='display-center'>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <h1><Icon path={mdiRhombus} size={1} color='white' /> Ready for the future <Icon path={mdiRhombus} size={1} color='white' /></h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
                            <p>We are adzoft. We guide businesses in this rapidly changing digital world. We are a team of developers, entrepreneurs and idealists.We want to make an impact in our world by encouraging businesses to innovate and help them tap into an untouched market to open new opportunities</p>
                        </ScrollAnimation>
                </Grid>
                
                <Grid container className='block-2' justify='center' alignItems="stretch" spacing={2}>

                    <Grid item xs={12} sm={4} className='display-center'>
                        <div className='vision-container'>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                                <h1><Icon path={mdiRhombus} size={1} color='white' /> Our Mission </h1>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
                                <p>Our mission is to help businesses and individuals to take advantage of today's technology to help them succeed and evolve to their full potential through digitization. Our team is passionate about delivering excellent services and experiences that will keep our clients pleased.</p>
                            </ScrollAnimation>
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} className='display-center'>
                        <div className='vision-container'>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                                <h1><Icon path={mdiRhombus} size={1} color='white' /> Our Vision </h1>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
                                <p>Our vision is to bring world-class design and development services to our clients and offer boundless opportunities to them by unlocking the doors to the digital world. We want to be the go-to company of businesses all over the world when they want to enter the digital world.</p>
                            </ScrollAnimation>
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} className='display-center'>
                        <div className='vision-container'>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                                <h1><Icon path={mdiRhombus} size={1} color='white' /> Our Impact </h1>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
                                <p>Through our work, we are able to transform the landscape for businesses and individuals so they can stay up to date, ready to tackle the future and stay relevant in this fast changing world.</p>
                            </ScrollAnimation>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default About;
