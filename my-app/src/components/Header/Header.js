import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'


const Header = (props) => {
    return (
        <header className="header text-center">	    
           	<div className="force-overflow">
			<h1 className="blog-name pt-lg-4 mb-0">Tashan Duncan</h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <Navbar />
            <Navigation />
            </nav>
            </div>
	    </header>

    );
}

export default Header;