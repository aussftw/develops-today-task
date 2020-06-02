import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PostsType } from '../interfaces/index';
import Link from 'next/link';
import styled from 'styled-components';
import { Card, Typography, IconButton, CardHeader, CardContent, CardActions } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { getPosts } from '../redux/actions/index';
import { AppStateType } from '../redux/store';

type MapStatePropsType = {
  posts: Array<PostsType>;
  error: boolean;
};
type MapDispatchPropsType = {
  getPosts: () => void;
};

type OwnPropsType = {};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const IndexPage: React.FC<PropsType> = ({ getPosts, posts, error }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsWrapper>
      {posts.length ? (
        [...posts].reverse().map((post: PostsType) => (
          <Link href={`/posts?${post.id}`} key={post.id} as={`/posts/${post.id}`}>
            <Post>
              <Card>
                <CardHeader title={post.title} style={{ backgroundColor: '#77a0a9' }} />
                <CardContent>
                  <Typography>
                    {typeof post.body === 'undefined' || post.body.length < 0
                      ? 'ohhh, empty post, you see!'
                      : post.body}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Link key={post.id} href={`/posts?slug=${post.id}`} as={`/posts/${post.id}`}>
                      <EditIcon />
                    </Link>
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Post>
          </Link>
        ))
      ) : (
        <Typography>There are no available posts. You should try to make your own!</Typography>
      )}
    </PostsWrapper>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.app.posts,
    error: state.app.error,
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getPosts,
  })
)(IndexPage);

const Post = styled.div`
  padding-right: 10px;
  width: 32.7%;
  margin-bottom: 10px;
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 992px) {
    width: 50%;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    &:nth-child(3n) {
      padding-right: 0;
    }
  }
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap !important;
  justify-content: flex-start;
  margin: 5rem 1rem;
  cursor: pointer;
`;
