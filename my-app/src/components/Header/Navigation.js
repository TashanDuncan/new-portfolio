import React from 'react';
import Links from './Links';
import Profile from './Profile';



const Navigation = () => {
    return (
        <div id="navigation" class="collapse navbar-collapse flex-column" >
        <Profile />
        <Links />
        </div>
    );
}

export default Navigation;
