import * as CONSTANTS from './constants';
import uuid from 'uuid/v4';

const initialState = {
  comments: [],
  isLoading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.data,
        isLoading: false
      };
    case CONSTANTS.FETCH_COMMENT_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case CONSTANTS.FETCH_COMMENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.TOGGLE_COMMENTS:
      return {
        ...state,
        comments: state.comments.map((item) => (
            (item.id === action.id) ?
              {
                ...item,
                isOpen: !item.isOpen,
              } : item
          )
        )
      };
    case CONSTANTS.ADD_ANSWER_MODE:
      return {
        ...state,
        comments: state.comments.map((item) => (
          (item.id === action.id) ?
            {
              ...item,
              addAnswer: action.mode,
            } : item
          )
        )
      };
    case CONSTANTS.ADD_COMMENT:
      return {
        ...state,
        comments: (!action.parentId) ?
          [...state.comments, {id: uuid(), text: action.comment}]:
          state.comments.map((item) => (
            (item.id === action.parentId) ?
              item.comments ?
                {
                  ...item,
                  comments: [...item.comments, {id: uuid(), text: action.comment}],
                } :
                {
                  ...item,
                  comments: [{id: uuid(), text: action.comment}],
                }
              : item
            )
          )
      };
    case CONSTANTS.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.data
      };
    case CONSTANTS.DELETE_COMMENT_ERROR:
      return {
        ...state,
        error: action.error
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
