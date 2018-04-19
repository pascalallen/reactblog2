import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
	  static defaultProps = {
	  	    center: {
      lat: 59.95,
      lng: 30.33
    },
	    zoom: 11
	  };
  constructor(props) {
    super(props);

    this.state = { lat: null, lng: null, center: { lat: null, lng: null }, city: '' };
  }


    componentWillReceiveProps(nextProps) {
	  	if (this.props.lat !== nextProps.lat) {
	      	this.setState({ lat: parseFloat(nextProps.lat) });
	  	}
	  	if (this.props.lng !== nextProps.lng) {
	      	this.setState({ lng: parseFloat(nextProps.lng) });
	  	}
	  	if (this.props.lng !== nextProps.lng && this.props.lat !== nextProps.lat) {
	  		this.setState({ center: { lat: parseFloat(nextProps.lat), lng: parseFloat(nextProps.lng)} });
	  	}
	  	if (this.props.city !== nextProps.city) {
	  		this.setState({ city: nextProps.city });
	  	}
	  }
 
  render() {
  	const { center } = this.state;
    return (
    		<center>
    	<div className="map">
	      <GoogleMapReact
	        bootstrapURLKeys={{ key: "AIzaSyDYhaXE9ksgevs-NdoHXx0k1wsiDPlQjNA" }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
	      >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.city}
          />
	      </GoogleMapReact>
      </div>
	      </center>
    );
  }
}

export default GoogleMap;