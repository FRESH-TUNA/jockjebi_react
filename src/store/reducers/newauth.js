
import { handleActions } from 'redux-actions';
import {OBTAIN_TOKEN_PENDING, OBTAIN_TOKEN_SUCCESS, OBTAIN_TOKEN_FAILURE} from '../actions/newauth'

export const initialState = {
    pending: false,
    error: false,
    isLogin: false,
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

export default handleActions({
    [OBTAIN_TOKEN_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [OBTAIN_TOKEN_SUCCESS]: (state, action) => {
        const {jwt, username} = action.payload

        return {
            ...state,
            pending: false,
            isLogin: true,
            data: {
                ...state.data,
                jwt, username
            }
        };
    },
    [OBTAIN_TOKEN_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true,
            status: action.payload
        }
    }
}, initialState);

