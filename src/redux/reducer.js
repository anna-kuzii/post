import { combineReducers } from 'redux';
import commentReducer from '../components/Comment/container/reducer';

export default combineReducers({
  comments: commentReducer,
});
