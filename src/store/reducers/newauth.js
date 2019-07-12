import { handleActions } from 'redux-actions';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000'

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

const initialState = {
    pending: false,
    error: false,
    data: {
        jwt: localStorage.getItem('t'),
        username: localStorage.getItem('username'),
        useruni: localStorage.getItem('useruni'),
        endpoints: {
            obtainJWT: '/token',
            refreshJWT: '/refresh'
        },
    }
};


function obtainTokenResponse(payload) {
    return axios.post(initialState.data.endpoints.obtainJWT, payload)
}

export function obtainToken(payload) {
    return async dispatch => {
        // 먼저, 요청이 시작했다는것을 알립니다
        dispatch({ type: GET_POST_PENDING });
        // 요청을 시작합니다
        // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
        let response = await obtainTokenResponse(payload)
        if (response.status === 200) {
            // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.

            dispatch({
                type: GET_POST_SUCCESS,
                payload: {jwt: 'jwt ' + response.data.token, username: payload.username}
            })
        }
        else {
            dispatch({
                type: GET_POST_FAILURE,
                payload: response
            });
        }
    }
}


export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_POST_SUCCESS]: (state, action) => {
        console.log('success')
        const {jwt, username} = action.payload

        return {
            ...state,
            pending: false,
            data: {
                ...state.data,
                jwt, username
            }
        };
    },
    [GET_POST_FAILURE]: (state, action) => {
        console.log('failure')
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);