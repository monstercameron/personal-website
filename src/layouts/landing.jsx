import React, { Component } from 'react'
//import Sky from 'react-sky'
import {Coalesce} from 'ambient-cbg'
import Index from '../views/index'
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Coalesce/>
                <Index />
            </div>
        );
    }
}

export default LandingPage;