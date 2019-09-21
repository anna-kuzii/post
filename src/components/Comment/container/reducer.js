import * as CONSTANTS from './constants';
import defaultComment from '../assets/comments';

const initialState = {
  commentsText: [...defaultComment]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.ADD_COMMENT:
      return {
        ...state,
        commentsText: [...state.commentsText, action.comment],
      };
    case CONSTANTS.DELETE_COMMENT:
      return {
        ...state,
        commentsText: state.commentsText.filter((item) => action.id !== item.id)
      };
    default:
      return state;
  }
}
