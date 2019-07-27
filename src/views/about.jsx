import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import myPicture1 from '../assets/images/me1.jpg'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Row style={{ visibility: '' }}>
                <Col className='p-3 ml-3 mr-3 text-dark' style={{ backgroundColor: 'rgba(255,255,255,.75)' }}>
                    <Row>
                        <Col sm={10} className=''>
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
                                    <h6>I go to all the major hackathons and occasional meetups. I gain alot of exposure to new software and techniques.</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6>I have completed the Launchcode bootcamp which, in addition to self study, has given me a great foundation for Web technologies.</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={2} className=''>
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
                            <h6>I am always up for a challenge, and you can reach out to me directly via email, <a href='mailto:mr.e.cameron@gmail.com'>mr.e.cameron@gmail.com</a></h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default About;