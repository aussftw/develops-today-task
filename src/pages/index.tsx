import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostsType } from '../interfaces/index';
import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';
import { getPosts } from '../redux/actions/index';
import { AppStateType } from '../redux/store';
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
          <Link as={`/posts/${post.id}`} href={`/posts?${post.id}`} key={post.id}>
            {/* <Link href={`/posts?$/{post.id}`} key={post.id}>
            <a> */}
            <Post>
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
              </Card>
            </Post>
            {/* </a> */}
          </Link>
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
