import * as CONSTANTS from './constants';

const initialState = {
  commentsText: []
};

export default function reducer(state = initialState, action = {}) {
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
