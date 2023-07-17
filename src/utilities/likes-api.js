import sendRequest from "./send-request"
const BASE_URL = 'api/likes'

export async function getUser(userId) {
    const url = `${BASE_URL}/user/${userId}`;
    return sendRequest(url, 'GET');
}

export async function addLike(like, postId) {
    return sendRequest(`${BASE_URL}/${postId}/new`, 'POST', like);
}