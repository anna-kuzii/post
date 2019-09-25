import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";
import { styles } from './style';
import AddComment from '../AddComment';
import Comment from "./Comment";
import Typography from "@material-ui/core/Typography";

const RenderComments = ({ comments, classes, isAnswer = false, isLoading }) => {
  if(isLoading) {
    return <Typography variant="body2" component="p">LOADING...</Typography>
  }

  return (
    comments.map((item) => (
        <div key={item.id} className={classes.root}>
          {!item.isEdit ?
            <Comment
              element={item}
              isAnswer={isAnswer}
              showAnswer={item.comments && item.comments.length}
              isOpen={item.isOpen}
            /> :
            <AddComment
              isEdit={item.isEdit}
              comment={item}
              isAnswer={isAnswer}
            />
          }
          {item.addAnswer && <AddComment parentId={item.id} isAnswer={true} />}
          {(item.comments && item.comments.length && item.isOpen) ?
            <RenderComments comments={item.comments} isAnswer={true} classes /> :
            null
          }
        </div>
      )
    )
  )
};

const mapStateToProps = ({ comments: { comments, isLoading }}) => ({
  comments: comments,
  isLoading
});


export default connect(mapStateToProps)(withStyles(styles)(RenderComments));
