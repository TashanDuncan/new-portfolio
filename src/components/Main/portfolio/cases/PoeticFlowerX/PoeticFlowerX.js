import React from 'react';
import Contact from '../Contact';
import Header from './Header';
import Main from './Main';
import Meta from './Meta';

const PoeticFlowerX = () => {
  return (
    <div>
      <Header />
      <section class="project px-3 py-5 p-md-5">
        <div class="container">
          <Meta />
          <Main />
          
        </div>
        
      </section>
      <Contact/>
    </div>
  );
};

export default PoeticFlowerX;
