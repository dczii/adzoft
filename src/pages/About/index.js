import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typist from 'react-typist';
import _ from 'lodash';

import ASvg from '../../assets/A.svg';
import './styles.scss';

function About(props) {
    return (
        <Grid container className='about-component' justify='center'>
            <Grid item xs={12} className='center-container'>
                <img src={ASvg} className='section-bg'/>

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
            
        </Grid>
    );
}

export default About;
