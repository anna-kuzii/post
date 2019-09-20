import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './components/Post';
import Comment from "./components/Comment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 615,
    margin: '0 auto'
  }
});

export const App = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.root}
    >
      <Post/>
      <Comment/>
    </Grid>
  )
};

