import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import myPicture from '../assets/images/me1.jpg'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container
                className='text-dark text-center m-0'>
                >
                <Row
                    style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}
                    className='text-dark'>
                    <Col sm={3} className='m-1 p-2'>
                        <ImageGallery items={[{ original: myPicture }]} className='img-fluid' />
                    </Col>
                    <Col sm={8} className='m-1 p-1 mx-auto'>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-bottom'>
                                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                    Project:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto border'>
                            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                    MDChem
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-bottom'>
                                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                    Url:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto border'>

                            <span style={{ fontSize: '1rem' }}>
                                <a href='https://github.com/monstercameron/mdchem'>
                                    github.com/.../mdchem
                                </a>
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-bottom'>
                                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                                    Description:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto border'><span style={{ fontSize: '1rem' }}>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects