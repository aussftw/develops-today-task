import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/index';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Typography, Box, Button, Modal, Backdrop, Fade, Container } from '@material-ui/core';
import { UserPost } from '../../interfaces/index';
import styled from 'styled-components';
import useStyles from './useStyles';
import Router from 'next/router';

const CreateNewPost: React.FC = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState<UserPost>({ title: '', body: '' });
  const [open, setOpen] = useState<boolean>(false);

  const classes = useStyles();

  const onSubmit = async () => {
    dispatch(createPost(postData.title, postData.body));
    setPostData({ title: '', body: '' });
    setOpen(false);
    await Router.push('/');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  //TODO: disable button

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <ValidatorForm autoComplete="off" onSubmit={onSubmit} noValidate={true}>
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
          <Button variant="contained" className={classes.btn} onClick={() => setOpen(true)}>
            Tell your story
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={(e) => setOpen(false)}
            closeAfterTransition
            disablePortal
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Container className={classes.paper}>
                <Typography className={classes.modalText}>Are you sure that you want to public your post?</Typography>
                <ButtonsContainer>
                  <Button type="submit" className={classes.modalBtn} onSubmit={onSubmit}>
                    Yes
                  </Button>
                  <Button className={classes.modalBtn} onClick={() => setOpen(false)}>
                    No
                  </Button>
                </ButtonsContainer>
              </Container>
            </Fade>
          </Modal>
        </ValidatorForm>
      </Box>
    </Box>
  );
};

export default CreateNewPost;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;
