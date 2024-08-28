import { FC } from 'react';
import { PostProps } from './types';
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
import { useStyles } from './styles';

export const Post: FC<PostProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            src={post.avatarUrl}
            alt={`${post.username}'s Avatar`}
            className={classes.avatar}
          />
        }
        title={`@${post.username}`}
        subheader={moment(post.postedAt).format('MMMM DD, y, HH:mm')}
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
