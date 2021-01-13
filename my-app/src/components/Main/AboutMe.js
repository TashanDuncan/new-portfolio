import React from 'react'

const AboutMe = () =>  (
    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
    <div class="container">
        <div class="profile-teaser media flex-column flex-lg-row">
            
            <div class="media-body">
                <h2 class="name font-weight-bold mb-1">Tashan Duncan</h2>
                <div class="tagline mb-3">Web Developer</div>
                <div class="bio mb-4">I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on <a class="link-on-bg" href="blog-home.html">my blog</a>. Want to know how I may help your project? Check out my project <a class="link-on-bg" href="projects.html">portfolio</a> and <a class="link-on-bg" href="resume.html">online resume</a>.
                </div>
                <div class="mb-4">
                    <a class="btn btn-primary mr-2 mb-3" href="portfolio.html"><i class="fas fa-arrow-alt-circle-right mr-2"></i><span class="d-none d-md-inline">View</span> Portfolio</a>
                    <a class="btn btn-secondary mb-3" href="resume.html"><i class="fas fa-file-alt mr-2"></i><span class="d-none d-md-inline">View</span> Resume</a>
                </div>
            </div>
            <img class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src="assets/images/profile-lg.jpg" alt=""/>
        </div>
    </div>
</section>
)

export default AboutMe;