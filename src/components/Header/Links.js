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
                <NavLink className="nav-link" to="cv"><FontAwesomeIcon icon={faFileAlt} fixedWidth className="mr-2"/>CV</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="blog-home"><FontAwesomeIcon icon={faBlog} fixedWidth className="mr-2"/>Blog</NavLink>
            </li>
        </ul>
        )
    }
}
