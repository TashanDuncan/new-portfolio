import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return(
        <ul className="social-list list-inline py-2 mx-auto">
            <li className="list-inline-item"><a><FontAwesomeIcon icon={faTwitter} fixedWidth /></a></li>
            <li className="list-inline-item"><a><i className="fab fa-twitter fa-fw"></i></a></li>
            <li className="list-inline-item"><a><i className="fab fa-linkedin-in fa-fw"></i></a></li>
            <li className="list-inline-item"><a><i className="fab fa-github-alt fa-fw"></i></a></li>
            <li className="list-inline-item"><a><i className="fab fa-stack-overflow fa-fw"></i></a></li>
            <li className="list-inline-item"><a><i className="fab fa-instagram fa-fw"></i></a></li>
        </ul>
    )
}

export default Socials;