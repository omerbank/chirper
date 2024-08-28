import { useStyles } from './styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolBar} disableGutters>
        <Link to="">
          <img src="/chirper.svg" alt="Chirper Logo" width="75" />
        </Link>
        <Typography variant="h5" className={classes.logoTxt}>
          CHIRPER
        </Typography>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            size="large"
            className={classes.loginBtn}
            disableElevation
          >
            Log in
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.signUpBtn}
            disableElevation
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
