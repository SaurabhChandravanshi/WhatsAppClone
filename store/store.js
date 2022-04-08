import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index'


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
const rootReducer = combineReducers({
//   developers: DeveloperReducer,
//   auth: AuthReducer,
//   header: HeaderReducer,
//   mockInterview: MockInterviewReducer,
//   leaderboard: LeaderboardReducer,
//   practiceProblemListing: PracticeProblemListingReducer,
//   profile: ProfileReducer,
//   common: CommonReducer,
//   badges: BadgesReducer,
//   interviewPrep: InterviewPrepReducer,
//   practice: PracticeReducer,
});

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(sagaMiddleware);
  const store = createStore(reducers, initialState, enhancer);
  // store.sagaTask = sagaMiddleware.run(sagas);

  return store;
};