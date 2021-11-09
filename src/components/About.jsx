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
                    
                    <Route exact path="/careers">
                        <Career title="Careers"/>
                    </Route>
                    <Route exact path="/how-we-work">
                        <Howwework title="How We Work" />
                    </Route>
                    <Route exact path="/our-team">
                        <Team title="Our Team"/>
                    </Route>
                    <Route exact path="/mission-vision">
                        <Mission title="Mission And Vission" />
                    </Route>
                    <Route exact path="/our-value">
                        <Ourvalue title="Our Value" />
                    </Route>
                </Switch>
                

            </Router>
        )
    }
}
