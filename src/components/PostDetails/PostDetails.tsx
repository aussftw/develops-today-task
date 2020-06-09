import { Typography, Card, CardHeader, CardContent, TextField, Button, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { deletePost } from '../../redux/actions/index';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Router from 'next/router';
import useStyles from './useStyles';
import { useState } from 'react';
import { UserPost } from '../../interfaces/index';
import DialogComponent from '../common/Dialog/index';

const PostDetails: React.FC = () => {
  const singlePost = useSelector((state: AppStateType) => state.app.singlePost);
  const [activeEdit, setActiveEdit] = useState<boolean>(false);
  const [postData, setPostData] = useState<UserPost>({ title: '', body: '' });
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const id = singlePost.id;

  const deletePostWrapper = async () => {
    dispatch(deletePost(id));
    await Router.push('/');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {singlePost ? (
        <Card className={classes.wrapper}>
          <CardHeader
            title={activeEdit ? null : singlePost.title}
            className={classes.header}
            action={
              <>
                {activeEdit ? (
                  <div style={{ position: 'absolute', left: '17%' }}>
                    <TextField
                      defaultValue={singlePost.body}
                      placeholder="Titile of your post"
                      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                      // @ts-ignore
                      onChange={(e) => handleChange(e)}
                      name="title"
                      autoComplete="false"
                    />
                  </div>
                ) : null}
                <div>
                  <IconButton
                    onClick={() => {
                      setActiveEdit(!activeEdit);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={() => deletePostWrapper()}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </>
            }
            style={{ backgroundColor: 'purple' }}
          ></CardHeader>
          <CardContent className={classes.content}>
            {activeEdit ? (
              <TextField
                defaultValue={singlePost.body}
                placeholder="tell your stroy"
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                onChange={(e) => handleChange(e)}
                name="body"
              />
            ) : (
              <Typography className={classes.text}>{singlePost.body}</Typography>
            )}
          </CardContent>
          {activeEdit ? (
            <>
              <Button onClick={() => handleOpen()}>Edit post</Button>
              <DialogComponent
                open={open}
                handleOpen={handleOpen}
                postId={singlePost.id}
                title={postData.title}
                body={postData.body}
              />
            </>
          ) : null}
        </Card>
      ) : (
        <Typography> Nothing here</Typography>
      )}
    </>
  );
};

export default PostDetails;
