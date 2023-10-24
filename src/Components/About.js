import React, { Component } from "react";
import Fade from "react-awesome-reveal";
import pic1 from "../asset/pic1.jpg";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    /*const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;*/

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={pic1}
                alt="Nordic Giant Profile Pic"
                style={{objectFit:"cover"}}
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>Hello! I'm SAM_SNY, a passionate Front-End Developer with a strong affinity for crafting exceptional user experiences using React.js. With a creative mindset and an eye for detail, I thrive on turning innovative ideas into interactive and user-friendly web applications.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>SAM_SNY Projects</span>
                    <br />
                    <span>
                      4 Ikot Oko Idio
                      <br />
                      Uyo Akwa-Ibom, 502146
                    </span>
                    <br />
                    <span>09167380934</span>
                    <br />
                    <span>sampsonekpo6@gmail.com</span>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
