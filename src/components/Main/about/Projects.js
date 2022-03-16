import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import poetic from '../../../images/project/poeticflower.png';
import amadeus from '../../../images/project/amadeus.png';
import { Link } from 'react-router-dom';

const Projects = () => (
  <section class="featured-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
      <div class="row">
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src={poetic} class="card-img" alt="project" />
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">
                    <Link to="poeticflowerx" class="theme-link">
                      PoeticFlowerX.com
                    </Link>
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
                <Link className="btn btn-secondary" to="poeticflowerx">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src={amadeus} class="card-img" alt="project" />
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">
                    <Link to="#" class="theme-link">
                      Employee Dashboard Mockup
                    </Link>
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
        <Link to="portfolio" class="btn btn-primary">
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="mr-2"
          ></FontAwesomeIcon>
          View Portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
