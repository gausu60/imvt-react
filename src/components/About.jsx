import React, { Component } from 'react';
import Pagebanner from './Pagebanner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Career from './Career';
import Howwework from './Howwework';
import Team from './Team';
import Mission from './Mission';
import Ourvalue from './Ourvalue';

export default class About extends Component {
    render() {
        return (
            <Router>
                <Pagebanner />
                <Switch>
                    <Route exact path="/about-us">
                    </Route>
                    <Route exact path="/careers">
                        <Career/>
                    </Route>
                    <Route exact path="/how-we-work">
                        <Howwework/>
                    </Route>
                    <Route exact path="/our-team">
                        <Team/>
                    </Route>
                    <Route exact path="/mission-vision">
                        <Mission/>
                    </Route>
                    <Route exact path="/our-value">
                        <Ourvalue/>
                    </Route>
                </Switch>
                

            </Router>
        )
    }
}
