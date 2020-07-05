import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Paper, styled, Grid, Typography, Button } from '@material-ui/core';

export class Maps extends Component {
  render() {
    const { title, handleClose } = this.props;
    console.log('tiaaa', title);
    return (
      <div style={style}>
        <Map google={this.props.google} zoom={11} style={style}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1> Linh </h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQG2EzwrRWF6zxAcTteFhEz7bv79uVwnw',
})(Maps);

const style = {
  width: '90vw',
  height: '90vh',
};
