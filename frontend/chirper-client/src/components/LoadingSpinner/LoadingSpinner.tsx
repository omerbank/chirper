import { useStyles } from './styles';
import { CircularProgress } from '@mui/material';

export const LoadingSpinner = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} />;
};
