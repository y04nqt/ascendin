import React from "react";

export default class Contact extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            first: '',
            last: '',
            phone: '',
            company: ''
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    // saving this for later implementation of form contact
    // handleChange(event) {
    //     switch (event.target.name.toLowerCase()){
    //         case 'email':
    //             this.setState({email: event.target.value});
    //             break;
    //         case 'fname':
    //             this.setState({first: event.target.value});
    //             break;
    //         case 'lname':
    //             this.setState({last: event.target.value});
    //             break;
    //         case 'number':
    //             this.setState({phone: event.target.value});
    //             break;
    //         case 'company':
    //             this.setState({company: event.target.value});
    //             break;
    //         default:
    //             break;
    //         }
    // }

    render() {
        return(
            <div id="contact" className="page">
                <section>
                    <h2>Resources</h2>
                    <a class="contact-links" href="static/images/Aaron-Krueger-Resume.pdf" download>Download Résumé</a>
                    <a class="contact-links" href="mailto:aaronkrueger1@gmail.com?subject=Website connection!">Contact</a>
                </section>
            </div>
        );
    }
}