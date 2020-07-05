import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import {
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

class UserItem extends Component {
  render() {
    const { image, name, placeCount, id } = this.props;
    return (
      <Grid
        container
        alignContent='center'
        alignItems='center'
        justify='center'
      >
        <Container>
          <Links to={`/${id}/places`}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Travis Howard' src={image} />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component='span'
                      variant='body2'
                      color='textPrimary'
                    >
                      {name}
                    </Typography>
                    <Typography>
                      {placeCount} {placeCount === 1 ? 'place' : 'places'}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Links>
        </Container>
      </Grid>
    );
  }
}

export default UserItem;

const Container = styled(Paper)({
  background: '#16F1FF',
  width: '14rem',
  marginBottom: '1rem',
  '&:hover': {
    background: 'yellow',
  },
});
const Links = styled(Link)({
  textDecoration: 'none',
});
