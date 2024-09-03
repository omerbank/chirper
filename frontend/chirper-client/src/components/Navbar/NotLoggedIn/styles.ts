import { useTheme } from '@mui/material';
import { css } from '@emotion/css';
import { grey } from '@mui/material/colors';

export const useStyles = () => {
  const theme = useTheme();

  return {
    buttons: css({
      display: 'flex',
      gap: theme.spacing(2),
    }),

    loginBtn: css({
      color: 'black',
      backgroundColor: 'white',
      ':hover': {
        backgroundColor: grey[300],
      },
    }),

    signUpBtn: css({
      backgroundColor: theme.palette.secondary.main,
      ':hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    }),
  };
};
