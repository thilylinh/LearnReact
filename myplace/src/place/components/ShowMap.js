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
        <Typography>{title}</Typography>
        <GoogleApiWrapper />
        <Button onClick={handleClose}>Close</Button>
      </Grid>
    </Container>
  );
};

export default ShowMap;

// const DialogMap = styled(Dialog)({
//   width: '35rem',
//   margin: '0 auto',
//   height: 'auto',
// });
const Container = styled(Paper)({
  width: '960px',
  height: 'auto',
});
