import * as CONSTANTS from './constants';

export const addComment = (comment) => ({
  type: CONSTANTS.ADD_COMMENT,
  comment
});

export const deleteComment = (id) => ({
  type: CONSTANTS.DELETE_COMMENT,
  id
});
