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
    case CONSTANTS.EDIT_COMMENT_MODE:
      return {
        ...state,
        comments: state.comments.map((item) =>
          (item.id === action.id) ?
            {
              ...item,
              isEdit: action.mode,
            } : item
        ),
      };
    case CONSTANTS.EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((item) =>
          (item.id === action.id) ?
            {
              ...item,
              text: action.commentText,
              isEdit: false,
            } : item
        ),
      };
    default:
      return state;
  }
}
