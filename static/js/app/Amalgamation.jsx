import React from "react";
import ReactDOM from "react-dom";

import Landing from "./Components/Landing"
import Projects from "./Components/Projects"
import About from "./Components/About"
import MainNav from "./Nav/MainNav"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

export default class Amalgamation extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'ASCENDIN'
        }
    }
    
  render () {
    return( 
        <div id="amalgamation">
            <MainNav />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
  }
}