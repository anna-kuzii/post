import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Fab from '@material-ui/core/Fab';
import { styles } from './style';
import { addComment, editComment, editCommentMode } from '../container/actions';
import connect from "react-redux/es/connect/connect";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: !this.props.isEdit ? '' : this.props.comment.text
    };
  }

  onAddComment(parentId) {
    if(!this.props.isEdit) {
      this.props.addComment(this.state.commentText, parentId);
      this.setState({
        commentText: ''
      });
    } else {
      this.props.editComment(this.props.comment.id, this.state.commentText);
    }
  };

  handleCommentChange(e) {
    this.setState({
      commentText: e.target.value,
    });
  };

  onCloseComment() {
    this.setState({
      commentText: this.props.comment.text,
    });
    this.props.editCommentMode(this.props.comment.id, false);
  }

  render() {
    const { classes, isEdit, isAnswer, parentId } = this.props;

    return (
      <Card className={classNames(classes.root, isAnswer && classes.answerWrapper)}>
        <CardContent className={classes.commentWrapper}>
          <TextareaAutosize
            className={classes.commentInput}
            rows={1}
            rowsMax={3}
            aria-label="comment"
            placeholder="Add a comment"
            value={this.state.commentText}
            onChange={(e) => this.handleCommentChange(e)}
          />
        </CardContent>
        <div className={classes.commentBtns}>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            className={classes.commentAdd}
            onClick={() => this.onAddComment(parentId)}
          >
            <AddIcon />
          </Fab>
          {isEdit && <Fab
            color="secondary"
            size="small"
            aria-label="add"
            className={classNames(classes.commentAdd, classes.lastBtn)}
            onClick={() => this.onCloseComment()}
          >
            <CloseIcon />
          </Fab>}
        </div>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  addComment,
  editComment,
  editCommentMode
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddComment));
