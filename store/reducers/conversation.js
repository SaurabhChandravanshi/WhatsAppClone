const initialState = {};


export const setCurrentChat = (data)=> {
    return {
        type:'SET_CONVERSATION',
        payload:data
    }
}

export const getCurrentChat = () => {
    return {
        type:'GET_CONVERSATION'
    }
}

const conversationReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'SET_CONVERSATION':
            const {payload} = action;
            return payload;
        default:
            return state;
    }
}

export default conversationReducer;