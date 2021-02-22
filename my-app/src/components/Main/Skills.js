import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faPhp, faSass, faHtml5, faCss3Alt, faWordpressSimple, faLaravel,} from '@fortawesome/free-brands-svg-icons'
import {faDatabase } from '@fortawesome/free-solid-svg-icons'

const Skills = () => (
    <section class="overview-section p-3 p-lg-5">
    <div class="container">
        <h2 class="section-title font-weight-bold mb-3">What I do</h2>
        <div class="section-intro mb-5">I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a href="resume.html">online resume</a> and <a href="portfolio.html">project portfolio</a>.</div>
        <div class="row">

            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon icon={faReact}/></div>
                    <h3 class="item-title">React</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>

            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon icon={faWordpressSimple}/></div>
                    <h3 class="item-title">WordPress</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>
            

            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon icon={faPhp}/></div>
                    <h3 class="item-title">PHP</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>

            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon icon={faLaravel}/></div>
                    <h3 class="item-title">Laravel</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>
            
            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon className="mr-2" icon={faDatabase}/></div>
                    <h3 class="item-title">SQL</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>

            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon icon={faJsSquare}/></div>
                    <h3 class="item-title">Vanilla JavaScript</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.</div>
                </div>
            </div>
            
            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon className="mr-2" icon={faHtml5}/><FontAwesomeIcon icon={faCss3Alt}/></div>
                    <h3 class="item-title">HTML &amp; CSS</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>
            <div class="item col-6 col-lg-3">
                <div class="item-inner">
                    <div class="item-icon"><FontAwesomeIcon icon={faSass}/></div>
                    <h3 class="item-title">Sass</h3>
                    <div class="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
                </div>
            </div>
        </div>
        
    </div>
</section>
)

export default Skills;