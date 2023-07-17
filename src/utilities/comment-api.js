import sendRequest from "./send-request";
const BASE_URL = '/api/comment';

export async function getUser(userId) {
  const url = `${BASE_URL}/user/${userId}`;
  return sendRequest(url, 'GET');
}

export async function addComment(comment, postId) {
  return sendRequest(`${BASE_URL}/${postId}/new`, 'POST', comment);
}

export async function deleteComment(commentId, postId) {
  const url = `${BASE_URL}/${postId}/${commentId}`;
  return sendRequest(url, 'DELETE');
}
