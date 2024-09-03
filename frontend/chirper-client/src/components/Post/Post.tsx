import { FC } from 'react';
import { PostProps } from './types';
import { useStyles } from './styles';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import moment from 'moment';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Post: FC<PostProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            src={post.user.avatarUrl}
            alt={`${post.user.username}'s Avatar`}
            className={classes.avatar}
          />
        }
        title={`@${post.user.username}`}
        subheader={moment(post.createdAt).format('MMMM DD, y, HH:mm')}
        titleTypographyProps={{ fontSize: 16, fontWeight: 600 }}
        className={classes.cardHeader}
      />
      <Box className={classes.contentAndLikes}>
        <CardContent>
          <Typography variant="body1">{post.content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={(e) => e.preventDefault()}>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="button" className={classes.likesNum}>
            {post.likesNum > 0 && post.likesNum}
          </Typography>
        </CardActions>
      </Box>
    </Card>
  );
};
