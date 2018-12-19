import React from "react";

export default class Footer extends React.Component {
    constructor(){
        super();
        this.state = {}
    }
    render() {
        return(
            <div id="footer">
                <h2>Engineer - Artist - Climber</h2>
                <ul>
                    <li>
                        <h2>Aaron Krueger</h2>
                    </li>
                    <li>
                        <ol>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/iclimbrockslol/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.github.com/y04nqt">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/aaron-krueger-5230/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Copyright © 2018 ASCENDIN. All rights reserved.</p>
                    </li>
                </ul>
            </div>
        );
    }
}