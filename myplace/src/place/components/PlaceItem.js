import React, { useContext, useState } from 'react';
import {
  ListItem,
  Grid,
  ButtonGroup,
  Button,
  Typography,
  styled,
  Paper,
} from '@material-ui/core';
import ShowMap from './ShowMap';
import { LoginContext } from '../../shared/context/LoginContext';
import UpdatePlace from '../pages/UpdatePlace';
import GoogleApiWrapper from './Map';

const PlaceItem = (props) => {
  const [isShowMap, setShowMap] = useState(false);
  const [isShowUpdate, setShowUpdate] = useState(false);
  const login = useContext(LoginContext);

  const handleShowMap = () => {
    setShowMap(true);
  };
  const handleCloseMap = () => {
    setShowMap(false);
  };

  const { title, address, description, image, coordinates } = props;
  console.log(isShowMap);

  if (isShowMap === false) {
    return (
      <ListItem>
        <Grid container direction='column' justify='center' alignItems='center'>
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
                {login.isLogin && (
                  <Button onClick={() => setShowUpdate(true)}>Edit</Button>
                )}
                {login.isLogin && (
                  <UpdatePlace
                    isShowUpdate={isShowUpdate}
                    handleClose={() => setShowUpdate(false)}
                  />
                )}

                {login.isLogin && <Button>Delete</Button>}

                <Button onClick={handleShowMap}>View Map</Button>
              </ButtonGroups>
            </Grid>
          </Paper>
        </Grid>
      </ListItem>
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
