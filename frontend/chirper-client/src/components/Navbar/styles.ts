import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    appBar: css({
      backgroundColor: theme.palette.primary.main,
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
      flexGrow: 1,
    }),
  };
};
