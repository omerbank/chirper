import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    appBar: css({
      backgroundColor: '#347380',
      marginBottom: theme.spacing(5),
      paddingRight: theme.spacing(2),
    }),

    toolBar: css({
      padding: theme.spacing(1),
      display: 'flex',
      gap: theme.spacing(1),
    }),

    logoTxt: css({
      fontFamily: 'monospace',
      fontWeight: 'bold',
      letterSpacing: '.3rem',
    }),

    buttons: css({
      marginLeft: 'auto',
      display: 'flex',
      gap: theme.spacing(2),
    }),

    loginBtn: css({
      color: 'black',
      backgroundColor: 'white',
      ':hover': {
        backgroundColor: '#d9d9d9',
      },
    }),

    signUpBtn: css({
      color: 'white',
      backgroundColor: '#164e58',
      ':hover': {
        backgroundColor: '#13424b',
      },
    }),
  };
};
