import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Post from './components/Post';
import AddComment from "./components/Comment/AddComment";
import RenderComments from "./components/Comment/ShowComment";
import { styles } from './style';


const App = ({ classes }) =>
  <Grid
    container
    direction="column"
    justify="center"
    className={classes.root}
  >
    <Post />
    <RenderComments />
    <AddComment />
  </Grid>

export default withStyles(styles)(App);
