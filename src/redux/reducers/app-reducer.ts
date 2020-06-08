import { PostsType } from '../../interfaces/index';
import * as constants from '../constants';
import { AppAcationTypes } from '../actions/index';

const initialState = {
  posts: [] as Array<PostsType>,
  singlePost: null as PostsType | null,
  error: false,
};

const appReducer = (state = initialState, action: AppAcationTypes) => {
  switch (action.type) {
    case constants.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case constants.GET_POST:
      return {
        ...state,
        singlePost: action.singlePost,
      };
    case constants.ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default appReducer;
