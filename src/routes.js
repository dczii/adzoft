import React from 'react';
import { withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
// import ComingSoon from './pages/ComingSoon';

function Routes({ location }) {
    return (
    <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={500}
        classNames={'fade'}
        >
            <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/works" component={Works} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact-us" component={ContactUs} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
    );
}

export default withRouter(Routes);
