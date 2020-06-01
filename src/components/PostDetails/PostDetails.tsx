import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { PostsType } from '../../interfaces';
import { getPost } from '../../redux/actions/index';
import useStyles from './useStyles';

type OwnPropsTypes = {
  singlePost: PostsType;
};
type MapStatePropsType = {
  singlePost: PostsType;
  error: boolean;
};

type MapDispatchPropsType = {
  getPost: (postId: number) => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    singlePost: state.app.singlePost,
    error: state.app.error,
  };
};

const PostDetails: React.FC<OwnPropsTypes> = ({ singlePost }) => {
  const classes = useStyles();
  return (
    <>
      {singlePost ? (
        <Card className={classes.wrapper}>
          <CardHeader title={singlePost.title} className={classes.header}></CardHeader>
          <CardContent className={classes.content}>
            <Typography className={classes.text}>{singlePost.body}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography> Nothing here</Typography>
      )}
    </>
  );
};

export default compose(connect<MapStatePropsType, OwnPropsTypes, MapDispatchPropsType, AppStateType>(mapStateToProps))(
  PostDetails
);
