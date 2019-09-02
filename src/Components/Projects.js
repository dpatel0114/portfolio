import React from 'react';
import ProjectDetail from '../Detail/ProjectDetail';

// import { Card, CardDeck, Container } from 'react-bootstrap';


const Projects =() => {

  return (

    <section class="site-section" id="section-portfolio">
     {/* <div class= 'container'></div> */}
      {/* <div class='center' > */}
    {/* <div class="row"> */}
          <div class="section-heading text-center col-md-12">
              <h2><strong>Projects</strong></h2>
            </div>
    {/* </div> */}
    <div class="row" style={{margin: "3%"}}>
   { ProjectDetail.map(p => 
    <div class="card text-center " style= {{width: '28%', marginLeft:"2%"}}>
        <a href="https://investiversity.firebaseapp.com" target="_blank"> <img  class='card-link' src={p.img_url}  class="card-img-top" alt="..."/> </a>
        <div class="card-body">
         <h3> <a href="https://investiversity.firebaseapp.com" target="_blank" class="card-title card-link"> <strong> {p.title} </strong> </a> </h3>
          <p class="card-text"> {p.description} </p>
       
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> {p.framework} </li>
            {/* <li class="list-group-item"> {p.project_url} </li> */}
            <li class="list-group-item"> {p.credentials} </li>
          </ul>
        
          {/* <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> */}
        </div>

    </div>  ) }
    </div>
    {/* </div> */}
     </section>
  )
}

export default Projects;
