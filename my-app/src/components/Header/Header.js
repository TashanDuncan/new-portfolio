import React from 'react'
import Navbar from './Navbar'

const Header = (props) => {
    return (
        <header className="header text-center">	    
           	<div className="force-overflow">
			<h1 className="blog-name pt-lg-4 mb-0">Tashan Duncan</h1>
            <Navbar />
            </div>
	    </header>

    );
}

export default Header;