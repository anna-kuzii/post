import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { styles } from './style';
import connect from "react-redux/es/connect/connect";
import Typography from "@material-ui/core/Typography";
import classNames from 'classnames';
import { deleteComment, editCommentMode } from '../container/actions';
import AddComment from '../AddComment';

class ShowComment extends Component {

  onAddAnswer() {
    console.log('Answer!!!!!');
  };

  onEditCommentMode(id) {
    this.props.editCommentMode(id, true);
  };

  onDeleteComment(id) {
    this.props.deleteComment(id);
  };

  render() {
    const { classes, comments } = this.props;

    return (
      comments.map((item) => (
          <div key={item.id}>
            {!item.isEdit ?
              <Card className={classes.root}>
                <CardContent className={classes.commentWrapper}>
                  <Typography variant="body2" component="p" className={classes.showComment}>
                    {item.text}
                  </Typography>
                  <ExpandMoreIcon/>
                </CardContent>
                <div className={classes.commentBtns}>
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="add"
                    className={classes.btns}
                    onClick={this.onAddAnswer}
                  >
                    <AddIcon/>
                  </Fab>
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    size="small"
                    className={classes.btns}
                    onClick={() => this.onEditCommentMode(item.id)}
                  >
                    <EditIcon/>
                  </Fab>
                  <Fab
                    size="small"
                    aria-label="delete"
                    className={classNames(classes.btns, classes.lastBtn)}
                    onClick={() => this.onDeleteComment(item.id)}
                  >
                    <DeleteIcon/>
                  </Fab>
                </div>
              </Card> :
              <AddComment isEdit={item.isEdit} comment={item} />
            }
          </div>
        )
      )
    )
  }
}

const mapStateToProps = ({ comments: { comments }}) => ({
  comments: comments
});

const mapDispatchToProps = {
  deleteComment,
  editCommentMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ShowComment));
