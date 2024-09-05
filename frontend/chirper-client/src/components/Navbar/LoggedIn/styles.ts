import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    avatarAndBtns: css({
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
    }),

    avatar: css({
      width: 50,
      height: 50,
    }),

    addPostBtn: css({
      color: 'white',
      fontSize: '28px',
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
