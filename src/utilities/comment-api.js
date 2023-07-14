import sendRequest from "./send-request";
const BASE_URL = '/api/comment';

export async function addComment (comment, postId) {
    console.log(comment)
    return sendRequest(`${BASE_URL}/${postId}/new`, 'POST', comment)
}
export async function deleteComment (comment, postId) {
    console.log(comment)
    return sendRequest(`${BASE_URL}/${postId}/new`, 'DELETE', comment)
}