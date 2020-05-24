import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import LocationOn from '@material-ui/icons/LocationOn';

import { styled } from '@material-ui/core/styles';

export class Profile extends Component {
  render() {
    return (
      <Container>
        <Grid
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Avatar></Avatar>
          <Typography>Thi Ly Linh</Typography>
          <Typography variant='h5'>Thi Ly Linh</Typography>
          <Typography variant='h6'>I'm a .Net developer</Typography>
          <LocationOn color='primary' />
          <span>Da Nang city</span>
        </Grid>
      </Container>
    );
  }
}

export default Profile;

const Container = styled(Paper)({
  margin: '0 auto',
  width: '960px',
});
