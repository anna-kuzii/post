import * as CONSTANTS from './constants';
import uuid from 'uuid/v4';
import defaultComment from '../assets/comments';

const initialState = {
  comments: [...defaultComment]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, {id: uuid(), text: action.comment}],
      };
    case CONSTANTS.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((item) => action.id !== item.id)
      };
    case CONSTANTS.EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.data
      };
    case CONSTANTS.EDIT_COMMENT_ERROR:
      return {
        ...state,
        error: action.error
      };
    case CONSTANTS.EDIT_COMMENT_MODE_SUCCESS:
      return {
        ...state,
        comments: action.data
      };
    case CONSTANTS.EDIT_COMMENT_MODE_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
