import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      const imageStyle = {
        objectFit: "cover",
        width: "200px", // Adjust the width as per your requirements
        height: "150px", // Adjust the height as per your requirements
      };

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
          <a href={projects.url} target="_blank" rel="noopener noreferrer">
            <Zmage alt={projects.title} src={projectImage} style={imageStyle}/>
            </a>
            <div style={{ textAlign: "center", color: "black" }}>{projects.title}</div>
            <div style={{ textAlign: "center", fontSize: "1.1rem", margin:"1rem"}}>{projects.category}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
