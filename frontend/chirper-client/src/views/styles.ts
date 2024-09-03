import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    fieldsAndSubmit: css({
      width: 400,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(4),
    }),

    inputFields: css({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    }),

    inputField: css({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
    }),

    submitBtn: css({
      backgroundColor: theme.palette.primary.main,
      ':hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
  };
};
