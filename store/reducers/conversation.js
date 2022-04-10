const initialState = {};


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
            return state = payload;
        default:
            return state;
    }
}

export default conversationReducer;