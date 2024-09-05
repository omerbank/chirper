import { FC, useState } from 'react';
import { LoggedInProps } from './types';
import { useStyles } from './styles';
import { Avatar, Box, Button, IconButton, Tooltip } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { NewPostModal } from './NewPostModal';

export const LoggedIn: FC<LoggedInProps> = ({ user, setUser }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box className={classes.avatarAndBtns}>
      <Tooltip
        title={
          <>
            Logged in as:
            <br />
            {user.username}
          </>
        }
        arrow
      >
        <Avatar
          src={user.avatarUrl}
          alt={`${user.username}'s Avatar`}
          className={classes.avatar}
        />
      </Tooltip>
      <Tooltip title="Create a new post" arrow>
        <IconButton onClick={() => setIsModalOpen(true)}>
          <CreateIcon className={classes.addPostBtn} />
        </IconButton>
      </Tooltip>
      <NewPostModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
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
