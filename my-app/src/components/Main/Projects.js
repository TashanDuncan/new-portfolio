import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEye, 
} from '@fortawesome/free-solid-svg-icons'

const Projects = () => (
    <section class="featured-section p-3 p-lg-5">
        <div class="container">
            <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
            <div class="row">
					<div class="col-md-6 mb-5">
						<div class="card project-card">
							<div class="row no-gutters">
								<div class="col-lg-4 card-img-holder">
									<img src="assets/images/project/project-1.jpg" class="card-img" alt="image"/>
								</div>
								<div class="col-lg-8">
									<div class="card-body">
										<h5 class="card-title"><a href="project.html" class="theme-link">Project Heading</a></h5>
										<p class="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
										<p class="card-text"><small class="text-muted">Client: Google</small></p>
									</div>
								</div>
							</div>
							<div class="link-mask">
								<a class="link-mask-link" href="project.html"></a>
								<div class="link-mask-text">
									<a class="btn btn-secondary" href="project.html">
                                    <FontAwesomeIcon icon={faEye} className="mr-2" />View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
                </div>
                <div class="text-center py-3"><a href="portfolio.html" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
        </div>
    </section>
);

export default Projects