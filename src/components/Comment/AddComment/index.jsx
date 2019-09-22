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
      comment: {
        text: !this.props.isEdit ? '' : this.props.comment.text
      }
    };
  }

  onAddComment() {
    if(!this.props.isEdit) {
      this.props.addComment(this.state.comment);
      this.setState({
        comment: {text: ''}
      });
    } else {
      this.props.editComment(this.props.comment.id, this.state.comment.text);
    }
  };

  handleCommentChange(e) {
    this.setState({
      comment: {
        text: e.target.value,
      }
    });
  };

  onCloseComment() {
    this.setState({
      comment: {
        text: this.props.comment.text,
      }
    });
    this.props.editCommentMode(this.props.comment.id, false);
  }

  render() {
    const { classes, isEdit } = this.props;

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
