import React from "react";

export default class AboutUs extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return(
            <div id="about" className="page">
                <ul>
                    <li>
                        <h2>Aaron Krueger<br/>Software Engineer</h2>
                        <p>From building data portals for users to designing
                        application mock-ups, climbing the Earth's rocky walls,
                        or capturing nature's creation I seek to understand
                        the subject and produce.
                        </p>
                    </li>
                    <li>
                        <span className="iconGroup">
                            <a href="https://www.youtube.com/channel/UC_Cazf0InKheWZYtSEtz0Og" target="_blank">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </span>
                        <span className="iconGroup">
                            <a href="https://www.github.com/y04nqt" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </span>
                        <span className="iconGroup">
                            <a href="https://www.linkedin.com/in/aaron-krueger-5230/" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </span>
                    </li>
                    { /* need to work out a blurb here */ }
                    { /* <li>
                        <h2>My Vision</h2>
                        <p></p>
                    </li> */}
                </ul>
            </div>
        );
    }
}