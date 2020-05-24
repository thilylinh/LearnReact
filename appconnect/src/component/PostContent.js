import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DetailsIcon from '@material-ui/icons/Details';
import { styled } from '@material-ui/styles';

import PostDetails from './Post/PostDetails';

class PostContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetails: false,
    };
  }
  handleShow = () => {
    this.setState({ isShowDetails: true });
  };
  handleClose = () => {
    this.setState({ isShowDetails: false });
  };
  render() {
    return (
      <Container elevation={3}>
        <Grid container direction='row'>
          <AvatarUser alt='Linh' src='' />
          <Grid direction='column'>
            <Typography>Thi Ly Linh</Typography>
            <Typography>this is a posst</Typography>
            <LikeAndComment container direction='row'>
              <Typography>
                1
                <LikeButton>
                  <FavoriteIcon />
                </LikeButton>
              </Typography>
              <Typography>
                3
                <CommentButton>
                  <CommentIcon />
                </CommentButton>
              </Typography>
            </LikeAndComment>
          </Grid>
          <DeleteButton>
            <DeleteForeverIcon />
          </DeleteButton>
          <DetailsButton onClick={this.handleShow}>
            <DetailsIcon />
          </DetailsButton>
          <PostDetails
            isShow={this.state.isShowDetails}
            isClose={this.handleClose}
          />
        </Grid>
      </Container>
    );
  }
}

export default PostContent;

const Container = styled(Paper)({
  padding: '1rem',
  position: 'relative',
});

const AvatarUser = styled(Avatar)({
  width: '7rem',
  height: '7rem',
  marginRight: '2rem',
});

const LikeAndComment = styled(Grid)({
  marginTop: '3rem',
});

const DeleteButton = styled(Button)({
  position: 'absolute',
  top: '4rem',
  right: '3rem',
  color: 'red',
  backgroundColor: 'white',
});

const LikeButton = styled(Button)({
  color: 'red',
});

const CommentButton = styled(Button)({
  color: '#4AF03C',
});

const DetailsButton = styled(Button)({
  position: 'absolute',
  top: '7rem',
  right: '3rem',
  color: 'blue',
  backgroundColor: 'white',
});
