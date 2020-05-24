import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import EditProfile from './EditProfile';

class Profile extends Component {
  state = {
    isEdit: false,
  };

  handleOpenEdit = () => {
    this.setState({ isEdit: true });
  };
  handleClose = () => {
    this.setState({ isEdit: false });
  };
  render() {
    return (
      <Container elevation={3}>
        <ButtonEditProfile onClick={this.handleOpenEdit}>
          <EditTwoToneIcon />
        </ButtonEditProfile>
        <EditProfile
          isEdit={this.state.isEdit}
          handleClose={this.handleClose}
        />
        <Grid container direction='column' justify='center' alignItems='center'>
          <UserAvatar alt='Linh avatar' src='' />
          <EditImage>
            <EditIcon>
              <input
                type='file'
                hidden='hidden'
                onChange={this.handleUploadClick}
              />
            </EditIcon>
          </EditImage>
          <Typography variant='h5'>Thi Ly Linh</Typography>
          <Typography variant='h6'>I'm a .Net developer</Typography>
          <LocationOn color='primary' />
          <span>Da Nang city</span>
          <hr />
          <ButtonLogout>Logout</ButtonLogout>
        </Grid>
      </Container>
    );
  }
}

export default Profile;

const Container = styled(Paper)({
  position: 'relative',
});
const ButtonLogout = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  marginBottom: '1rem',
});

const UserAvatar = styled(Avatar)({
  marginTop: '2rem',
  width: '7rem',
  height: '7rem',
  marginBottom: '1rem',
});

const EditImage = styled(Button)({
  position: 'absolute',
  color: '#52EFF9',
  top: '9rem',
  right: '10rem',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const ButtonEditProfile = styled(Button)({
  color: '#0BB430',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});
