import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Post } from './components/Post';

export const App = () =>
  <Grid
    container
    direction="row"
    justify="center"
  >
    <Post />
  </Grid>;

