import React, { Component } from "react";
import myPicture1 from "../assets/images/me1.jpg";
import logo from "../assets/images/ec_noring.png";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ visibility: "" }}>
        <div
          className="col-12 p-3 mx-auto text-dark"
          style={{ backgroundColor: "rgba(255,255,255,.75)" }}
        >
          <div className="row">
            <div className="col-8">
              <h2>About Me:</h2>I like to build things. I enjoy thinking about
              how systems should work, designing each component and how they
              function in concert with each other. I go to all the major
              hackathons and occasional meetups. I gain alot of exposure to new
              software and techniques. I have completed the Launchcode bootcamp
              which, in addition to self study, has given me a great foundation
              for Web technologies. also me I am a quick study, love to learn
              and employ new ideas and techniqes, and most importantly I am
              passionate and dedicated to my craft. I am always up for a
              challenge, and you can reach out to me directly via email,
              mr.e.cameron@gmail.com
            </div>
            <div className="col-4">
              <img
                src={myPicture1}
                alt=""
                className="img-fluid rounded shadow img-thumbnail"
              />
              <img
                src={logo}
                alt=""
                className="img-fluid rounded"
                style={{ position: "absolute", left: "1px", bottom: "-100px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
