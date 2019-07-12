/*
 * 액션 타입
 */



export const OBTAIN_TOKEN = 'OBTAIN_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
// export const INSPECT_TOKEN = 'INSPECT_TOKEN';

export const obtainToken = (payload) => {
    return { type: OBTAIN_TOKEN, payload }
}

export const refreshToken = (payload) => {
    return { type: REFRESH_TOKEN, payload }
}

// export function inspectToken(filter) {
//     return { type: SET_VISIBILITY_FILTER, filter }
// }