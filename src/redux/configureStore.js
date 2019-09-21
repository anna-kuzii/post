import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  }
}
