import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { styles } from './style';


const Comment = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.commentWrapper}>
        <TextareaAutosize
          className={classes.commentInput}
          rows={1}
          rowsMax={3}
          aria-label="comment"
          placeholder="Add a comment"
        />
        <ExpandMoreIcon/>
      </CardContent>
    </Card>
  )
};

export default withStyles(styles)(Comment);
