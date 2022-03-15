import React from 'react';
import photo from '../../../../../images/project/poeticflower.png'
const Meta = () => (

      <div class="project-meta media flex-column flex-md-row p-4 theme-bg-light">
        <img
          class="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block"
          src={photo}
          alt=""
        />
        <div class="media-body">
          <div class="client-info">
            <h3 class="client-name font-weight-bold mb-4">PoeticFlowerX</h3>
            <ul class="client-meta list-unstyled">
              <li class="mb-2">
                <i class="fas fa-industry fa-fw mr-2"></i>
                <strong>Industry:</strong> Creative Arts
              </li>
              <li class="mb-2">
                <i class="fas fa-users fa-fw mr-2"></i>
                <strong>Size:</strong> 1
              </li>
              <li class="mb-2">
                <strong>
                  <i class="fas fa-link fa-fw mr-2"></i>Website:
                </strong>
                <a class="theme-link" href="#">
                {' '}poeticflowerx.com
                </a>
              </li>
            </ul>
            <div class="client-bio mb-4">
              Short description of the client and project requirements. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor.
            </div>
            <h4 class="subheading mb-3">Project Requirements</h4>
            <ul class="mb-0">
              <li class="mb-2">
                Requirement lorem ipsum dolor sit amet, consectetuer adipiscing
                elit.
              </li>
              <li class="mb-2">
                Requirement donec pede justo, fringilla vel, aliquet nec.
              </li>
              <li class="mb-2">
                Requirement phasellus ullamcorper ipsum rutrum nunc.{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>

);

export default Meta;
