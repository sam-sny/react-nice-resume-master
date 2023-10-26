import React, { Component } from "react";
import Fade from "react-awesome-reveal";
import Homepage from "../asset/Homepage.jpg";
import ImageGallery from "../asset/ImageGallery.png";
import LoginUI from "../asset/LoginUI.png";
import onPage from "../asset/onPage.png";

/*let id = 0;*/
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    /*const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });*/

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
                <div className="portfolio-item">

                <a  className="item-wrap" href="https://movies-discovery.netlify.app/"><img src={Homepage} alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} /></a>
                <a  className="item-wrap" href="https://image-play-box.netlify.app/"><img src={ImageGallery} alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} /></a>
                <a  className="item-wrap" href="https://dev.helpmeout.tech/logIn"><img src={LoginUI} alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} /></a>
                <a  className="item-wrap" href="https://on-page-assistant.netlify.app/"><img src={onPage} alt="" style={{height:"200px", width:"200px", objectFit:"cover"}} /></a>
                
                </div>

{/*<div className="portfolio-item" >

  <a className="item-wrap"  href="https://movies-discovery.netlify.app/">
    <img src={Homepage} alt="" style={{ height: "200px", width: "200px", objectFit: "cover" }} />
    <div className="item-info">
      <h5>Movies Discovery</h5>
      <p>A website for discovering and exploring movies.</p>
    </div>
  </a>



  <a className="item-wrap" href="https://image-play-box.netlify.app/">
    <img src={ImageGallery} alt="" style={{ height: "200px", width: "200px", objectFit: "cover" }} />
    <div className="item-info">
      <h5>Image Play Box</h5>
      <p>An image gallery website for viewing and playing with images.</p>
    </div>
  </a>



  <a className="item-wrap" href="https://dev.helpmeout.tech/logIn">
    <img src={LoginUI} alt="" style={{ height: "200px", width: "200px", objectFit: "cover" }} />
    <div className="item-info">
      <h5>Login UI</h5>
      <p>An interactive login user interface.</p>
    </div>
  </a>



  <a className="item-wrap" href="https://on-page-assistant.netlify.app/">
    <img src={onPage} alt="" style={{ height: "200px", width: "200px", objectFit: "cover" }} />
    <div className="item-info">
      <h5>On-Page Assistant</h5>
      <p>An assistant tool for on-page tasks.</p>
    </div>
  </a>

</div>*/}


              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
