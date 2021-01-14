import React, { Component } from 'react'

class ZipCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locationText: props.locationText,
            stateName: props.stateName,
            lat: props.lat,
            long: props.long,
            estimatedPopulation: props.estimatedPopulation,
            totalWages: props.totalWages
        }
    };

    render() {
        return (
            <div className='container'>
                <h4>{this.state.locationText}</h4>
                <ul>
                    <li>State: {this.state.stateName}</li>
                    <li>Location: ({this.state.lat}, {this.state.long})</li>
                    <li>Population (estimated): {this.state.estimatedPopulation}</li>
                    <li>Total Wages: {this.state.totalWages}</li>
                </ul>
            </div>
        )
    }
}


export default ZipCard;
