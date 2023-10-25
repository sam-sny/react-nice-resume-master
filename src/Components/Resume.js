import React, { Component } from "react";
import Slide from "react-awesome-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = (
          <div key="education">
          <h3>University Of Agriculture Abeokuta</h3>
          <p className="info">
            computer-science <span>&bull;</span>
            <em className="date">graduated in 2020</em>
          </p>
          <p>I gained proficiency in various programming languages, which serves as the foundation for developing software and applications. I also gained understanding on how to efficiently organize and manipulate data which is crucial for solving real-world problems and optimizing computer programs.</p>
        </div>);
      

    const work = (
        <div key="work">
          <h3>Awesome Design Studio</h3>
          <p className="info">
          Senior UX God
            <span>&bull;</span> <em className="date">March 2017 - February 2018</em>
          </p>
          <p>At Awesome Design Studio, I was at the forefront of turning design concepts into seamless, intuitive, and visually stunning web applications. I worked closely with world-class designers and collaborated with cross-functional teams to craft user experiences that set new industry standards.</p>
        </div>
      );
   

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
