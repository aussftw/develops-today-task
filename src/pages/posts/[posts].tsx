import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { getPost } from '../../redux/actions/index';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PostDetails from '../../components/PostDetails/PostDetails';

const Post: React.FC = () => {
  const dispatch = useDispatch();
  const singlePost = useSelector((state: AppStateType) => state.app.singlePost);

  const id: any = useRouter().query.posts;
  const postId = parseInt(id);

  useEffect(() => {
    if (postId) {
      dispatch(getPost(postId));
    }
  }, [id]);

  return (
    <>
      {singlePost ? (
        <Wrapper>
          <PostDetails />
        </Wrapper>
      ) : (
        <Wrapper>
          <Typography> Nothing here</Typography>
        </Wrapper>
      )}
    </>
  );
};

export default Post;

const Wrapper = styled.div`
  margin: 7rem auto;
  @media (min-width: 998px) {
    margin: 10rem auto;
  }
`;
