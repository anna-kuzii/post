import { select, takeEvery, put, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';
import * as actions from './actions';
import defaultComment from '../assets/comments';

export function* watchCommentsSaga() {
  yield fetchComments();
  yield takeEvery(CONSTANTS.EDIT_COMMENT_MODE, changeCommentsModeAsync);
  yield takeEvery(CONSTANTS.EDIT_COMMENT, changeCommentsAsync);
  yield takeEvery(CONSTANTS.DELETE_COMMENT, deleteCommentsAsync);
}

function fakeAPICall() {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(defaultComment);
      reject(new Error('Time out'));
    }, 500)
  })
}

function* fetchComments() {
  try {
    yield put(actions.fetchCommentPending());

    const results = yield call(fakeAPICall);
    yield put(actions.fetchCommentSuccess(results));
  } catch(error) {
    yield put(actions.fetchCommentError(error));
  }
}

function changeComments(comments, action) {
  return comments.map((item) => {
    if (item.id === action.id) {
      return {
        ...item,
        text: action.commentText,
        isEdit: false,
      }
    } else if (item.comments) {
      return {
        ...item,
        comments: changeComments(item.comments, action)
      };
    }

    return item;
  });
}


function changeCommentsMode(comments, action) {
  return comments.map((item) => {
    if (item.id === action.id) {
      return {
        ...item,
        isEdit: action.mode,
      }
    } else if (item.comments) {
      return {
        ...item,
        comments: changeCommentsMode(item.comments, action)
      };
    }

    return item;
  });
}

function deleteComments(comments, action) {
  return comments.reduce((res, comment) => {
    if(comment.id === action.id) {
      return res;
    } else if (comment.comments) {
      return [...res, {...comment, comments:  deleteComments(comment.comments, action)}];
    }
    return [...res, comment];
  }, []);
}

function* changeCommentsModeAsync(action) {
  try {
    const state = yield select();
    const newComments = changeCommentsMode(state.comments.comments, action);

    yield put(actions.editCommentModeSuccess(newComments));

  } catch (error) {
    yield put(actions.editCommentModeError(error));
  }
}


function* changeCommentsAsync(action) {
  try {
    const state = yield select();
    const newComments = changeComments(state.comments.comments, action);

    yield put(actions.editCommentSuccess(newComments));

  } catch (error) {
    yield put(actions.editCommentError(error));
  }
}

function* deleteCommentsAsync(action) {
  try {
    const state = yield select();
    const newComments = deleteComments(state.comments.comments, action);

    yield put(actions.deleteCommentSuccess(newComments));

  } catch (error) {
    yield put(actions.deleteCommentError(error));
  }
}
