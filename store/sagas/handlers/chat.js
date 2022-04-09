import { call, put } from 'redux-saga/effects';
import { addChat } from '../../reducers/chat';
import { getChat } from '../requests/chat';

export function* handleGetChat() {
    try {
        const response =  yield call(getChat); 
        const {data} = response;
        yield put(addChat(data))
    } catch(err) {
        console.log(err)
    }
}