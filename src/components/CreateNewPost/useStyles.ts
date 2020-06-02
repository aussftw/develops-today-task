import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    // height: '83vh',
  },

  container: {
    margin: '0 1rem',
  },

  textField: {
    width: '100%',
    marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '15px',
        borderColor: '#4B2E39',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#32021F',
        borderWidth: '2px',
      },
    },
  },
  title: {
    margin: '10px 0 30px 0',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#4B2E39',
    boxShadow: '5px 5px 2px 1px rgba(0, 0, 0, .2);',
    padding: '5rem 40px',
    maxWidth: 800,
    margin: '0 10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },

  modalText: {
    color: '#fff',
    padding: '1rem 0',
  },

  modalBtn: {
    padding: '0.5rem 2rem',
    backgroundColor: '#77a0a9',
    color: '#fff',
    minWidth: '95px',
    '&:hover': {
      backgroundColor: '#6f7d8c',
      color: '#fff',
    },
  },

  btn: {
    marginTop: '1rem',
    letterSpacing: '2px',
    padding: '13px 1rem',
    color: '#fff',
    width: '50%',
    backgroundColor: '#4B2E39',
    '&:hover': {
      backgroundColor: '#32021F',
      color: 'white',
    },
  },
});

export default useStyles;
