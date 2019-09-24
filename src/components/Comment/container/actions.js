import * as CONSTANTS from './constants';

export const addComment = (comment) => ({
  type: CONSTANTS.ADD_COMMENT,
  comment
});

export const deleteComment = (id) => ({
  type: CONSTANTS.DELETE_COMMENT,
  id
});

// EDIT COMMENT MODE ACTIONS
export const editCommentMode = (id, mode) => ({
  type: CONSTANTS.EDIT_COMMENT_MODE,
  id,
  mode
});

export const editCommentModeSuccess = (data) => ({
  type: CONSTANTS.EDIT_COMMENT_MODE_SUCCESS,
  data
});

export const editCommentModeError = (error) => ({
  type: CONSTANTS.EDIT_COMMENT_MODE_ERROR,
  error
});

// EDIT  COMMENT  ACTIONS
export const editComment = (id, commentText) => ({
  type: CONSTANTS.EDIT_COMMENT,
  id,
  commentText
});

export const editCommentSuccess = (data) => ({
  type: CONSTANTS.EDIT_COMMENT_SUCCESS,
  data
});

export const editCommentError = (error) => ({
  type: CONSTANTS.EDIT_COMMENT_ERROR,
  error
});
