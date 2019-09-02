import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Homepage from './Components/HomePage';
import AboutMe from './Components/AboutMe';


function App() {
  return (
    <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
    <NavigationBar/>
    <Homepage/> 
    <AboutMe/>
    </body>
  );
}

export default App;
