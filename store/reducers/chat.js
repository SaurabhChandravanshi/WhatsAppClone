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
        case 'ADD_MESSAGE':
            return state.map((e) => {
                if(e.phone == action.payload.phone) {
                    e.conversation = [...e.conversation, {message:action.payload.message, isOutgoing:true}]
                } 
                return e;
            })
        default:
            return state;
    }
}

export default chatReducer;