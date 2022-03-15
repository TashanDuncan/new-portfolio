import React from 'react'
import AboutMe from './about/AboutMe'
import Skills from './about/Skills'
import PortHeader from './portfolio/PortHeader'
import ProjectsFull from './portfolio/ProjectsFull'
import PoeticFlowerx from './portfolio/cases/PoeticFlowerX/PoeticFlowerX'
import {
    Route,
    Switch
  } from 'react-router-dom';
import Projects from './about/Projects';

const Main = () => (
    <div className="main-wrapper">
    <Switch>
        <Route exact path="/">
            <AboutMe/>
            <Skills/>
            <div class="container"><hr></hr></div>
            <Projects/>
        </Route>
        <Route exact path="/portfolio">
            <PortHeader/>
            <ProjectsFull/>
        </Route>
        <Route exact path="/poeticflowerx">
            <PoeticFlowerx/>
        </Route>
    </Switch>
    </div>
)

export default Main;