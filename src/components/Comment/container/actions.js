import * as CONSTANTS from './constants';

// ADD ANSWER MODE ACTIONS
export const addAnswerMode = (id, mode) => ({
  type: CONSTANTS.ADD_ANSWER_MODE,
  id,
  mode
});

// ADD COMMENT ACTIONS
export const addComment = (comment, parentId) => ({
  type: CONSTANTS.ADD_COMMENT,
  comment,
  parentId
});

// DELETE COMMENT ACTIONS
export const deleteComment = (id) => ({
  type: CONSTANTS.DELETE_COMMENT,
  id
});

export const deleteCommentSuccess = (data) => ({
  type: CONSTANTS.DELETE_COMMENT_SUCCESS,
  data
});

export const deleteCommentError = (error) => ({
  type: CONSTANTS.DELETE_COMMENT_ERROR,
  error
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
