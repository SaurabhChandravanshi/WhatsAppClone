const initialState = [];


export const addChat = (data)=> {
    return {
        type:'SET_CHAT',
        payload:data
    }
}

export const getChat = () => {
    return {
        type:'GET_CHAT'
    }
}

const chatReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'SET_CHAT':
            const {payload} = action;
            return payload;
        default:
            return state;
    }
}

export default chatReducer;