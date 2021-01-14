import React, { Component } from 'react'

class ZipCard extends Component {

    //constructor
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

    // render ZipCard component
    render() {
        const {locationText, 
            stateName, lat, 
            long, estimatedPopulation, 
            totalWages} = this.props;

        return (
            <div className='container'>
                <h4>{locationText}</h4>
                <ul>
                    <li>State: {stateName}</li>
                    <li>Location: ({lat}, {long})</li>
                    <li>Population (estimated): {estimatedPopulation}</li>
                    <li>Total Wages: {totalWages}</li>
                </ul>
            </div>
        )
    }
}


export default ZipCard;
