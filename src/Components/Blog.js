import React from 'react';
import BlogDetail from '../Detail/BlogDetail'


const Blog = () => {

  return (

    <section class="site-section" id="section-blog">
    {/* <div style={{margin: '3%'}}> */}
    {/* <div class="row"> */}
          <div class="section-heading text-center col-md-12">
          <h2>Blog on <strong>Medium</strong></h2>
            </div>
    {/* </div> */}
    <div class='row' style={{margin:"3%"}}>
    { BlogDetail.map(b=> 

    <div class="card text-center" style= {{width: '28%', margin: '2%'}}>
        <a href={b.url} target="_blank"> <img  class='card-link' src={b.img_url}  class="card-img-top" alt="..."/> </a>
        <div class="card-body">
         <h3> <a href={b.url} target="_blank" class="card-title card-link "> <strong> {b.title}</strong>  </a> </h3>
          <p class="card-text"> {b.description} </p>

        </div>
    </div>  ) }
    </div>
    {/* </div> */}
    </section>
  )
}

export default Blog;