import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostsType } from '../interfaces/index';
import { Card, Typography, CardHeader, CardContent, CardActions, Divider, IconButton } from '@material-ui/core';
import { getPosts, deletePost, editPost } from '../redux/actions/index';
import { AppStateType } from '../redux/store';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import styled from 'styled-components';

const IndexPage: React.FC = () => {
  const posts: [] = useSelector((state: AppStateType) => state.app.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <PostsWrapper>
      {posts.length ? (
        [...posts].reverse().map((post: PostsType) => (
          <Post key={post.id}>
            <Card>
              <CardHeader
                title={
                  typeof post.title === 'undefined' || post.title === ''
                    ? 'Oopps, looks like someone forgot about title.'
                    : post.title.length > 30
                    ? post.title.slice(0, 30) + '...'
                    : post.title
                }
                style={{ backgroundColor: '#77a0a9', minHeight: '98px' }}
              />
              <CardContent style={{ minHeight: '170px' }}>
                <Typography>
                  {typeof post.body === 'undefined' || post.body === '' ? 'Oopps, empty post, you see!' : post.body}
                </Typography>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton>
                  <Link href={`/posts?$/{post.id}`} as={`/posts/${post.id}`}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <Divider orientation="vertical" variant="fullWidth" style={{ height: '40px', width: '2px' }} />
                <IconButton>
                  <DeleteIcon onClick={() => dispatch(deletePost(post.id))} />
                </IconButton>
              </CardActions>
            </Card>
          </Post>
        ))
      ) : (
        <Typography>There are no available posts, but you can write one.</Typography>
      )}
    </PostsWrapper>
  );
};

export default IndexPage;

const Post = styled.div`
  padding-right: 1rem;
  width: 32.7%;
  margin-bottom: 2rem;
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
  }
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap !important;
  justify-content: flex-start;
  margin: 5rem 1rem;
  cursor: pointer;
`;
