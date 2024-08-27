import { css } from '@emotion/css';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    searchBarAndSort: css({
      width: 540,
      display: 'flex',
      gap: theme.spacing(2),
    }),

    searchBar: css({
      flexGrow: 1,
    }),
  };
};
