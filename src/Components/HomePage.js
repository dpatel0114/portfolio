import React from 'react';



const HomePage = () => {
  // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    // <section class="site-hero" style={{backgroundColor: "black"}} id="section-home" data-stellar-background-ratio="0.5">
    <div>
     {/* <section class="site-hero" style={{backgroundImage: "images/blog_1.jpg"}} id="section-home" data-stellar-background-ratio="0.5"> */}
          <section class="site-hero home-bg"  id="section-home" data-stellar-background-ratio="0.5">


      <div class="container">
        <div class="row intro-text align-items-center justify-content-center">
          <div class="col-md-10 text-center">
            <h1 class="site-heading site-animate"> I'm <strong>Dhara Patel</strong></h1>
            <h3 class=" site-subheading mb-4 site-animate"> <strong> A Full Stack Web devloper. </strong> </h3>
            <p><a href="#section-about" class="smoothscroll btn btn-primary px-4 py-3">More On Me</a></p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HomePage;