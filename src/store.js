import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'reducers'
import { logger } from 'middlewares/logger';
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
  );