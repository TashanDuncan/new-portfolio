import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLaptopCode, faFileAlt, faBlog, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'


export default class Links extends Component {
    render() {
        return (
            <ul className="navbar-nav flex-column text-left">
            <li className="nav-item active">
                <a className="nav-link" href="index.html"><FontAwesomeIcon icon={faUser} fixedWidth className="mr-2"/>About Me<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="portfolio.html"><FontAwesomeIcon icon={faLaptopCode} fixedWidth className="mr-2"/>Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="resume.html"><FontAwesomeIcon icon={faFileAlt} fixedWidth className="mr-2"/>Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="blog-home.html"><FontAwesomeIcon icon={faBlog} fixedWidth className="mr-2"/>Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact.html"><FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth className="mr-2"/>Contact</a>
            </li>
        </ul>
        )
    }
}
