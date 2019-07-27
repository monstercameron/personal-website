import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col className='border text-white'>
                        test
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects;