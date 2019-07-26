import React, { Component } from 'react'
//import Sky from 'react-sky'
import {Shift} from 'ambient-cbg' //Coalesce, Shift, Swirl, Aurora,  Pipeline
import Index from '../views/index'
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Shift/>
                <Index />
            </div>
        );
    }
}
export default LandingPage;