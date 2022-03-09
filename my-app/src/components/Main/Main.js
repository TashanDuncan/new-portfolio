import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import {
    Route,
    Switch
  } from 'react-router-dom';

const Main = () => (
    <div className="main-wrapper">
    <Switch>
        <Route exact path="/">
            <AboutMe/>
            <Skills/>
            <div class="container"><hr></hr></div>
            
        </Route>
    </Switch>
    </div>
)

export default Main;