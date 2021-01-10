import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return(
        <ul className="social-list list-inline py-2 mx-auto">
            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} fixedWidth/></a></li>
            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth/></a></li>
            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faGithubAlt} fixedWidth/></a></li>
            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faInstagram} fixedWidth/></a></li>
            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faYoutube} fixedWidth/></a></li>
        </ul>
    )
}

export default Socials;