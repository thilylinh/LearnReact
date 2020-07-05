import React, { useRef, useState, useEffect } from 'react';
import { Grid, Avatar, Button, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const UploadImage = (props) => {
  const fileRef = useRef();
  const [file, setFile] = useState();
  const [previewUrl, setPrev] = useState();
  const pickImageHandler = () => {
    console.log('pick image handler', fileRef);
    fileRef.current.click();
  };

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
    console.log('pick file', pickedFile);
    props.onInput(pickedFile);
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPrev(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  console.log('filessss ', props.id);
  return (
    <Container>
      <Button variant='contained' component='label' onClick={pickImageHandler}>
        Upload Image
        <input
          id={props.id}
          name='image'
          ref={fileRef}
          type='file'
          style={{ display: 'none' }}
          accept='.png,.jpg,.jpeg'
          onChange={pickedHandler}
        />
      </Button>
      {previewUrl && <Image src={previewUrl} id={props.id} />}
      {!previewUrl && <Typography>Please pick a image</Typography>}
    </Container>
  );
};
export default UploadImage;

const Container = styled(Grid)({
  padding: '2rem 4rem',
  border: '1px solid #D0D0D0',
  marginTop: '1rem',
  borderRadius: '0.5rem',
});

const Image = styled(Avatar)({
  margin: '0 auto',
  marginTop: '1rem',
  width: '10rem',
  height: '10rem',
});
