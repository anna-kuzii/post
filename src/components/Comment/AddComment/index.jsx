import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {CardContent, Card, TextareaAutosize, Fab} from '@material-ui/core';
import { styles } from './style';
import { addComment } from '../container/actions';
import connect from "react-redux/es/connect/connect";
import AddIcon from '@material-ui/icons/Add';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.onAddComment = this.onAddComment.bind(this);
  }

  onAddComment() {
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  };

  handleCommentChange(e) {
    this.setState({ comment: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent className={classes.commentWrapper}>
          <TextareaAutosize
            className={classes.commentInput}
            rows={1}
            rowsMax={3}
            aria-label="comment"
            placeholder="Add a comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </CardContent>
        <div className={classes.commentBtns}>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            className={classes.commentAdd}
            onClick={this.onAddComment}
          >
            <AddIcon />
          </Fab>
        </div>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  addComment,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddComment));
