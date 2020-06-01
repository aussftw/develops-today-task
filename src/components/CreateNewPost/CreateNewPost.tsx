import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { createPost } from '../../redux/actions/index';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Typography, Box, Button } from '@material-ui/core';
import { useState } from 'react';
import { UserPost } from '../../interfaces/index';
import Router from 'next/router';
import useStyles from './useStyles';

type OwnPropsTypes = {
  header: string;
};

type PostTypes = {
  body: string;
  title: string;
  id: number;
};

type MapStatePropsType = {
  singlePost: PostTypes;
};

type MapDispatchPropsType = {
  createPost: (title: string, body: string) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsTypes;

const CreateNewPost: React.FC<PropsType> = ({ header, createPost }) => {
  const classes = useStyles();

  const [postData, setPostData] = useState<UserPost>({ title: '', body: '' });

  const onSubmit = (values: any) => {
    createPost(postData.title, postData.body);
    Router.push('/');
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <ValidatorForm onSubmit={onSubmit} autoComplete="off" noValidate={false}>
          <Typography variant="h5" className={classes.title}>
            Create new post
          </Typography>
          <TextValidator
            value={postData.title}
            name="title"
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            onChange={(e) => handleChange(e)}
            variant="outlined"
            placeholder="Title"
            validators={['required', 'matchRegexp:[^\\s]{3}(.){0,117}']}
            errorMessages={['This field is required', 'Text must be between 3 and 120 characters']}
            className={classes.textField}
          />
          <TextValidator
            value={postData.body}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            onChange={(e) => handleChange(e)}
            name="body"
            multiline={true}
            variant="outlined"
            placeholder="Tell your story"
            validators={['required', 'matchRegexp:[^\\s]{3}(.){0,117}']}
            errorMessages={['This field is required', 'Text must be between 3 and 3000 characters']}
            className={classes.textField}
            rows={10}
          />
          <Button type="submit" variant="contained" className={classes.btn}>
            {header}
          </Button>
        </ValidatorForm>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    singlePost: state.app.singlePost,
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {
    createPost,
  })
)(CreateNewPost);
