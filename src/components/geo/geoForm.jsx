import React, { Component } from 'react';
import { getPosition } from './getPosition';


//controlled components
export class GeoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { coords: '' };
		this.state = { value: 'Get your geoposition'};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({ value: event.target.value });

		const options = {
		    enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
        };
		const promise = getPosition(options);
		promise
            .then(
              (result) => {
                this.setState({ coords: `latitude: ${result.coords.latitude} , longtitude: ${result.coords.longitude}`});
                this.setState({ value: this.state.coords})
              },
              (error) => {
                this.setState({ coords: `${error}`});
              },
            );
		event.preventDefault();
	}

	render() {
		return (
            <div className="geo">
                <input type="hidden" name="coord" value={this.state.coords}/>
                <button className="button" onClick={this.handleClick} >{this.state.value}</button>
            </div>
		);
	}
}