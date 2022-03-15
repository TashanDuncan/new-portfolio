import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faPhp,
  faSass,
  faHtml5,
  faCss3Alt,
  faWordpressSimple,
  faLaravel,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => (
  <section class="overview-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">My Current Tech Stack</h2>
      <div class="section-intro mb-5">
        I have more than 10 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies I use. Want to find out more about my experience?
        Check out my <a href="resume.html">online CV</a> and
        <a href="portfolio.html">project portfolio</a>.
      </div>
      <div class="row">
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon className="mr-2" icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <h3 class="item-title">HTML &amp; CSS</h3>
            <div class="item-desc">
              Able to convert design mockups to semantic, compliant and SEO
              friendly HTML & CSS with emphasis on accessibility for devices
              such as screen readers.
            </div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon icon={faPhp} />
            </div>
            <h3 class="item-title">PHP</h3>
            <div class="item-desc">

            </div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon icon={faWordpressSimple} />
            </div>
            <h3 class="item-title">WordPress</h3>
            <div class="item-desc">
              Experienced with the WordPress theme and plugin development
              archetchure with woocommerce for transactional websites.
            </div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon icon={faLaravel} />
            </div>
            <h3 class="item-title">Laravel</h3>
            <div class="item-desc">

            </div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon className="mr-2" icon={faDatabase} />
            </div>
            <h3 class="item-title">SQL</h3>
            <div class="item-desc">

            </div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <h3 class="item-title">JavaScript</h3>
            <div class="item-desc">

            </div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon icon={faLinux} />
            </div>
            <h3 class="item-title">Linux CLI</h3>
            <div class="item-desc">test</div>
          </div>
        </div>

        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon">
              <FontAwesomeIcon icon={faSass} />
            </div>
            <h3 class="item-title">Sass</h3>
            <div class="item-desc">
              For more complex design work i use Sass in place of regular CSS as
              this enables things like variables, nested rules, inline imports
              and more!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
