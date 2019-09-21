import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './components/Post';
import Comment from "./components/Comment";
import { styles } from './style';
import { withStyles } from "@material-ui/core/styles";

const App = ({ classes }) =>
  <Grid
    container
    direction="column"
    justify="center"
    className={classes.root}
  >
    <Post/>
    <Comment/>
  </Grid>

export default withStyles(styles)(App);
