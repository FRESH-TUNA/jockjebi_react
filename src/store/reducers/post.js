import {OBTAIN_POST_PENDING, OBTAIN_POST_SUCCESS, OBTAIN_POST_FAILURE} from '../actions/post'

export const initialState = {
    pending: false,
    error: false
};


export default function(state=initialState, action) {
    switch (action.type) {
        case OBTAIN_POST_PENDING:
            return {
                ...state,
                pending: true,
                error: false
            };
        case OBTAIN_POST_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
                data: action.data
            };
        case OBTAIN_POST_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            };
        default:
            return initialState;
    }
}
