import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import history from '../history'
import credits from '../assets/credits/credits'
import myPicture from '../assets/images/mystiq.jpg'
import github from '../assets/images/github-sign.png'
import linkedin from '../assets/images/linkedin-logo.png'
import twitter from '../assets/images/twitter-logo.png'
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
                                    <Col style={{ overflow: 'hidden' , height:'400px'}}>
                                        <img src={myPicture} alt='Me' className='d-block img-fluid' />
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
                                    <Col className='p-5 ml-3 mr-3 text-dark' style={{ backgroundColor: 'white' }}>
                                        <Row>
                                            <Col>
                                                <h3>About Me:</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h4>

                                                </h4>
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
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
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