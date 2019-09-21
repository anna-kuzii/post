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

class ShowComment extends Component {
  constructor(props) {
    super(props);

    this.onEditComment = this.onEditComment.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
  }

  onAddAnswer() {
    console.log('Answer!!!!!');
  };

  onEditComment() {
    console.log('EDIT!!!!!');
  };

  onDeleteComment() {
    console.log('Delete!!!!!');
  };

  render() {
    const { classes, comments } = this.props;
    console.log('comments', comments);

    return (
      comments.map((item) => (
          <Card className={classes.root} key={item.id}>
            <CardContent className={classes.commentWrapper}>
              <Typography variant="body2" component="p" className={classes.showComment}>
                {item.text}
              </Typography>
              <ExpandMoreIcon />
            </CardContent>
            <div className={classes.commentBtns}>
              <Fab
                color="primary"
                size="small"
                aria-label="add"
                className={classes.btns}
                onClick={this.onAddAnswer}
              >
                <AddIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="edit"
                size="small"
                className={classes.btns}
                onClick={this.onEditComment}
              >
                <EditIcon />
              </Fab>
              <Fab
                size="small"
                aria-label="delete"
                className={classNames(classes.btns, classes.lastBtn)}
                onClick={this.onDeleteComment}
              >
                <DeleteIcon />
              </Fab>
            </div>
          </Card>
        )
      )
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments.commentsText
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ShowComment));
