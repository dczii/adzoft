import React from 'react';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-animate-on-scroll';
import Typist from 'react-typist';
import _ from 'lodash';

import Button from '../../components/button';
import './styles.scss';

function Works(props) {

    const data = [{
        title: 'Gana English',
        content: 'The couple Nico and Hazel saw an opportunity in teaching young korean kids the basics of English. Created from Scratch, adzoft delivered a functional website that provides them a source of both teachers and students.',
        videoSrc: require('../../assets/apo-demo.mp4'),
        link: 'http://ganaenglish.com/'
    }, {
        title: 'Apo View Hotel',
        content: 'A Luxury hotel located at the heart of Davao City. Noticing the money that is left at the table by not having a modern and functional website, they contacted us to help fix this. Through constant collaboration, we provided them with a responsive website that is worthy of the Luxury of their hotel..',
        videoSrc: require('../../assets/apo-demo.mp4'),
        link: 'https://www.apoviewhotel.com'
    }]

    function openLink(link) {
        window.open(link, "_blank")
    }
    return (
        <Grid container className='works-component' justify='center'>
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
            
            {_.map(data, (val, index) => {
                return (
                    <Grid item xs={10} md={10} className='block' key={index}>
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOutRight' animateOnce style={{position:'relative'}}>
                            <div className='video-container' key="a">
                                <video loop autoPlay muted>
                                    <source src={val.videoSrc} type="video/mp4" />
                                </video>
                            </div>
                            <div className='content-container' key="b">
                                <label className='adz-blue'>{val.title}</label>
                                <p>{val.content}</p>
                                <Button onClick={() => openLink(val.link)}>VISIT</Button>
                            </div>
                        </ScrollAnimation>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Works;
