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
        commentsText: [...state.commentsText, {...action.comment, id: uuid()}],
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
          if (item.id === action.id) {
            return {
              ...item,
              isEdit: action.mode,
            };
          }
          return item;
        }),
      };
    case CONSTANTS.EDIT_COMMENT:
      return {
        ...state,
        commentsText: state.commentsText.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              text: action.commentText,
              isEdit: false,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
