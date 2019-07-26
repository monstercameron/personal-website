import React, { Component } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import history from '../history'
import credits from '../assets/credits/credits'
import myPicture from '../assets/images/mystiq.jpg'
import myPicture1 from '../assets/images/me1.jpg'
import github from '../assets/images/github-sign.png'
import linkedin from '../assets/images/linkedin-logo.png'
import twitter from '../assets/images/twitter-logo.png'
import TagCloud from 'react-tag-cloud';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }
    setShow = (show) => this.setState({ show: show })
    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);
    handleOnHover = (e) => {
        //console.log(e.target.childNodes[0])
        e.target.style.backgroundColor = 'white'
        e.target.style.color = 'black'
        if (e.target.childNodes[0].tagName === 'IMG') {
            e.target.childNodes[0].style.filter = 'invert(0)'
        }
    }
    handleOffHover = (e) => {
        //console.log(e.type)
        e.target.style.backgroundColor = ''
        e.target.style.color = 'white'
        if (e.target.childNodes[0].tagName === 'IMG') {
            e.target.childNodes[0].style.filter = 'invert(1)'
        }
    }
    handleOnClick = (e) => {
        //console.log(e.target, e.target.parentElement.getAttribute('data-link'))
        const target = e.target.getAttribute('data-link') === null ? e.target.parentElement.getAttribute('data-link') : e.target.getAttribute('data-link')
        //console.log(target)
        if (target) {
            history.push(target)
            this.setState({ target: target })
        }
    }
    handleCredits = () => {
        return credits.map(credit => {
            return (
                <div key={credit.file}>
                    <div>
                        {credit.file}
                    </div>
                    <pre>
                        {credit.credit}
                    </pre>
                </div>
            )
        })
    }
    renderRedirect = () => {
        if (this.state.target) {
            this.setState({ target: undefined })
            return <Redirect to={this.state.target} />
        }
    }
    componentDidMount() {
        setInterval(() => {
          this.forceUpdate();
        }, 3000);
      }
    handleWordCloud = () => {
        return (
            <div>
                <img src={twitter} alt='github' style={{ filter: 'invert(1)', height: '20px', verticalAlign: 'middle' }} className='img-fluid' />
            </div>
        )
    }
    render() {
        console.log(this.state)
        return (
            <Container fluid>
                {this.renderRedirect()}
                <Row>
                    <Col>
                        <Row>
                            <Col
                                sm={8}
                                className='rounded p-3 mt-2 mb-5 mx-auto text-white'
                                style={{ backgroundColor: 'rgba(50,50,255,.00)' }}>
                                <Row>
                                    <Col style={{ overflow: 'hidden', height: '400px' }}>
                                        <TagCloud
                                            spiral={'archimedean'}
                                            className='border tag-cloud'
                                            style={{
                                                fontFamily: 'sans-serif',
                                                fontSize: 30,
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                color: 'white',
                                                padding: 5,
                                                width: '100%',
                                                height: '100%'
                                            }}>
                                            {this.handleWordCloud()}
                                        </TagCloud>
                                        {/* <img src={myPicture} alt='Me' className='d-block img-fluid' /> */}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='mx-auto text-center text-capitalize text-monospace'>
                                        <Row className='p-3' style={{ fontSize: '1.5rem' }}>
                                            <Col sm={4}></Col>
                                            <Col sm={4}></Col>
                                            <Col
                                                sm={4}
                                                className='border text-center'
                                                onMouseEnter={this.handleOnHover}
                                                onMouseLeave={this.handleOffHover}
                                                onClick={this.handleOnClick}
                                                data-link='/portfolio'
                                            >
                                                <i
                                                    className="material-icons"
                                                    style={{ verticalAlign: 'middle' }}
                                                >
                                                    code
                                                </i>
                                                <span className='ml-3'>Portfolio</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='p-3 ml-3 mr-3 text-dark' style={{ backgroundColor: 'white' }}>
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <h2>About Me</h2>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6>I like to build things. I enjoy thinking about how systems should work, designing each component and how they function in concert with each other. </h6>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6>I go to all the major hackathons and occasional meetups. I gain alot of exposure to new software and tecniques.</h6>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h6>I have completed the Launchcode bootcamp which, in addition to self study, has given me a great foundation for Web technologies.</h6>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <img alt='also me' src={myPicture1} className='img-fluid img-thumbnail' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='mt-3'>
                                                <h6>I am a quick study, love to learn and employ new ideas and techniqes, and most importantly I am passionate and dedicated to my craft.</h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col >
                                                <h6>I am always up for a challenge, and you can reach out to me directly vis a vis my email, <a href='mailto:mr.e.cameron@gmail.com'>mr.e.cameron@gmail.com</a></h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='mx-auto text-center text-capitalize text-monospace'>
                                        <Row className='p-3' style={{ fontSize: '1.5rem' }}>
                                            <Col sm={4} className='border text-center' onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOffHover} onClick={this.handleOnClick} data-link='/github'>
                                                <img src={github} alt='github' style={{ filter: 'invert(1)', height: '20px', verticalAlign: 'middle' }} className='img-fluid' />
                                                <span className='ml-3'>Github</span>
                                            </Col>
                                            <Col sm={4} className='border text-center' onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOffHover} onClick={this.handleOnClick} data-link='/linkedin'>
                                                <img src={linkedin} alt='github' style={{ filter: 'invert(1)', height: '20px', verticalAlign: 'middle' }} className='img-fluid' />
                                                <span className='ml-3'>LinkedIn</span>
                                            </Col>
                                            <Col sm={4} className='border text-center' onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOffHover} onClick={this.handleOnClick} data-link='/twitter'>
                                                <img src={twitter} alt='github' style={{ filter: 'invert(1)', height: '20px', verticalAlign: 'middle' }} className='img-fluid' />
                                                <span className='ml-3'>Twitter</span>
                                            </Col>
                                        </Row>
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
                    <Col
                        sm={1}
                        className='border text-center text-white m-1 p-1'
                        onClick={this.handleShow}
                    >
                        Credits
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Index;