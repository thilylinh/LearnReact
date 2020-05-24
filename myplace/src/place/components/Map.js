import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Paper, styled, Grid, Typography, Button } from '@material-ui/core';

export class Maps extends Component {
  render() {
    const { title, handleClose } = this.props;
    console.log('tiaaa', title);
    return (
      <Map google={this.props.google} zoom={11} style={style}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1> Linh </h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQG2EzwrRWF6zxAcTteFhEz7bv79uVwnw',
})(Maps);

const ShowMap = styled(Map)({
  width: '100px',
  height: '100px',
});

const style = {
  width: '100%',
  height: '100%',
};
