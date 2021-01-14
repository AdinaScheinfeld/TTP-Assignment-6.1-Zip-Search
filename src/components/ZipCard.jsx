import React, { Component } from 'react'
import './ZipCard.css'

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
                <div className='aZipCard'>
                    <h4 className='locationHeader'>{locationText}</h4>
                    <div className='listContainer'>
                        <ul>
                            <li>State: {stateName}</li>
                            <li>Location: ({lat}, {long})</li>
                            <li>Population (estimated): {estimatedPopulation}</li>
                            <li>Total Wages: {totalWages}</li>
                        </ul>    
                    </div>            
                </div>

            </div>
        )
    }
}


export default ZipCard;
