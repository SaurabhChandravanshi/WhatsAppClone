import {takeLatest} from 'redux-saga/effects';
import { handleGetChat } from './handlers/chat';


export function* watcherSaga() {
    yield takeLatest('GET_CHAT', handleGetChat);
}