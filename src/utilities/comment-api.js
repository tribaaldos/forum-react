import sendRequest from "./send-request";
const BASE_URL = '/api/comment';

export async function addComment (comment, postId) {
    console.log(comment)
    return sendRequest(`${BASE_URL}/${postId}/new`, 'POST', comment)
}
export async function deleteComment(commentId, postId) {
    console.log(commentId); // Check if commentId is correctly received
  
    const url = `${BASE_URL}/${postId}/${commentId}`; // Adjust the URL construction
  
    return sendRequest(url, 'DELETE');
  }
  