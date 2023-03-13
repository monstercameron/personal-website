import React, { Component } from "react";
// import myPicture1 from "../assets/images/me1.jpg";
import myPicture2 from "../assets/images/portrait2023.jpg";
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
            <div className="col-md-4 col-sm-12">
              <img
                src={myPicture2}
                alt=""
                className="img-fluid rounded shadow img-thumbnail"
              />
              <img
                src={logo}
                alt=""
                className="img-fluid rounded"
                style={{ position: "absolute", left: "1px", top: "50%" }}
              />
            </div>
            <div className="col-md-8 col-sm-12" style={{ fontSize: "1.25em" }}>
              <h2>About Earl Cameron</h2>I am a builder at heart, passionate about conceptualizing and designing systems that work seamlessly in concert with each other. You'll often find me at major hackathons and meetups, eager to explore new software and techniques. With a solid foundation in web technologies from completing the Launchcode bootcamp, as well as extensive self-study, college courses and work experience. I am a quick learner and always eager to employ new ideas and techniques. Most importantly, I am dedicated to my craft and driven by a strong sense of passion. If you have a challenge in mind, feel free to reach out to me directly at mr.e.cameron@gmail.com - I'm always up for a new adventure!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
