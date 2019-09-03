import React from 'react';

const Footer =() => {

  return ( 

    <footer class="site-footer">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-12 text-center">
            <p class="text-center" >
              <a href="https://github.com/dpatel0114" target="_blank" class="social-item"><span class="fab fa-github fa-lg"></span></a>
              <a href="https://www.linkedin.com/in/dharapatel91/" target="_blank" class="social-item"><span class="fab fa-linkedin fa-lg"></span></a>
              <a href="https://medium.com/@1991dharapatel" target="_blank" class="social-item"><span class="fab fa-medium fa-lg"></span></a>
            </p>
          </div>
        </div>
        <div class="row">
            <p class="col-12 text-center">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
            {/* Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a> */}
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
