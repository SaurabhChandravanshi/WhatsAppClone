import { combineReducers } from "redux";
import chat from "./chat";
import conversation from "./conversation";

const reducers = combineReducers({
    chat,
    conversation
})

export default reducers;