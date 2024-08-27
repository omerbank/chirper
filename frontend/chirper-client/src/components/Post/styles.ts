import { css } from '@emotion/css';

export const useStyles = () => {
  return {
    card: css({
      width: 540,
    }),

    avatar: css({
      width: 52,
      height: 52,
    }),

    cardHeader: css({
      paddingBottom: 0,
    }),

    contentAndLikes: css({
      marginLeft: '4px',
    }),

    likesNum: css({
      marginLeft: '-2px !important',
    }),
  };
};
