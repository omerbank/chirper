import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    avatarAndBtn: css({
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(3),
    }),

    avatar: css({
      width: 50,
      height: 50,
    }),

    logOutBtn: css({
      color: 'white',
      borderColor: 'white',
      ':hover': {
        borderColor: 'white',
      },
      height: 40,
    }),
  };
};
