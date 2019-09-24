import { select, takeEvery, put } from 'redux-saga/effects';
import * as CONSTANTS from './constants';
import * as actions from './actions';

export function* watchCommentsSaga() {
  yield takeEvery(CONSTANTS.EDIT_COMMENT_MODE, changeCommentsModeAsync);
  yield takeEvery(CONSTANTS.EDIT_COMMENT, changeCommentsAsync);
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

