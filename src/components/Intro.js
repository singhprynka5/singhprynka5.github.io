import React from "react";

const Intro = () => (
    <section id="intro">
        <div className="inner">
            <h2><span>Priyanka Singh</span></h2>
            <p>I am <b>a Software Developer.</b></p>
            <span> Connect with me</span>
            <div className="tools">
                <span style={{ marginRight: "20px" }}>
                    <a href="https://in.linkedin.com/in/priyanka-singh-998936104" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                </span>
                <span style={{ marginRight: "20px" }}>
                    <a href="mailto:singhprynka5@gmail.com"><i className="fa fa-envelope-o"></i></a>
                </span>
            </div>
        </div>
    </section>
);

export default Intro;
