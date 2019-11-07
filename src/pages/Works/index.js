import React from 'react';
import Grid from '@material-ui/core/Grid';
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
                    <span className="p1">We help create your digital presence through carefully thought of</span>
                    <label className="l1">Designing</label>
                    <span className="p2">we turn that vision into a tangible, business-generating website through our expertise in</span>
                    <label className="l2">Development </label>
                    <span className="p3">& Custom Solutions</span>

                    <div className='shadow'/>
                </div>
            </Grid>
            
            {_.map(data, (val, index) => {
                return (
                    <Grid item xs={10} md={10} className='block' key={index}>
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
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Works;
