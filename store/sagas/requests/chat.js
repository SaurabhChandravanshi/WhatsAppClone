import axios from 'axios';

export function getChat() {
    return axios.request({
        mathod:'GET',
        url:'https://he-json-server.herokuapp.com/chat'
    })
}