import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    buttons: css({
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(2),
      marginTop: theme.spacing(-2),
    }),

    postBtn: css({
      height: 32,
    }),

    loadingBackdrop: css({
      zIndex: theme.zIndex.drawer + 1,
    }),

    loadingCircle: css({
      color: 'white',
    }),
  };
};
