import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";
import { styles } from './style';
import AddComment from '../AddComment';
import Comment from "./Comment";

const RenderComments = ({comments, classes, isAnswer = false}) =>
  comments.map((item) => (
      <div key={item.id} className={classes.root}>
        {!item.isEdit ?
          <Comment element={item} isAnswer={isAnswer}/> :
          <AddComment isEdit={item.isEdit} comment={item} isAnswer={isAnswer}/>
        }
        {item.addAnswer && <AddComment parentId={item.id} />}
        {item.comments && item.comments.length &&
        <RenderComments comments={item.comments} isAnswer={true} classes/>}
      </div>
    )
  );

const mapStateToProps = ({comments: {comments}}) => ({
  comments: comments
});


export default connect(mapStateToProps)(withStyles(styles)(RenderComments));
