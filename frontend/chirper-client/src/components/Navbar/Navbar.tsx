import { useStyles } from './styles';
import { useUser } from '../../services/contexts/UserContext';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const classes = useStyles();

  const { user, setUser } = useUser();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolBar} disableGutters>
        <Link to="">
          <img src="/chirper.svg" alt="Chirper Logo" width="75" />
        </Link>
        <Typography variant="h5" className={classes.logoTxt}>
          CHIRPER
        </Typography>
        {!user ? (
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
            <Button
              variant="contained"
              size="large"
              className={classes.signUpBtn}
              disableElevation
            >
              Sign Up
            </Button>
          </Box>
        ) : (
          <Box className={classes.buttons}>
            <Tooltip
              title={
                <>
                  Logged in as:
                  <br />
                  {user.username}
                </>
              }
              placement="left"
              arrow
            >
              <Avatar
                src={user.avatarUrl}
                alt={`${user.username}'s Avatar`}
                className={classes.avatar}
              />
            </Tooltip>
            <Button
              onClick={() => setUser(null)}
              variant="outlined"
              size="medium"
              className={classes.logOutBtn}
              disableElevation
            >
              Log out
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
