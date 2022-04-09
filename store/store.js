import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index'
import {watcherSaga} from './sagas/rootSaga'


const sagas = function* sagas() {
//   yield* developerSaga();
//   yield* authSaga();
//   yield* headerSaga();
//   yield* mockInterviewSaga();
//   yield* leaderboardSaga();
//   yield* PracticeProblemListingSaga();
//   yield* profileSaga();
//   yield* badgesSaga();
//   yield* interviewPrepSaga();
//   yield* practiceSaga();
};

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(sagaMiddleware);
  const store = createStore(reducers, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(watcherSaga)
  return store;
};