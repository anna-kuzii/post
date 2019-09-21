import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Fab from '@material-ui/core/Fab';
import { styles } from './style';
import { addComment } from '../container/actions';
import connect from "react-redux/es/connect/connect";
import AddIcon from '@material-ui/icons/Add';
import uuid from 'uuid/v4';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        id: null,
        text: ''
      }
    };
  }

  onAddComment() {
    this.props.addComment(this.state.comment);
    this.setState({
      comment: {text: ''}
    });
  };

  handleCommentChange(e) {
    this.setState({
      comment: {
        id: uuid(),
        text: e.target.value,
      }
    });
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
            value={this.state.comment.text}
            onChange={(e) => this.handleCommentChange(e)}
          />
        </CardContent>
        <div className={classes.commentBtns}>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            className={classes.commentAdd}
            onClick={() => this.onAddComment()}
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
