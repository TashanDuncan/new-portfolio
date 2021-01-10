import React from 'react'
import Tashan from '../../images/profile.png'
import Socials from './Socials'

const Profile = () => {
    return(
    <div className="profile-section pt-3 pt-lg-0">
        <img class="profile-image mb-3 rounded-circle mx-auto" src={Tashan} alt="Tashan" />			
        <div class="bio mb-3">Hi, my name is Tashan Duncan and I'm a Web Developer. Welcome to my personal website!</div>
    <Socials />
        <hr/>
    </div>
)}

export default Profile