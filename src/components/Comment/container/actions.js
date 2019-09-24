import * as CONSTANTS from './constants';

export const addComment = (comment) => ({
  type: CONSTANTS.ADD_COMMENT,
  comment
});

export const deleteComment = (id) => ({
  type: CONSTANTS.DELETE_COMMENT,
  id
});

export const editCommentMode = (id, mode) => ({
  type: CONSTANTS.EDIT_COMMENT_MODE,
  id,
  mode
});

export const editComment = (id, commentText) => ({
  type: CONSTANTS.EDIT_COMMENT,
  id,
  commentText
});
