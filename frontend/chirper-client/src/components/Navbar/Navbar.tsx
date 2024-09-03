import { useStyles } from './styles';
import { useUser } from '../../services/contexts/UserContext';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NotLoggedIn } from './NotLoggedIn';
import { LoggedIn } from './LoggedIn';

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
        {!user ? <NotLoggedIn /> : <LoggedIn user={user} setUser={setUser} />}
      </Toolbar>
    </AppBar>
  );
};
