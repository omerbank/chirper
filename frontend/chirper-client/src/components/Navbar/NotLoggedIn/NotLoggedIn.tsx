import { useStyles } from './styles';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotLoggedIn = () => {
  const classes = useStyles();

  return (
    <Box className={classes.buttons}>
      <Link to="login">
        <Button
          variant="contained"
          size="large"
          className={classes.loginBtn}
          disableElevation
        >
          Log in
        </Button>
      </Link>
      <Link to="sign-up">
        <Button
          variant="contained"
          size="large"
          className={classes.signUpBtn}
          disableElevation
        >
          Sign Up
        </Button>
      </Link>
    </Box>
  );
};
