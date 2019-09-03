import React from 'react'
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Homepage from './Components/HomePage';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Blog from './Components/Blog'
import Contenct from './Components/Contect';
import Footer from './Components/Footer';


function App() {
  return (
    <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
    {/* <script src="./js/custom.js"></script> */}
    {/* <script src="./js/vendor/jquey.min.js"></script> */}

        <NavigationBar/>
        <Homepage/> 
        <AboutMe/>
        <Projects/> 
        <Blog/>
        <Contenct/>
        <Footer/>
    </body>
  );
}

export default App;
