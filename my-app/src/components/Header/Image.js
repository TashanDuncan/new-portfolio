import React from 'react'
import Tashan from '../../images/profile.png'

const Image = () => {
    return(
        <div>
        <img class="profile-image mb-3 rounded-circle mx-auto" src={Tashan} alt="Tashan" />			
        <div class="bio mb-3">Hi, my name is Tashan Duncan and I'm a web Developer. Welcome to my personal website!</div>
        </div>
    )}

export default Image;
