import axios from 'axios';

export const OBTAIN_POST_PENDING = 'OBTAIN_POST_PENDING';
export const OBTAIN_POST_SUCCESS = 'OBTAIN_POST_SUCCESS';
export const OBTAIN_POST_FAILURE = 'OBTAIN_POST_FAILURE';

function getPostResponse(postPk) {
    return axios.get('api/post/' + postPk)
}

export function getPost(postPk) {
    return async dispatch => {
        // 먼저, 요청이 시작했다는것을 알립니다
        dispatch({ type: OBTAIN_POST_PENDING });
        // 요청을 시작합니다
        // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
        try {
            const response = await getPostResponse()
            dispatch({
                type: OBTAIN_POST_SUCCESS,
                payload: {data: response.data}
            })
        }
        catch(error) {
            dispatch({
                type: OBTAIN_POST_FAILURE,
                payload: error.response.status,
            });
        }
    }
}