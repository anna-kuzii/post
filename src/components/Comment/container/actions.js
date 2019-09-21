import * as CONSTANTS from './constants';

export const addComment = (comment) => ({
  type: CONSTANTS.ADD_COMMENT,
  comment
});
