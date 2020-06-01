import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { getPost } from '../../redux/actions/index';
import { useEffect } from 'react';
import { PostsType } from '../../interfaces';
import { useRouter } from 'next/router';
import PostDetails from '../../components/PostDetails/PostDetails';

const Wrapper = styled.div`
  margin: 7rem auto;
  @media (min-width: 998px) {
    margin: 10rem auto;
  }
`;

type OwnPropsTypes = {
  postId: number;
};
type MapStatePropsType = {
  singlePost: PostsType;
  error: boolean;
};
type MapDispatchPropsType = {
  getPost: (postId: number) => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsTypes;

const Post: React.FC<PropsType> = ({ getPost, singlePost, error }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const id: string = useRouter().query.posts;
  const postId: number = parseInt(id);

  useEffect(() => {
    if (postId) {
      getPost(postId);
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    singlePost: state.app.singlePost,
    error: state.app.error,
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {
    getPost,
  })
)(Post);
