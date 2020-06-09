import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { editPost } from '../../../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';

interface IdialogComponent {
  open: boolean;
  handleOpen: () => void;
  postId?: number;
  title?: string;
  body?: string;
}

const DialogComponent: React.FC<IdialogComponent> = (props: IdialogComponent) => {
  const dispatch = useDispatch();
  return (
    <Dialog
      open={props.open}
      keepMounted
      onClose={props.handleOpen}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no
          apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleOpen} color="primary">
          Disagree
        </Button>
        <Button onClick={() => dispatch(editPost(props.postId, props.title, props.body))} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
