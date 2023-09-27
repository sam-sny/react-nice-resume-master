import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Homepage from "../asset/Homepage.jpg";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
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
                <span><a href="https://movies-discovery.netlify.app/"><img src={Homepage} alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} /></a></span>
                <span style={{marginLeft:"20px"}}><a href="https://movies-discovery.netlify.app/"><img src={Homepage} alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} /></a></span>
             
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
