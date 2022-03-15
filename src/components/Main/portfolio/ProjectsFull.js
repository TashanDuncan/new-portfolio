import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import poetic from '../../../images/project/poeticflower.png';
import amadeus from '../../../images/project/amadeus.png';

const ProjectsFull = () => (
  <section class="projects-list px-3 py-5 p-md-5">
    <div class="container">
      <div class="text-center">
        <ul id="filters" class="filters mb-5 mx-auto pl-0">
          <li class="type active mb-3 mb-lg-0" data-filter="*">
            All
          </li>
          <li class="type  mb-3 mb-lg-0" data-filter=".frontend">
            Frontend
          </li>
          <li class="type  mb-3 mb-lg-0" data-filter=".fullstack">
            Full Stack
          </li>
          <li class="type  mb-3 mb-lg-0" data-filter=".backend">
            Backend
          </li>
        </ul>
      </div>
      <div class="project-cards row isotope">
        <div class="isotope-item col-md-6 mb-5 fullstack">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src={poetic} class="card-img" alt="project" />
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="poeticflowerx" class="theme-link">
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
                <a class="btn btn-secondary" href="poeticflowerx">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="isotope-item col-md-6 mb-5 frontend">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src={amadeus} class="card-img" alt="project" />
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="amadeus" class="theme-link">
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
                <a class="btn btn-secondary" href="amadeus">
                  <FontAwesomeIcon icon={faEye} className="mr-2" />
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsFull;
