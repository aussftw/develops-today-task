import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://simple-blog-api.crew.red/',
  headers: {
    'Content-Type': 'application/json',
  },
});
const API = {
  getPosts() {
    return instance.get(`posts`).then((response) => response.data);
  },
  getPost(postId: number) {
    return instance.get(`posts/${postId}?_embed=comments`);
  },
  postPost(title: string, body: string) {
    return instance.post(`posts`, { title, body });
  },
  removePost(postId: number) {
    return instance.delete(`posts/${postId}`);
  },
  editPost(postId: number, title: string, body: string) {
    return instance.put(`posts/${postId}`, { title, body });
  },
};

export default API;
