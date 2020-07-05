import React, { useContext, useState } from 'react';
import {
  ListItem,
  Grid,
  ButtonGroup,
  Button,
  Typography,
  styled,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import ShowMap from './ShowMap';
import { LoginContext } from '../../shared/context/LoginContext';
import UpdatePlace from '../pages/UpdatePlace';
import GoogleApiWrapper from './Map';
import { Link } from 'react-router-dom';

const PlaceItem = (props) => {
  const [isShowMap, setShowMap] = useState(false);
  const [isShowUpdate, setShowUpdate] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const login = useContext(LoginContext);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      const data = await fetch(`http://localhost:3001/api/places/${props.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      props.onDelete(props.id);
    } catch (err) {
      alert('error delete');
    }
  };

  const handleShowMap = () => {
    setShowMap(true);
  };
  const handleCloseMap = () => {
    setShowMap(false);
  };

  const { title, address, description, image, coordinates } = props;

  if (isShowMap === false) {
    return (
      <>
        <Dialog
          open={showConfirmModal}
          keepMounted
          onClose={cancelDeleteHandler}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle id='alert-dialog-slide-title'>
            {'Do you want delete this place?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>
              Please click Agree to delete this place Or click Cancel to cancel
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelDeleteHandler} color='primary'>
              Cancel
            </Button>
            <Button onClick={confirmDeleteHandler} color='primary'>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <ListItem>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Paper>
              <img src={image} />
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
              >
                <Typography variant='h4'>{title}</Typography>
                <Typography variant='h6'>{address}</Typography>
                <Typography variant='h6'>{description}</Typography>
              </Grid>
              <hr />
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
              >
                <ButtonGroups
                  variant='contained'
                  color='primary'
                  aria-label='contained primary button group'
                >
                  {login.userId === props.creatorID && (
                    <ButtonEdit to={`/places/${props.id}`}>Edit</ButtonEdit>
                  )}

                  {login.userId === props.creatorID && (
                    <Button onClick={showDeleteWarningHandler}>Delete</Button>
                  )}

                  <Button onClick={handleShowMap}>View Map</Button>
                </ButtonGroups>
              </Grid>
            </Paper>
          </Grid>
        </ListItem>
      </>
    );
  } else {
    return (
      <ShowMap
        isShowMap={isShowMap}
        handleClose={handleCloseMap}
        title={title}
        location={coordinates}
      />
    );
  }
};

export default PlaceItem;

const ButtonGroups = styled(ButtonGroup)({
  marginBottom: '1rem',
});

const ButtonEdit = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  background: '#39F563',
  color: 'white',
  width: '5rem',
  textAlign: 'center',
});
