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

  btn: {
    marginTop: '1rem',
    letterSpacing: '2px',
    padding: '13px 1rem',
    color: 'white',
    width: '50%',
    backgroundColor: '#4B2E39',
    '&:hover': {
      backgroundColor: '#32021F',
      color: 'white',
    },
  },
});

export default useStyles;
