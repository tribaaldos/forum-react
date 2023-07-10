import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getPosts() {
    return sendRequest(BASE_URL);
}

export async function addPost (formData) {
    return sendRequest(BASE_URL, 'POST', {text:formData})
}