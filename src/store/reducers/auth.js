import { OBTAIN_TOKEN, REFRESH_TOKEN } from '../actions/auth';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'
/*
 * initialState 구현
 * react tic-tac-toe의 최 상위 Component인 Game의 state를 참고합니다.
 */
const initialState = {
    jwt: localStorage.getItem('t'),
    username: localStorage.getItem('username'),
    useruni: localStorage.getItem('useruni'),
    endpoints: {
        obtainJWT: '/token',
        refreshJWT: '/refresh'
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case OBTAIN_TOKEN:
            let response = obtainToken(action.payload)
            console.log(response.data)

            if (response.status == 201) {
                return {
                    jwt: response.data.token,
                    username: action.payload.username,
                    useruni: response.data.university,
                    endpoints: state.endpoints
                };
            }
            return state
        case REFRESH_TOKEN:
            return state;
        default:
            return state;
    }
}

function obtainToken(payload) {
    return obtainTokenResponse(payload);
}
function obtainTokenResponse(payload) {
    return axios.post(initialState.endpoints.obtainJWT, payload)
}

export default reducer;