import { Map } from "immutable";

const initialState = Map();


export const setConversation = (data)=> {
    return {
        type:'SET_CONVERSATION',
        payload:data
    }
}

const conversationReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'SET_CONVERSATION':
            const {payload} = action;
            return state = Map(payload);
        default:
            return state;
    }
}

export default conversationReducer;