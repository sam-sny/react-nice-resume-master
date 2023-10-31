import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      contactSubject: '',
      contactMessage: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { contactName, contactEmail, contactSubject, contactMessage } = this.state;

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactName, contactEmail, contactSubject, contactMessage }),
      });
      console.log(response);
      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        if (response.status === 400) {
        alert('Error sending contact email');
      } else if (response.status === 500) {
        alert('Internal Server Error');
      } else {
        alert('Error sending contact email');
      }
    }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  render() {
    if (!this.props.data) return null;

    

    /*const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;*/

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">Write a message to get in contact with me</p>
            </div>
          </div>
        </Fade>

        <div className="row">
      {/*  <Slide left duration={1000}> */}
            <div className="eight columns">

              <form action="/send-email" method="post" id="contactForm" name="contactForm" onSubmit={this.handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactName"
                      name="contactName"
                      value={this.state.contactName}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      value={this.state.contactEmail}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      value={this.state.contactSubject}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      value={this.state.contactMessage}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="ima" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

            </div>
       {/*   </Slide> */}

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  SAM_SNY
                  <br />
                  4 ikot oko Idio <br />
                  Uyo, Akwa-Ibom-State 502104<br />
                  <span>09167380934</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                    Working on a new project and loving the simplicity of #ReactJS. Component-based development makes everything so modular and clean! 🔧
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                    Web accessibility matters! Don't forget to test your sites with screen readers and follow WCAG guidelines. Everyone deserves a great online experience. ♿️
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
