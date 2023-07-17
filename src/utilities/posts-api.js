import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getPosts() {
    return sendRequest(BASE_URL);
}

export async function addPost (formData) {
    return sendRequest(BASE_URL, 'POST', formData)
}

export async function getDetail(postId) {
    return sendRequest(`${BASE_URL}/${postId}`)
}

export async function deletePost(postId) {
    return sendRequest(`${BASE_URL}/${postId}`, 'DELETE');
  }

  export async function updatePost(postId, postData) {
    return sendRequest(`${BASE_URL}/${postId}`, 'PUT', postData);
  }
  