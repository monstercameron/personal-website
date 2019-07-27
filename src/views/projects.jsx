import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import keywords from '../assets/keywords/keywords'
import jsgame15 from '../assets/animations/jsgame15.webp'
import jsgame60 from '../assets/animations/jsgame60.webp'
import mdchem from '../assets/images/mdchem.png'
import mdchemmern from '../assets/images/mdchemmern.png'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleTechnologyImages = () => {
        return keywords.map(keyword => {
            return <img alt={keyword.name} src={keyword.image} className='inline-block m-2' style={{ height: '32px' }} />
        })
    }
    render() {
        return (
            <Container fluid className='text-dark text-center p-0 m-0'>
                <Row className='pl-3 pr-3 mb-3'>
                    <Col className='border' style={{ backgroundColor: 'rgba(255,255,255,.75)' }}>
                        <Row>
                            <Col sm={12}>
                                {this.handleTechnologyImages()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row
                    style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}
                    className='text-dark m-0 p-0'>
                    <Col sm={4} className='m-1 p-2'>
                        <ImageGallery items={[{ original: mdchem }]}
                            style={{ verticalAlign:'middle' }}
                            className='img-fluid'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            slideInterval={10000}
                            showThumbnails={false}
                            disableArrowKeys={true}
                        />
                    </Col>
                    <Col sm={7} className='m-1 p-4 mx-auto'>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.85rem', fontWeight: 'bold' }}>
                                    Url:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto'>

                                <span style={{ fontSize: '1rem' }}>
                                    <a href='https://github.com/monstercameron/mdchem'>
                                        github.com/.../mdchem
                                </a>
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.75rem', fontWeight: 'bold' }}>
                                    Project:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto'>
                                <span style={{ fontSize: '1rem' }}>
                                    MDChem
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.65rem', fontWeight: 'bold' }}>
                                    Description:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto text-left'><span style={{ fontSize: '1rem' }}>
                                MDChem is a data capturing server for a chemistry game designed in unity. The objectives are to manage user credentials/data, and to provide administrative controls and data visualization for the collected data.
                            </span></Col>
                        </Row>
                    </Col>
                </Row>
                <Row
                    style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}
                    className='text-dark m-0 p-0'>
                    <Col sm={4} className='m-1 p-2'>
                        <ImageGallery items={[{ original: mdchemmern }]}
                            className='img-fluid'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            slideInterval={10000}
                            showThumbnails={false}
                            disableArrowKeys={true}
                        />
                    </Col>
                    <Col sm={7} className='m-1 p-4 mx-auto'>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.85rem', fontWeight: 'bold' }}>
                                    Url:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto'>

                                <span style={{ fontSize: '1rem' }}>
                                    <a href='https://github.com/monstercameron/mdchem-mern'>
                                        github.com/.../mdchem-mern
                                </a>
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.75rem', fontWeight: 'bold' }}>
                                    Project:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto'>
                                <span style={{ fontSize: '1rem' }}>
                                    MDChem MERN
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.65rem', fontWeight: 'bold' }}>
                                    Description:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto text-left'><span style={{ fontSize: '1rem' }}>
                                After months of learning I wanted to put my new found knowledge to good use, this is a MERN stack reimplementation of MDChem.
                            </span></Col>
                        </Row>
                    </Col>
                </Row>
                <Row
                    style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}
                    className='text-dark m-0 p-0'>
                    <Col sm={4} className='m-1 p-2'>
                        <ImageGallery
                            items={[{ original: jsgame15 }, { original: jsgame60 }]}
                            className='img-fluid'
                            showFullscreenButton={false}
                            showPlayButton={false}
                            autoPlay={true}
                            slideInterval={10000}
                            showThumbnails={false}
                            disableArrowKeys={true}
                        />
                    </Col>
                    <Col sm={7} className='m-1 p-4 mx-auto'>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.85rem', fontWeight: 'bold' }}>
                                    Url:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto'>

                                <span style={{ fontSize: '1rem' }}>
                                    <a href='https://github.com/monstercameron/js-game'>
                                        github.com/.../js-game
                                </a>
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.75rem', fontWeight: 'bold' }}>
                                    Project:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto'>
                                <span style={{ fontSize: '1rem' }}>
                                    Js-game
                                </span>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col sm={3} className='border-top'>
                                <span style={{ fontSize: '.65rem', fontWeight: 'bold' }}>
                                    Description:
                                </span>
                            </Col>
                            <Col sm={8} className='ml-auto text-left'><span style={{ fontSize: '1rem' }}>
                                I try to attend hackathons and this was the result. It uses the canvas to render sprites. The most interesting thing I implemented was framerate independent animations and a simple motion tweening system.
                            </span></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects