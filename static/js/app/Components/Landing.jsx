import React from "react";
import $ from 'jquery';

export default class Landing extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = $(window).scrollTop();

        if(scrollTop < 15){
            $('nav > h4').addClass('inverted');
            $('nav').addClass('darkBg');
        }else{
            $('nav > h4').removeClass('inverted')
            $('nav').removeClass('darkBg');
        }
    }

    render() {
        return(
            <div id="landing" className="page">
                <h2 id="title">Hello, Universe!</h2>
                <div id="floating-logo"></div>
                <h2 id="tagline">Creating meaningful solutions for tough issues!</h2>
            </div>
        );
    }
}