import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import credits from "../assets/credits/credits";
import github from "../assets/images/github-sign.png";
import linkedin from "../assets/images/linkedin-logo.png";
import twitter from "../assets/images/twitter-logo.png";
import jamaica from "../assets/images/jamaican.jpg";
import confetti from "../assets/images/confetti.png";
import bob from "../assets/audio/bob.mp3";
import keywords from "../assets/keywords/keywords";
import Sky from "react-sky";
import { Shift } from "ambient-cbg"; //Coalesce, Shift, Swirl, Aurora,  Pipeline
import "./style.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, lang: "us", confetti: false };
  }
  setShow = (show) => this.setState({ show: show });
  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);
  navigationButtonHandler = () => {
    if (this.props.location.pathname === "/") {
      return "Portfolio";
    } else if (this.props.location.pathname === "/portfolio") {
      return "About Me";
    } else {
      return "About Me";
    }
  };
  handleOnClick = (e) => {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/portfolio");
    } else if (this.props.location.pathname === "/portfolio") {
      this.props.history.push("/");
    } else {
      this.props.history.push("/");
    }
  };
  handleCredits = () => {
    return credits.map((credit, index) => {
      return (
        <div key={`credit-${index}`}>
          <div>{credit.file}</div>
          <pre>{credit.credit}</pre>
        </div>
      );
    });
  };
  handleWordCloud = () => {
    let res = {};
    keywords.map((keyword, index) => {
      return (res[index] = keyword.image);
    });
    //console.log(res)
    return res;
  };
  handleWordCloudJamaica = () => {
    return { 0: jamaica };
  };
  jamaica = () => {
    const jamaica = document.querySelector("#bob");
    // console.log('paused', jamaica.paused)
    if (jamaica.paused) {
      jamaica.play();
      this.setState({ lang: "jam" });
    } else {
      jamaica.pause();
      this.setState({ lang: "us" });
    }
  };
  confetti = () => {
    this.setState({ confetti: !this.state.confetti });
  };
  render() {
    // console.log(this.props, this.state);
    return (
      <Container fluid style={{ backgroundColor: "" }}>
        <Shift className="" />
        {this.state.confetti === true || this.state.lang === "jam" ? (
          <Sky
            className="border"
            images={
              this.state.lang === "us"
                ? this.handleWordCloud()
                : this.handleWordCloudJamaica()
            }
            how={
              100
            } /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
            time={60} /* time of the animation. Dfaults at 20s */
            size={"32px"} /* size of the rendered images. Defaults at 150px */
            background={
              "palettedvioletred"
            } /* color of background. Defaults to none */
          />
        ) : (
          ""
        )}
        <Row>
          <Col>
            <Row>
              <Col
                sm={8}
                className="rounded p-3 mt-2 mb-5 mx-auto text-white"
                style={{ backgroundColor: "rgba(50,50,255,.00)" }}
              >
                <Row className="p-3">
                  <Col
                    className="border p-3"
                    style={{ backgroundColor: "rgba(255,255,255,)" }}
                  >
                    <Row className="">
                      <Col sm={11} className="">
                        <h1
                          style={{
                            fontFamily: "Great Vibes, cursive",
                            fontSize: "3rem",
                          }}
                        >
                          Earl Cameron
                        </h1>
                        <h5>Full Stack Developer</h5>
                      </Col>
                      <Col>
                        <Row>
                          <Col sm={12} className="p-1">
                            <img
                              alt="jamaican"
                              src={jamaica}
                              className="img-fluid shadow-lg d-block mx-auto cursor jamaica"
                              style={{ height: "28px" }}
                              onClick={this.jamaica}
                            />
                          </Col>
                          <Col sm={12} className="p-1">
                            <img
                              alt="confetti"
                              src={confetti}
                              className="img-fluid shadow-lg d-block mx-auto cursor confetti"
                              style={{ height: "28px" }}
                              onClick={this.confetti}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="mx-auto text-center text-capitalize text-monospace">
                    <Row className="pr-3 pl-3" style={{ fontSize: "1rem" }}>
                      <Col sm={4} />
                      <Col sm={4} />
                      <Col
                        sm={4}
                        className="border text-center menu-link"
                        onClick={this.handleOnClick}
                      >
                        <i
                          className="material-icons"
                          style={{ verticalAlign: "middle" }}
                        >
                          code
                        </i>
                        <span className="ml-3">
                          {this.navigationButtonHandler()}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="mx-auto text-center text-capitalize text-monospace">
                    <Row
                      className="pl-3 pr-3 mb-3"
                      style={{ fontSize: "1rem" }}
                    >
                      <Col sm={4} className="border menu-link">
                        <i
                          className="material-icons"
                          style={{ verticalAlign: "middle" }}
                        >
                          short_text
                        </i>
                        <span className="ml-3">
                          <Link className="noShowAnchor" to="/blog">
                            Blog
                          </Link>
                          {/* <a
                            href={`http://earlcameron.com`}
                            className="noShowAnchor"
                            target="new"
                          >
                          </a> */}
                        </span>
                      </Col>
                      {/* <Col sm={4} className="border menu-link">
                        <i
                          className="material-icons"
                          style={{ verticalAlign: "middle" }}
                        >
                          code
                        </i>
                        <span className="ml-3">
                          <a
                            href={`http://vscode.earlcameron.com`}
                            className="noShowAnchor"
                            target="new"
                          >
                            Code-Server
                          </a>
                        </span>
                      </Col> */}

                      <Col sm={4} className="border menu-link">
                        <i
                          className="material-icons"
                          style={{ verticalAlign: "middle" }}
                        >
                          rss_feed
                        </i>
                        <span className="ml-3">
                          <a
                            href={`http://rss.earlcameron.com`}
                            className="noShowAnchor"
                            target="new"
                          >
                            TTRSS
                          </a>
                        </span>
                      </Col>

                      <Col sm={4} className="border text-center menu-link">
                        <Link
                          to="/resume"
                          style={{ textDecoration: "none", color: "white" }}
                          target="_blank"
                        >
                          <span
                            className="material-icons"
                            style={{ verticalAlign: "middle" }}
                          >
                            receipt
                          </span>
                          <span className="ml-3">Resume/Cv</span>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div id="content-top">{this.props.view}</div>
                <Row
                  className="pr-3 pl-3 pb-3 mt-3"
                  style={{ fontSize: "1.1rem" }}
                >
                  <Col sm={4} className="border text-center menu-link pb-1">
                    <a
                      href="https://github.com/monstercameron"
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={github}
                        alt="github"
                        className="img-fluid menu-link-img"
                      />
                      <span className="ml-3">Github</span>
                    </a>
                  </Col>
                  <Col sm={4} className="border text-center menu-link">
                    <a
                      href="https://www.linkedin.com/in/earl-cameron-9211a058/"
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedin}
                        alt="github"
                        className="img-fluid menu-link-img"
                      />
                      <span className="ml-3">LinkedIn</span>
                    </a>
                  </Col>
                  <Col sm={4} className="border text-center menu-link">
                    <a
                      href="https://twitter.com/monstercameron"
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={twitter}
                        alt="github"
                        className="img-fluid menu-link-img"
                      />
                      <span className="ml-3">Twitter</span>
                    </a>
                  </Col>
                  <Col
                    sm={4}
                    className="border menu-link"
                    onClick={this.handleShow}
                  >
                    <i
                      className="material-icons"
                      style={{ verticalAlign: "middle" }}
                    >
                      fullscreen
                    </i>
                    <span className="ml-3">Credits</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Attribution</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.handleCredits()}</Modal.Body>
          </Modal>
        </Row>
        <Row>
          <Col>
            <audio id="bob" src={bob} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Main);
