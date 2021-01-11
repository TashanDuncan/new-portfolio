import React, { Component } from 'react'


class Navbar extends Component {
    state = {
        isExpanded: false
    }

    render(){
    return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

    );
    }
}

export default Navbar;