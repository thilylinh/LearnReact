import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class EditProfile extends Component {
  render() {
    const { isEdit, handleClose } = this.props;
    return (
      <Dialog
        open={isEdit}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Edit profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update to your profile, please enter your information here.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='User Name'
            type='email'
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Password'
            type='password'
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Bio'
            type='text'
            fullWidth
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='City'
            type='text'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditProfile;
