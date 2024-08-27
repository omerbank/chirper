import { useTheme } from '@mui/material';
import { css } from '@emotion/css';

export const useStyles = () => {
  const theme = useTheme();

  return {
    noPostsAlert: css({
      width: 540,
      marginTop: theme.spacing(2),
    }),
  };
};
