import React from 'react'
import Image from '../../images/profile-lg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt} from '@fortawesome/free-solid-svg-icons'

const AboutMe = () =>  (
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
    <div className="container">
        <div className="profile-teaser media flex-column flex-lg-row">
            
            <div className="media-body">
                <h2 className="name font-weight-bold mb-1">Tay Duncan</h2>
                <div className="tagline mb-3">Web Developer</div>
                <div className="bio mb-4">I'm a aspiring web engineer who has a passion for building complex scalable web apps. I write about web development on <a className="link-on-bg" href="blog-home.html">my blog</a>. Want to know how I may help your project? Check out my project <a className="link-on-bg" href="projects.html">portfolio</a> and <a className="link-on-bg" href="resume.html">online CV</a>.
                </div>
                <div className="mb-4">
                    <a className="btn btn-primary mr-2 mb-3" href="portfolio.html"><FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2"/><span className="d-none d-md-inline">View</span> Portfolio</a>
                    <a className="btn btn-secondary mb-3" href="resume.html"><FontAwesomeIcon icon={faFileAlt} className="mr-2"/><span className="d-none d-md-inline">View</span> CV</a>
                </div>
            </div>
            <img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src={Image} alt="Tashan"/>
        </div>
    </div>
</section>
)

export default AboutMe;