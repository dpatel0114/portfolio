import React from 'react';


const AboutMe = () => {

return (

  <section class="site-section" id="section-about">
      <div class="container">
        <div class="row mb-5 align-items-center">
          <div class="col-lg-4 pr-lg-5 mb-5 mb-lg-0">
            <img src="/images/dharapic.png" alt="Image placeholder" class="img-fluid"/>
          </div>
          <div class="col-lg-5 pl-lg-5">
            <div class="section-heading">
              <h2>About <strong>Me</strong></h2>
            </div>
            <p class="lead"> Full stack web developer with a passion for creating robust designs. Critical thinker, work ethic and able to work well independently or as part of a multi-functional team.</p>
            <p class="mb-5  ">Experienced in Ruby on Rails, React, Redux, JavaScript, PostgreSQL, HTML, CSS, GitHub, Bootstrap, Travis CI, and API.</p>

            <p>
              <a href="images/Resume - Dhara Patel 082919.pdf" target="_blank" class="btn btn-secondary px-4 py-2 btn-sm">Download Resume</a>
            </p>
          </div>
        </div>
      </div>
    </section>

)



}

export default AboutMe;
