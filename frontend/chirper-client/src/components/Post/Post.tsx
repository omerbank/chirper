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
import { formatDate } from './utils';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStyles } from './styles';

export default function Post({ post }: PostProps) {
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
        subheader={formatDate(post.postedAt)}
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
}
