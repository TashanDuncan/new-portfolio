import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const CTA = () => (   
    <div class="my-2">
    <a class="btn btn-primary" href="contact.html" target="_blank"><FontAwesomeIcon icon={faPaperPlane} fixedWidth className="mr-2"/>Contact Me</a>
    </div>
)

export default CTA;