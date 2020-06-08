import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import useStyles from './useStyles';

const PostDetails: React.FC = () => {
  const singlePost = useSelector((state: AppStateType) => state.app.singlePost);
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

export default PostDetails;
