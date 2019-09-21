import * as CONSTANTS from './constants';
import defaultComment from '../assets/comments';

const initialState = {
  commentsText: [...defaultComment]
};

export default function reducer(state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case CONSTANTS.ADD_COMMENT:
      return {
        ...state,
        commentsText: [...state.commentsText, action.comment],
      };
    default:
      return state;
  }
}
