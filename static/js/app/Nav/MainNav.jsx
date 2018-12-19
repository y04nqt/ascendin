import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

export default class MainNav extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'ActivUnite',
            menuOpen: false,
            showMobileMenu: 'hide'
        }
        this.scrollToSection = this.scrollToSection.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.showHiddenMenu = this.showHiddenMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        // TODO: Need to refactor to the react way
        let scrollTop = $(window).scrollTop();
        if(scrollTop < $('#projects').position().top){
            if(!$('body').hasClass('secondaryBackground')){
                return;
            }
            // remove secondaryBackground if body 
            //has class & position is correct
            $('body').removeClass('secondaryBackground');
            $('body').addClass('primaryBackground');
        }else{
            $('body').removeClass('primaryBackground');
            $('body').addClass('secondaryBackground');
        }
    }
    showHiddenMenu(){
        if(!this.state.menuOpen){
            // $('nav > ul').removeClass('hide');
            this.setState({menuOpen: true, showMobileMenu: 'show'});
        }else{
            // $('nav > ul').addClass('hide');
            this.setState({menuOpen: false, showMobileMenu: 'hide'});
        }
    }
    scrollToSection(section){
        switch(section){
            case 'landing':
                $('html, body').animate({
                    scrollTop: $("#landing").offset().top
                }, 500, function(){
                    $('#thumbs-up').blur();
                    $('#tagline').focus();
                });
                break;
            case 'about':
                $('html, body').animate({
                    scrollTop: $("#about").offset().top - 92
                }, 500);
                break;
            case 'projects':
                // -73 to account for nav
                $('html, body').animate({
                    scrollTop: $("#projects").offset().top - 92
                }, 500);
                break;
            case 'contact':
                // -73 to account for nav
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top -92
                }, 500);
                break;
            default:
                alert('Please reload the page')
                break;
        }
        if(this.state.menuOpen){
            $('nav > ul').addClass('hide');
            this.setState({menuOpen: false});
        }
    }
  render () {
    return(
        <div>
            <nav>
                <h4 id="thumbs-up" onClick={() => this.scrollToSection('landing')}>
                    <i className="material-icons">thumb_up</i>
                </h4>
                <span id="small-screen-menu-btn" onClick={() => this.showHiddenMenu()}>
                    <i className="material-icons">menu</i>
                </span>
                <ul className={this.state.showMobileMenu}>
                    <li><span onClick={() => this.scrollToSection('about')}>About</span></li>
                    <li><span onClick={() => this.scrollToSection('projects')}>Projects</span></li>
                    <li><span onClick={() => this.scrollToSection('contact')}>Contact</span></li>
                </ul>
            </nav>
        </div>
    );
  }
}