import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Grid,
  TextField,
  styled,
} from '@material-ui/core';

const UpdatePlace = (props) => {
  const { isShowUpdate, handleClose } = props;
  return (
    <Dialog open={isShowUpdate} onClose={handleClose}>
      <ContainerDialog>
        <DialogTitle style={{ cursor: 'move' }}>Update place</DialogTitle>
        <Content>
          <Grid container justify='center' direction='column'>
            <InputText variant='outlined' label='Title'></InputText>
            <InputText variant='outlined' label='City'></InputText>
            <InputText
              variant='outlined'
              label='Description'
              multiline
            ></InputText>
          </Grid>
        </Content>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Update
          </Button>
        </DialogActions>
      </ContainerDialog>
    </Dialog>
  );
};

export default UpdatePlace;

const ContainerDialog = styled(Grid)({
  width: '35rem',
  margin: '0 auto',
});

const Content = styled(DialogContent)({
  width: 'auto',
});

const InputText = styled(TextField)({
  marginBottom: '1rem',
});
