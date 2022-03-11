import React, { Component } from 'react'


class Navbar extends Component {
    state = {
        isExpanded: false
    }

    showNavMenu = () => {
        const nav = document.getElementById('navigation');
        if (this.state.isExpanded){
            this.setState({
                isExpanded: false
            })
            nav.classList.remove('show')
        } else if (this.state.isExpanded === false){
            this.setState({
                isExpanded: true
            })
            nav.classList.add('show')
        }

    }

    render(){
    return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" onClick={this.showNavMenu}>
        <span className="navbar-toggler-icon"></span>
        </button>

    );
    }
}

export default Navbar;