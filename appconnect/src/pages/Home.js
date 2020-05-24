import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Profile from '../component/Profile';
import Post from '../component/Post';
import PostContent from '../component/PostContent';

class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={8} xs={12}>
          <Grid
            item
            sm={11}
            justify='center'
            alignItems='center'
            alignContent='center'
          >
            <Post></Post>
            <PostContent></PostContent>
          </Grid>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
