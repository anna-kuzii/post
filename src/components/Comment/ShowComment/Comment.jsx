import React, { Component } from "react";
import classNames from "classnames";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { styles } from './style';
import { deleteComment, editCommentMode, addAnswerMode } from "../container/actions";
import connect from "react-redux/es/connect/connect";

class Comment extends Component {
  onAddAnswerMode(id) {
    this.props.addAnswerMode(id, true);
  };

  onEditCommentMode(id) {
    this.props.editCommentMode(id, true);
  };

  onDeleteComment(id) {
    this.props.deleteComment(id);
  };

  render() {
    const {classes, element, isAnswer} = this.props;

    return (
      <Card className={classNames(classes.root, isAnswer && classes.answerWrapper)}>
        <CardContent className={classes.commentWrapper}>
          <Typography variant="body2" component="p" className={classes.showComment}>
            {element.text}
          </Typography>
          <ExpandMoreIcon/>
        </CardContent>
        <div className={classes.commentBtns}>
          {!isAnswer && <Fab
            color="primary"
            size="small"
            aria-label="add"
            className={classes.btns}
            onClick={() => this.onAddAnswerMode(element.id)}
          >
            <AddIcon/>
          </Fab>}
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            className={classes.btns}
            onClick={() => this.onEditCommentMode(element.id)}
          >
            <EditIcon/>
          </Fab>
          <Fab
            size="small"
            aria-label="delete"
            className={classNames(classes.btns, classes.lastBtn)}
            onClick={() => this.onDeleteComment(element.id)}
          >
            <DeleteIcon/>
          </Fab>
        </div>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  deleteComment,
  editCommentMode,
  addAnswerMode
};


export default connect(null, mapDispatchToProps)(withStyles(styles)(Comment));
