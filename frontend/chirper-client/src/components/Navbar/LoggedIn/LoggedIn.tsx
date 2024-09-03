import { FC } from 'react';
import { LoggedInProps } from './types';
import { useStyles } from './styles';
import { Avatar, Box, Button, Tooltip } from '@mui/material';

export const LoggedIn: FC<LoggedInProps> = ({ user, setUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.avatarAndBtn}>
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
      >
        Log out
      </Button>
    </Box>
  );
};
