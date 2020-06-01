import API from '../../api/api';
import * as constants from '../constants';
import { PostsType } from '../../interfaces/index';

type SetError = {
  type: typeof constants.ERROR;
  error: boolean;
};
export const setError = (error: boolean): SetError => {
  return {
    type: constants.ERROR,
    error,
  };
};

type SetSinglePost = {
  type: typeof constants.GET_POST;
  singlePost: PostsType;
};
export const setSinglePost = (singlePost: PostsType): SetSinglePost => {
  return {
    type: constants.GET_POST,
    singlePost,
  };
};

type SetPostsType = {
  type: typeof constants.SET_POSTS;
  posts: PostsType;
};
export const setPosts = (posts: PostsType): SetPostsType => {
  return {
    type: constants.SET_POSTS,
    posts,
  };
};

export const createPost = (title: string, body: string) => async (dispatch: any) => {
  const response = await API.postPost(title, body);
  if (response.status === 201) {
    const data = await API.getPosts();
    dispatch(setPosts(data));
  }
};

export const getPost = (postId: number) => async (dispatch: any) => {
  const response = await API.getPost(postId);
  if (response.status === 200) {
    dispatch(setSinglePost(response.data));
  }
};

export const getPosts = () => async (dispatch: any) => {
  const data = await API.getPosts();
  dispatch(setPosts(data));
};
