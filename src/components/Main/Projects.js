import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import poetic from '../../images/project/poeticflower.png'
import amadeus from '../../images/project/amadeus.png'

const Projects = () => (
  <section class="featured-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
      <div class="row">
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img
                  src={poetic}
                  class="card-img"
                  alt="project"
                />
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="project.html" class="theme-link">
                      PoeticFlowerX.com
                    </a>
                  </h5>
                  <p class="card-text">
                    A side project developed for a friend who needed a website
                    for a blog and Ecommerce to sell Prints. I created a custom
                    wordpress theme and a custom contact form Plugin.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Client: PoeticFlowerX</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <div class="link-mask-text">
                <a class="btn btn-secondary" href="project.html">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img
                  src={amadeus}
                  class="card-img"
                  alt="project"
                />
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="project.html" class="theme-link">
                      Employee Dashboard Mockup
                    </a>
                  </h5>
                  <p class="card-text">
                    A mockup for an employee dashboard created with HTML CSS and
                    Vanilla JS. I also used the JavaScript library ChartJS for
                    Data Visualization.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Client: none</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <div class="link-mask-text">
                <a class="btn btn-secondary" href="project.html">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-3">
        <a href="portfolio.html" class="btn btn-primary">
          <i class="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
