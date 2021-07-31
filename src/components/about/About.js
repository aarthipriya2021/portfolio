import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> This is Aarthi priya and I am currently seeking job as React JS developer. I've done plenty of hands-on projects with my knowledge of React JS. I learnt React JS with help of <a href="https://www.udemy.com/certificate/UC-4068aa59-d533-40ab-8264-e77639610ddf/">Udemy course</a> If I got hired I could spend my time to provide valuable output as expected. So, give me a chance to prove my skill. </p>
                         <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.
                        </p>
                    </div>
            </div>
        )
    }
}

export default About;