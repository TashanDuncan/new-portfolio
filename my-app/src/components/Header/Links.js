import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUser, 
    faLaptopCode, 
    faFileAlt, 
    faBlog, 
    faBriefcase
} from '@fortawesome/free-solid-svg-icons'

import { faDiscord} from '@fortawesome/free-brands-svg-icons'


export default class Links extends Component {
    render() {
        return (
            <ul className="navbar-nav flex-column text-left">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/"><FontAwesomeIcon icon={faUser} fixedWidth className="mr-2"/>About Me<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="portfolio"><FontAwesomeIcon icon={faLaptopCode} fixedWidth className="mr-2"/>Portfolio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="freelance"><FontAwesomeIcon icon={faBriefcase} fixedWidth className="mr-2"/>Freelance Services</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="resume"><FontAwesomeIcon icon={faFileAlt} fixedWidth className="mr-2"/>Resume</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="blog-home"><FontAwesomeIcon icon={faBlog} fixedWidth className="mr-2"/>Blog/Vlog</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="discord"><FontAwesomeIcon icon={faDiscord} fixedWidth className="mr-2"/>Discord Channel</NavLink>
            </li>
        </ul>
        )
    }
}
