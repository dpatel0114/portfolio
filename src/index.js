import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import './css/animate.css';
import './css/flexslider.css';
import './fonts/icomoon/style.css';

import './css/bootstrap.css';
import './css/style.css'
// import './js/scripts.js'
// import * from './js/vendor/jquery.min.js'
// import './js/custom.js'

// import './js/vendor/popper.min.js'
// import './js/vendor/bootstrap.min.js'
// import './js/vendor/jquery.easing.1.3.js'
// import './js/vendor/jquery.stellar.min.js'
// import './js/vendor/jquery.waypoints.min.js'
{/* <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> */}
{/* <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script> */}
{/* <script src="js/custom.js"></script> */}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
