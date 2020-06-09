export type Comment = {
  postId: number;
  body: string;
  id: number;
};

export type UserPost = {
  title: string;
  body: string;
};

export type PostsType = {
  id: number;
  title: string;
  body: string;
  comments: Array<Comment>;
};
