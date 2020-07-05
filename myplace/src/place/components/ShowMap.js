import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  Paper,
  Button,
  styled,
  Grid,
} from '@material-ui/core';

import GoogleApiWrapper from './Map';
const ShowMap = (props) => {
  const { isShowMap, handleClose, title, location } = props;
  console.log('location show map', location);
  return (
    // <DialogMap
    //   onClose={handleClose}
    //   aria-labelledby='customized-dialog-title'
    //   open={isShowMap}
    // >
    //   <Grid container direction='column' justify='center' alignItems='center'>
    //     <DialogTitle id='customized-dialog-title' onClose={handleClose}>
    //       {title}
    //     </DialogTitle>
    //     <DialogContent>
    //       <GoogleApiWrapper location={location} />
    //     </DialogContent>

    //     <DialogActions>
    //       <Button autoFocus onClick={handleClose} color='primary'>
    //         Close
    //       </Button>
    //     </DialogActions>
    //   </Grid>
    // </DialogMap>
    <Container>
      <Grid
        container
        direction='column'
        alignContent='center'
        alignItems='center'
        justify='center'
      >
        <Title>{title}</Title>
        <GoogleApiWrapper />
        <ButtonClose onClick={handleClose}>Close</ButtonClose>
      </Grid>
    </Container>
  );
};

export default ShowMap;

const Container = styled(Paper)({
  width: '100vw',
  height: 'auto',
});

const Title = styled(Typography)({
  marginTop: '1rem',
  marginBottom: '1rem',
  fontSize: '1.5rem',
});

const ButtonClose = styled(Button)({
  marginTop: '1rem',
  marginBottom: '0.5rem',
  background: 'red',
  color: 'white',
});
