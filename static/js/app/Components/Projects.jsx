import React from "react";

export default class Projects extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return(
            <div id="projects" className="page">
                <ol>
                    <li id="build-profile-container" className="featureDescriptionContainers">
                        <section className="featureDescriptionContentWrapper">
                            <h2>Work Experience</h2>
                            <p>Frontend Web Engineer - <a id="spot-link" class="work-links" href="https://spotinc.com/" target="_blank">Spot Inc</a></p>
                            <p>Fullstack Software Engineer - <a id="doublemap-link" class="work-links" href="https://www.doublemap.com/" target="_blank">DoubleMap</a> & <a id="tapride-link" class="work-links" href="https://www.tapridemobile.com" target="_blank">TapRide</a></p>
                            <p>Freelance Consulting Engineer</p>
                        </section>
                    </li>
                    <li id="activunite-container" className="featureDescriptionContainers">
                        <section className="featureDescriptionContentWrapper">
                            <h2><a href="https://www.activunite.com" target="_blank">ActivUnite</a></h2>
                            <ol>
                                <li class="social-au-links">
                                    <a target="_blank" href="https://www.facebook.com/ActivUnite/">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li class="social-au-links">
                                    <a target="_blank" href="https://www.instagram.com/activunite/">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="social-au-links">
                                    <a target="_blank" href="https://twitter.com/ActivUnite">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="social-au-links">
                                    <a target="_blank" href="https://www.linkedin.com/company/activunite/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ol>
                            <p>Founded in 2018</p>
                            <p>Chief Technology Officer, Director of Design and Marketing, and Co-founder</p>
                            <p>Gym Management & Automation</p>
                        </section>
                    </li>
                    <li id="friend-finder-container" className="featureDescriptionContainers">
                        <section className="featureDescriptionContentWrapper">
                            <h2>Hello, Universe!</h2>
                            <p><a>Channel link</a></p>
                            <p>This channel centers around my climbing hobby and programming education. Here I upload code tutorials, podcasts, and things that interest me in general. Some videos may be food-centric, climbing feats, or code topics.</p>
                            <p>I hope to make this channel into a place where I can express my career interests and hobbies. As I grow, I expect it to become a marketing tool for merchandise focused around programming and climbing with deep artistic designs. I believe this will be a platform for me to create informative and inspirational videos to propel my teaching abilities preparing me for my ultimate dream of creating a positive impact on the world.</p>
                        </section>
                    </li>
                </ol>
            </div>
        );
    }
}