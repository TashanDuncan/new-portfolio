import React from 'react';
import CTA from './CTA';
import DarkMode from './DarkMode';
import Links from './Links';
import Profile from './Profile';



const Navigation = () => {
    return (
        <div id="navigation" class="collapse navbar-collapse flex-column" >
        <Profile />
        <Links />
        <CTA />
        <DarkMode/>
        </div>
    );
}

export default Navigation;
