import * as CONSTANTS from './constants';
import uuid from 'uuid/v4';
import defaultComment from '../assets/comments';

const initialState = {
  commentsText: [...defaultComment]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.ADD_COMMENT:
      return {
        ...state,
        commentsText: [...state.commentsText, {id: uuid(), text: action.comment}],
      };
    case CONSTANTS.DELETE_COMMENT:
      return {
        ...state,
        commentsText: state.commentsText.filter((item) => action.id !== item.id)
      };
    case CONSTANTS.EDIT_COMMENT_MODE:
      return {
        ...state,
        commentsText: state.commentsText.map((item) => {
          return (item.id === action.id) ?
            {
              ...item,
              isEdit: action.mode,
            } : item;
        }),
      };
    case CONSTANTS.EDIT_COMMENT:
      return {
        ...state,
        commentsText: state.commentsText.map((item) => {
          return (item.id === action.id) ?
            {
              ...item,
              text: action.commentText,
              isEdit: false,
            } : item;
        }),
      };
    default:
      return state;
  }
}
