import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

class DarkMode extends Component {
    state = {
        isdark: false
    }
    
    render(){
    return(
        <div class="dark-mode-toggle text-center w-100">
        <hr class="mb-4"/>
        <h4 class="toggle-name mb-3 "><FontAwesomeIcon icon={faAdjust}  className="mr-1"/>Dark Mode</h4>
        <input class="toggle" id="darkmode" type="checkbox"/>
        <label class="toggle-btn mx-auto mb-0" for="darkmode"></label>
        </div>
        
    )}
}

export default DarkMode;