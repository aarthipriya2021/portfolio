import React, { Component } from 'react';
import classes from './Education.module.css';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                     <span  className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Higher Education  <span>2014-2016</span></h2>
                                                <p>I have completed my higher education from ZKM Hr Secondary School with major subjects as Physics,Chemistry & Maths with 77.5 percentage in State board. </p>
                                                </div>
                                            </article>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Undergraduation at CPA College <span>2016-2019</span></h2>
                                                 {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                                <p>I have completed my undergraduation in B.Sc(Chemistry) from <a href='https://cpacollege.org/' target="_blank">CPAC </a>. </p>
                                                </div>
                                            </article>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Work <span>November 2019 - April 2020</span></h2>
                                                <p>I have worked as a trainee  teacher for six months during 2019 .</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
     
        )
    }
}

export default Education;
