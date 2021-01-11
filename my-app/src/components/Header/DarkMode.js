import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

class DarkMode extends Component {
    state = {
        isdark: false
    }

    handleDarkMode = (event) => {
        const target = event.target;
        const body = document.body;
        if (target.checked === true){
            this.setState({
                isdark: true
            })
            body.classList.add('dark-mode')
        } else if (target.checked === false){
            this.setState({
                isdark: false
            })
            body.classList.remove('dark-mode')
        }

    }

    render(){
    return(
        <div class="dark-mode-toggle text-center w-100">
        <hr class="mb-4"/>
        <h4 class="toggle-name mb-3 "><FontAwesomeIcon icon={faAdjust}  className="mr-1"/>Dark Mode</h4>
        <input class="toggle" id="darkmode" type="checkbox"  onChange={this.handleDarkMode}/>
        <label class="toggle-btn mx-auto mb-0" for="darkmode"></label>
        </div>
        
    )}
}

export default DarkMode;